import { isMoveItemType, ItemMove, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { HelpLine } from '../helper/HelpLine'
import { LocationType } from '../../material/LocationType'
import { RuleId } from '../RuleId'
import { PlantProtectiveTreeRule } from './PlantProtectiveTreeRule'
import { TakeFragmentRule } from './TakeFragmentRule'
import { ExtinguishFireRule } from './ExtinguishFireRule'
import { AttractAnimalsRule } from './AttractAnimalsRule'

export class MoveOnCircleOfSpiritRule extends PlayerTurnRule {
  getPlayerMoves(): MaterialMove<number, number, number>[] {
    const resources = this.helpLine.windResources
    const standee = this.standee
    const position = standee.getItem()!.location.x!
    const moves: MaterialMove[] = []
    const rocks = this.rockRules
    for (let  i = 1; i <= resources; i++) {
      let newPosition = position + i
      if (newPosition >= rocks.length) {
        newPosition = newPosition % (rocks.length)
      }

      const isStandeeOnNewPosition = !!this.material(MaterialType.SpiritOfNatureStandee).location((location) => LocationType.CircleOfSpiritBoardSpace === location.type && location.x === newPosition).length
      if (isStandeeOnNewPosition) continue
      moves.push(standee.moveItem({ location: { type: LocationType.CircleOfSpiritBoardSpace, x: newPosition}}))
    }

    return moves;
  }

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.SpiritOfNatureStandee)(move)) return []

    const space = move.position.location?.x!
    const ruleId = this.rockRules[space]
    return [this.rules().startRule(!this.canDoAction(ruleId)? RuleId.Action: ruleId)]
  }

  canDoAction(ruleId: RuleId) {
    switch (ruleId) {
      case RuleId.PlantTree:
        return new PlantProtectiveTreeRule(this.game).getPlayerMoves().length
      case RuleId.TakeFragment:
        return new TakeFragmentRule(this.game).getPlayerMoves().length
      case RuleId.ExtinguishFire:
        return new ExtinguishFireRule(this.game).getPlayerMoves().length
      case RuleId.AttractAnimals:
        return new AttractAnimalsRule(this.game).getPlayerMoves().length
    }

    return false
  }

  get standee() {
    return this.material(MaterialType.SpiritOfNatureStandee).id(this.player)
  }

  get helpLine() {
    return new HelpLine(this.game, this.player)
  }

  get rockRules() {
    return [
      RuleId.PlantTree,
      RuleId.TakeFragment,
      RuleId.AttractAnimals,
      RuleId.TakeFragment,
      RuleId.ExtinguishFire,
      RuleId.TakeFragment,
      RuleId.PlantTree,
      RuleId.TakeFragment,
      RuleId.AttractAnimals,
      RuleId.TakeFragment,
      RuleId.ExtinguishFire,
      RuleId.TakeFragment,
    ]
  }
}