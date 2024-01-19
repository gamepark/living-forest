import { isMoveItemType, ItemMove, MaterialMove, MoveItem, PlayerTurnRule } from '@gamepark/rules-api'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import Resource from '../../material/Resource'
import { PlayerState } from '../helper/PlayerState'
import { Memory, SpentPoint } from '../Memory'
import { RuleId } from '../RuleId'

export class ExtinguishFireRule extends PlayerTurnRule {

  getPlayerMoves(): MaterialMove[] {
    const moves: MaterialMove[] = this.extinguishFireMoves

    if (this.playerState.getSpent(Resource.Drop)) {
      moves.push(this.rules().startRule(RuleId.Action))
    }
    return moves
  }

  afterItemMove(move: ItemMove): MaterialMove[] {
    if (!isMoveItemType(MaterialType.FireTile)(move)) return []
    this.updateSpent(move)

    if (this.possible) return []
    return [this.rules().startRule(RuleId.Action)]
  }

  updateSpent(move: MoveItem) {
    const item = this.material(move.itemType).getItem(move.itemIndex)!
    this.memorize<SpentPoint>(Memory.SpentPoints, (s ) => {
      const spent = { ...s }
      if (!(Resource.Drop in spent)) {
        spent[Resource.Drop] = 0
      }

      spent[Resource.Drop] += item.id
      return spent
    })
  }

  get possible() {
    return this.extinguishFireMoves.length
  }

  get playerState() {
    return new PlayerState(this.game, this.player)
  }

  get extinguishFireMoves() {
    const resources = this.resources
    const fire = this.material(MaterialType.FireTile).location(LocationType.CircleOfSpiritBoardFire)
    return fire
      .filter((item) => item.id <= resources)
      .moveItems(this.toPlayerArea)
  }

  get toPlayerArea() {
    return { type: LocationType.PlayerFireTileStack, player: this.player, id: MaterialType.FireTile }
  }

  get resources() {
    return this.playerState.waterResources
  }

  onRuleEnd() {
    this.memorize<number>(Memory.Actions, (action) => action - 1)
    this.forget(Memory.Bonus)
    this.memorize<SpentPoint>(Memory.SpentPoints, (s) => {
      if (Resource.Drop in s) delete s[Resource.Drop]
      return s
    })
    return []
  }
}