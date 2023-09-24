import { isMoveItemType, ItemMove, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { Memory } from '../Memory'
import { RuleId } from '../RuleId'

export class PlantProtectiveTreeRule extends PlayerTurnRule {
  getPlayerMoves(): MaterialMove<number, number, number>[] {
    return []
  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.SpiritOfNatureStandee)(move)) return []

    // TODO: if there is an effect, don't decrease and go to action
    this.memorize(Memory.Actions, (action) => action - 1)
    return [this.rules().startRule(RuleId.Action)]
  }
}