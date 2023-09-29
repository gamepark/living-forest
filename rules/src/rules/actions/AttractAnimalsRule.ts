import { isMoveItemType, ItemMove, MaterialMove, MoveItem, PlayerTurnRule } from '@gamepark/rules-api'
import { PlayerState } from '../helper/PlayerState'
import { MaterialType } from '../../material/MaterialType'
import { LocationType } from '../../material/LocationType'
import { Memory } from '../Memory'
import { RuleId } from '../RuleId'
import { GuardianAnimalDescriptions } from '../../material/GuardianAnimalDescriptions'

export class AttractAnimalsRule extends PlayerTurnRule {

  getPlayerMoves(): MaterialMove<number, number, number>[] {
    const moves: MaterialMove[] = this.attractAnimalMoves
    if (this.spentPoints) {
      moves.push(this.rules().startRule(RuleId.Action))
    }

    return moves
  }

  get spentPoints() {
    return this.remind(Memory.SpentPoints)
  }

  afterItemMove(move: ItemMove): MaterialMove[] {
    if (!isMoveItemType(MaterialType.GuardianAnimalCard)(move)) return []
    this.updateSpent(move)
    if (this.possible) return []
    return [this.rules().startRule(RuleId.Action)]
  }

  updateSpent(move: MoveItem) {
    const item = this.material(move.itemType).getItem(move.itemIndex)!
    this.memorize<number>(Memory.SpentPoints, (points) => (points ?? 0) + GuardianAnimalDescriptions[item.id].cost!)
  }

  get possible() {
    return this.attractAnimalMoves.length
  }

  get playerState() {
    return new PlayerState(this.game, this.player)
  }

  get attractAnimalMoves() {
    const resources = this.resources
    const reserve = this.material(MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow)
    return reserve
      .filter((item) => GuardianAnimalDescriptions[item.id]!.cost <= resources)
      .moveItems({ location: { type: LocationType.PlayerDeckStack, player: this.player}})
  }

  get resources() {
    return this.playerState.sunResources
  }

  onRuleEnd() {
    this.memorize<number>(Memory.Actions, (action) => action - 1)
    this.forget(Memory.Bonus)
    this.forget(Memory.SpentPoints)
    return []
  }
}