import { MaterialRulesPart } from '@gamepark/rules-api/dist/material/rules/MaterialRulesPart'
import { RuleId } from './RuleId'

export class ReturnOfGuardianAnimalsRule extends MaterialRulesPart {

  onRuleStart() {
    // Perform rule
    return [this.rules().startRule(RuleId.PassingSacredTree)]
  }
}