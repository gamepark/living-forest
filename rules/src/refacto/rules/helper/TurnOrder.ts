import { MaterialRulesPart } from '@gamepark/rules-api/dist/material/rules/MaterialRulesPart'
import { MaterialType } from '../../material/MaterialType'

export class TurnOrder extends MaterialRulesPart {
  get turnOrder() {
    const players = this.game.players
    const playerCount = players.length
    const firstPlayer = players.find((p) => this.material(MaterialType.SacredTree).getItem()!.location.player === p)!
    const firstIndex = players.indexOf(firstPlayer)
    const order = [firstPlayer]
    for (let i = 1; i < playerCount; i++) {
      const current = firstIndex + i

      if (current >= playerCount) {
        order.push(players[current % playerCount])
      } else {
        order.push(players[current])
      }
    }

    return order;
  }
}