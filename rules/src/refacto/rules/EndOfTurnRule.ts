import { MaterialRulesPart } from '@gamepark/rules-api/dist/material/rules/MaterialRulesPart'
import { RuleMove } from '@gamepark/rules-api/dist/material/moves/rules/RuleMove'
import { MaterialMove } from '@gamepark/rules-api/dist/material/moves/MaterialMove'
import { RuleId } from './RuleId'

export class EndOfTurnRule extends MaterialRulesPart {
  onRuleStart(_move: RuleMove): MaterialMove[] {
    return [this.rules().startRule(RuleId.OnibiAttacksPlayer)]
  }
}