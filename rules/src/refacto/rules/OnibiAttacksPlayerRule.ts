import { MaterialRulesPart, MoveItem, MaterialMove } from '@gamepark/rules-api'
import { RuleId } from './RuleId'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import { HelpLine } from './helper/HelpLine'
import sumBy from 'lodash/sumBy'
import orderBy from 'lodash/orderBy'
import { TurnOrder } from './helper/TurnOrder'

export class OnibiAttacksPlayerRule extends MaterialRulesPart {

  onRuleStart() {
    const fire = this.fireOnCicleOfSpirit

    const moves: MaterialMove[] = []
    if (fire.length) {
      const fireTotal = sumBy(fire.getItems(), (item) => item.id)
      const targetedPlayers = []
      for (const player of this.game.players) {
        const helpLine = new HelpLine(this.game, player)
        const water = helpLine.waterResources
        if (water < fireTotal) {
          targetedPlayers.push(player)
        }
      }

      const varanDeck = this.varanDeck
      const turnOrder = new TurnOrder(this.game).turnOrder
      const varanCount = Math.min(varanDeck.length, fire.length)
      const varanMoves: MoveItem[] = []

      for (let i = 0; i < varanCount; i++) {
        for (const player of targetedPlayers) {
          varanMoves.push(varanDeck.moveItem({ location: { type: LocationType.PlayerDiscardStack, player: player }}))
        }
      }

      moves.push(
        ...orderBy(varanMoves, (move) => turnOrder.indexOf(move.position.location?.player!))
      )
    }

    moves.push(this.rules().startRule(RuleId.OnibiAttacksSacredTree))
    return moves;
  }

  get fireOnCicleOfSpirit() {
    return this.material(MaterialType.FireTile)
      .location(LocationType.CircleOfSpiritBoardFire)
  }

  get varanDeck() {
    return this.material(MaterialType.GuardianAnimalCard).location(LocationType.VaranDeck)
  }
}