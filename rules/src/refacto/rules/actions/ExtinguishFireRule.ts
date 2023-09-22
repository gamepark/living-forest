import { isMoveItemType, ItemMove, MaterialMove, MoveItem, PlayerTurnRule } from '@gamepark/rules-api'
import { HelpLine } from '../helper/HelpLine'
import { MaterialType } from '../../material/MaterialType'
import { LocationType } from '../../material/LocationType'
import { Memory } from '../Memory'
import { RuleId } from '../RuleId'

export class ExtinguishFireRule extends PlayerTurnRule {

  getPlayerMoves(): MaterialMove[] {
    return this.extinguishFire
  }

  afterItemMove(move: ItemMove): MaterialMove[] {
    if (!isMoveItemType(MaterialType.FireTile)(move)) return []
    this.updateSpent(move)
    if (this.possible) return []

    this.memorize(Memory.Actions, (action) => action - 1)
    return [this.rules().startPlayerTurn(RuleId.Action, this.player)]
  }

  updateSpent(move: MoveItem) {
    const item = this.material(move.itemType).index(move.itemIndex).getItem()!
    this.memorize(Memory.SpentPoints, (points) => points + item.id)
  }

  get possible() {
    return this.extinguishFire.length
  }

  get helpLine() {
    return new HelpLine(this.game, this.player)
  }

  get extinguishFire() {
    const fire = this.material(MaterialType.FireTile).location(LocationType.CircleOfSpiritBoardSpace)
    return fire
      .filter((item) => item.id <= this.resources)
      .moveItems({ location: { type: LocationType.ForestBoard, player: this.player }})
  }

  get resources() {
    return this.helpLine.waterResources - (this.remind(Memory.SpentPoints) ?? 0)
  }

  onRuleEnd() {
    this.forget(Memory.BonusAction)
    return []
  }

}