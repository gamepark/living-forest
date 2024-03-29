import { MaterialRulesPart } from '@gamepark/rules-api'
import { RuleId } from './RuleId'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'

export class ReturnOfGuardianAnimalsRule extends MaterialRulesPart {

  onRuleStart() {
    const moves = []
    for (const player of this.game.players) {
      moves.push(
        this.material(MaterialType.GuardianAnimalCard)
          .location(LocationType.HelpLine)
          .player(player)
          .moveItemsAtOnce({ type: LocationType.PlayerDiscardStack, player })
      )
    }

    moves.push(this.rules().startRule(RuleId.PassingSacredTree))
    return moves
  }
}