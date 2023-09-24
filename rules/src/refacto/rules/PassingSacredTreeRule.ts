import { MaterialRulesPart } from '@gamepark/rules-api'
import { RuleId } from './RuleId'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import { TurnOrder } from './helper/TurnOrder'

export class PassingSacredTreeRule extends MaterialRulesPart {

  onRuleStart() {
    const nextFirstPlayer = new TurnOrder(this.game).nextFirstPlayer
    return [
      this.material(MaterialType.SacredTree).moveItem({ location: { type: LocationType.PlayerArea, player: nextFirstPlayer, id: MaterialType.SacredTree  }}),
      this.rules().startSimultaneousRule(RuleId.GuardianAnimals, this.game.players)
    ]
  }
}