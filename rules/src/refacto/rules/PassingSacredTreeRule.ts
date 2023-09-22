import { MaterialRulesPart } from '@gamepark/rules-api/dist/material/rules/MaterialRulesPart'
import { RuleId } from './RuleId'

export class PassingSacredTreeRule extends MaterialRulesPart {

  onRuleStart() {
    // TODO: Get the player after the actual player, then change the sacred tree (move)
    // Perform rule
    return [this.rules().startPlayerTurn(RuleId.Action, this.game.players[0])]
  }

  // TODO: Move the sacred tree, then, call
  // return [this.rules().startPlayerTurn(RuleId.Action, this.sacredTreePlayer)]

}