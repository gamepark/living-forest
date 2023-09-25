import { isMoveItemType, ItemMove, MaterialMove, MoveItem, PlayerTurnRule } from '@gamepark/rules-api'
import { HelpLine } from '../helper/HelpLine'
import { MaterialType } from '../../material/MaterialType'
import { LocationType } from '../../material/LocationType'
import { Memory } from '../Memory'
import { RuleId } from '../RuleId'
import { GuardianAnimalDescriptions } from '../../../material/GuardianAnimalDescriptions'

export class AttractAnimalsRule extends PlayerTurnRule {

  getPlayerMoves(): MaterialMove<number, number, number>[] {
    return this.attractAnimal
  }

  afterItemMove(move: ItemMove): MaterialMove[] {
    if (!isMoveItemType(MaterialType.GuardianAnimalCard)(move)) return []
    this.updateSpent(move)
    if (this.possible) return []

    this.memorize<number>(Memory.Actions, (action) => action - 1)
    return [this.rules().startRule(RuleId.Action)]
  }

  updateSpent(move: MoveItem) {
    const item = this.material(move.itemType).index(move.itemIndex).getItem()!
    this.memorize<number>(Memory.SpentPoints, (points) => points + GuardianAnimalDescriptions[item.id].cost!)
  }

  get possible() {
    return this.attractAnimal.length
  }

  get helpLine() {
    return new HelpLine(this.game, this.player)
  }

  get attractAnimal() {
    const reserve = this.material(MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow)
    return reserve
      .filter((item) => GuardianAnimalDescriptions[item.id]!.cost <= this.resources)
      .moveItems({ location: { type: LocationType.PlayerDeckStack, player: this.player}})
  }

  get resources() {
    return this.helpLine.sunResources
  }

  onRuleEnd() {
    this.forget(Memory.Bonus)
    this.forget(Memory.SpentPoints)
    return []
  }
}