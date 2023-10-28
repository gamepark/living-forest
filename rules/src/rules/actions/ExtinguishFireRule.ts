import { isMoveItemType, ItemMove, MaterialMove, MoveItem, PlayerTurnRule } from '@gamepark/rules-api'
import { PlayerState } from '../helper/PlayerState'
import { MaterialType } from '../../material/MaterialType'
import { LocationType } from '../../material/LocationType'
import { Memory } from '../Memory'
import { RuleId } from '../RuleId'

export class ExtinguishFireRule extends PlayerTurnRule {

  getPlayerMoves(): MaterialMove[] {
    const moves: MaterialMove[] = this.extinguishFireMoves

    if (this.spentPoints) {
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
    this.memorize(Memory.SpentPoints, (points) => (points ?? 0) + item.id)
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

  get spentPoints() {
    return this.remind(Memory.SpentPoints)
  }

  onRuleEnd() {
    this.memorize<number>(Memory.Actions, (action) => action - 1)
    this.forget(Memory.Bonus)
    this.forget(Memory.SpentPoints)
    return []
  }
}