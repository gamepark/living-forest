import { MaterialRulesPart, RuleMove, MaterialMove } from '../workshop/packages/rules-api'
import { RuleId } from './RuleId'

export class EndOfTurnRule extends MaterialRulesPart {
  onRuleStart(_move: RuleMove): MaterialMove[] {
    return [this.rules().startRule(RuleId.OnibiAttacksPlayer)]
  }
}