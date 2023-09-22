import { isMoveItemType, ItemMove, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { LocationType } from '../../material/LocationType'
import { Memory } from '../Memory'

export class TakeFragmentRule extends PlayerTurnRule {

  getPlayerMoves(): MaterialMove<number, number, number>[] {
    return this.takeFragmentMoves
  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.FragmentTile)(move)) return []
    this.memorize(Memory.Actions, (action) => action - 1)
    return []
  }

  get takeFragmentMoves() {
    return [this
      .material(MaterialType.FragmentTile)
      .location(LocationType.FragmentStack)
      .moveItem({ location: { type: LocationType.ForestBoard, player: this.player }})]
  }
}