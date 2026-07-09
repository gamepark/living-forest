import { isMoveItemType, ItemMove, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { LocationType } from '../../material/LocationType'
import { Memory } from '../Memory'
import { RuleId } from '../RuleId'

export class TakeFragmentRule extends PlayerTurnRule {
  onRuleStart() {
    const moves = this.takeFragmentMoves
    // Entered with nothing to take (e.g. triggered as a plant-tree bonus while the fragment stock is empty):
    // fall back to the action rule instead of leaving the player with no legal move.
    if (!moves.length) return [this.startRule(RuleId.Action)]
    return moves
  }

  getPlayerMoves(): MaterialMove<number, number, number>[] {
    return this.takeFragmentMoves
  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.FragmentTile)(move)) return []
    this.memorize(Memory.FragmentTaken, (fragment) => (fragment ?? 0) + 1)
    if (this.takenFragment < this.fragmentToTake) return this.takeFragmentMoves
    return [this.startRule(RuleId.Action)]
  }

  get takeFragmentMoves() {
    const stock = this
      .material(MaterialType.FragmentTile)
      .location(LocationType.FragmentStack)
    if (!stock.length) return []
    return [stock.moveItem({ type: LocationType.PlayerFragmentTileStack, player: this.player }, 1)]
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