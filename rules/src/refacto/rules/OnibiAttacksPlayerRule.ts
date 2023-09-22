import { MaterialRulesPart } from '@gamepark/rules-api/dist/material/rules/MaterialRulesPart'
import { RuleId } from './RuleId'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import { HelpLine } from './helper/HelpLine'
import sumBy from 'lodash/sumBy'
import orderBy from 'lodash/orderBy'
import SpiritOfNature from '../../SpiritOfNature'
import { TurnOrder } from './helper/TurnOrder'
import { MoveItem } from '@gamepark/rules-api/dist/material/moves/items/MoveItem'
import { MaterialMove } from '@gamepark/rules-api/dist/material/moves/MaterialMove'

export class OnibiAttacksPlayerRule extends MaterialRulesPart {

  onRuleStart() {
    const fireTotal = this.fireTotal

    const moves: MaterialMove[] = []
    if (fireTotal) {
      let varanByPlayer: Partial<Record<SpiritOfNature, number>> = {}
      for (const player of this.game.players) {
        const helpLine = new HelpLine(this.game, player)
        const water = helpLine.waterResources
        if (water < fireTotal) {
          varanByPlayer[player] = fireTotal - water
        }
      }

      const varanDeck = this.varanDeck
      const varanCount = sumBy(Object.entries(varanByPlayer), (entry) => entry[1])
      const turnOrder = new TurnOrder(this.game).turnOrder

      const varanMoves: MoveItem[] = []
      for (let i = 0; i < Math.min(varanCount, varanDeck.length); i++) {
        for (const player of turnOrder) {
          if (!varanByPlayer[player]) continue

          varanMoves.push(varanDeck.moveItem({ location: { type: LocationType.PlayerDiscardStack, player: player }}))
          varanByPlayer[player]--
        }
      }

      moves.push(
        ...orderBy(varanMoves, (move) => turnOrder.indexOf(move.position.location?.player!))
      )
    }

    moves.push(this.rules().startRule(RuleId.OnibiAttacksSacredTree))
    return moves;
  }

  get fireTotal() {
    const items = this.material(MaterialType.FireTile)
    .location(LocationType.CircleOfSpiritBoardFire)
    .getItems()
      return sumBy(items, (item) => item.id)
    }

  get varanDeck() {
    return this.material(MaterialType.GuardianAnimalCard).location(LocationType.VaranDeck)
  }
}