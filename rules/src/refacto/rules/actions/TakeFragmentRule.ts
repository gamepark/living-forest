import { isMoveItemType, ItemMove, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { LocationType } from '../../material/LocationType'
import { Memory } from '../Memory'
import { RuleId } from '../RuleId'

export class TakeFragmentRule extends PlayerTurnRule {
  onRuleStart() {
    return this.takeFragmentMoves
  }

  getPlayerMoves(): MaterialMove<number, number, number>[] {
    return this.takeFragmentMoves
  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.FragmentTile)(move)) return []
    return [this.rules().startRule(RuleId.Action)]
  }

  get takeFragmentMoves() {
    return this
      .material(MaterialType.FragmentTile)
      .location(LocationType.FragmentStack)
      .moveItems({ location: { type: LocationType.PlayerArea, player: this.player, id: MaterialType.FragmentTile }}, 1 + this.bonus)
  }

  get bonus() {
    return this.remind(Memory.Bonus) ?? 0
  }

  onRuleEnd() {
    this.memorize(Memory.Actions, (action) => action - 1)
    this.forget(Memory.Bonus)
    return []
  }
}