import { MaterialMove, MaterialRulesPart } from '@gamepark/rules-api'
import sumBy from 'lodash/sumBy'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { PlayerState } from './helper/PlayerState'
import { TurnOrder } from './helper/TurnOrder'
import { RuleId } from './RuleId'

export class OnibiAttacksPlayerRule extends MaterialRulesPart {

  onRuleStart() {
    const fire = this.material(MaterialType.FireTile).location(LocationType.CircleOfSpiritBoardFire)

    const moves: MaterialMove[] = []
    if (fire.length) {
      const fireTotal = sumBy(fire.getItems(), (item) => item.id)
      const targetedPlayers = new TurnOrder(this.game).turnOrder.filter(player =>
        new PlayerState(this.game, player).waterResources < fireTotal
      )

      const varanDeck = this.material(MaterialType.GuardianAnimalCard).location(LocationType.VaranDeck).deck()

      for (let i = 0; i < fire.length; i++) {
        for (const player of targetedPlayers) {
          if (varanDeck.length) {
            moves.push(varanDeck.dealOne({ type: LocationType.PlayerDiscardStack, player: player }))
          }
        }
      }
    }

    moves.push(this.startRule(RuleId.OnibiAttacksSacredTree))
    return moves
  }
}