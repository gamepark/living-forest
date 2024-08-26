import { MaterialRulesPart, RuleMove, MaterialMove } from '@gamepark/rules-api'
import { RuleId } from './RuleId'

export class EndOfTurnRule extends MaterialRulesPart {
  onRuleStart(_move: RuleMove): MaterialMove[] {
    return [this.startRule(RuleId.OnibiAttacksPlayer)]
  }
}