import { isMoveItemType, ItemMove, MaterialMove, PlayerTurnRule } from '../workshop/packages/rules-api'
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
    this.memorize(Memory.FragmentTaken, (fragment) => (fragment ?? 0) + 1)
    if (this.takenFragment < this.fragmentToTake) return this.takeFragmentMoves
    return [this.rules().startRule(RuleId.Action)]
  }

  get takeFragmentMoves() {
    return [this
      .material(MaterialType.FragmentTile)
      .location(LocationType.FragmentStack)
      .moveItem({ location: { type: LocationType.PlayerFragmentTileStack, player: this.player }})]
  }

  get fragmentToTake() {
    return (this.remind(Memory.Bonus) ?? 0) + 1
  }

  get takenFragment() {
    return this.remind(Memory.FragmentTaken) ?? 0
  }

  onRuleEnd() {
    this.forget(Memory.FragmentTaken)
    this.memorize(Memory.Actions, (action) => action - 1)
    this.forget(Memory.Bonus)
    return []
  }
}