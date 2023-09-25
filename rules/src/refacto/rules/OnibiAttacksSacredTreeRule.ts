import { Material, MaterialMove, MaterialRulesPart } from '@gamepark/rules-api'
import { RuleId } from './RuleId'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import { CARDS_PER_ROW } from '../../LivingForestSetup'
import { Fire } from '../../material/Fire'
import times from 'lodash/times'

export class OnibiAttacksSacredTreeRule extends MaterialRulesPart {

  onRuleStart() {
    const reserve = this.material(MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow)
    const takenLevel1Cards = CARDS_PER_ROW - reserve.locationId(1).length
    const takenLevel2Cards = CARDS_PER_ROW - reserve.locationId(2).length
    const takenLevel3Cards = CARDS_PER_ROW - reserve.locationId(3).length

    const fireOnCircle = this.fireOnCircle.length
    const moves = []
    if (fireOnCircle < 7) {
      const fireStack = this.material(MaterialType.FireTile).location(LocationType.FireStack)
      let max = 7 - fireOnCircle

      if (takenLevel1Cards) {
        const tokens = Math.min(takenLevel1Cards, max)
        moves.push(...this.addFireTokenMoves(fireStack, Fire.Fire2, tokens))
        max -= tokens
      }

      if (max && takenLevel2Cards) {
        const tokens = Math.min(takenLevel2Cards, max)
        moves.push(...this.addFireTokenMoves(fireStack, Fire.Fire3, tokens))
        max -= tokens
      }

      if (max && takenLevel3Cards) {
        const tokens = Math.min(takenLevel3Cards, max)
        moves.push(...this.addFireTokenMoves(fireStack, Fire.Fire4, tokens))
      }
    }

    moves.push(this.rules().startRule(RuleId.GuardianAnimalsArrival))
    return moves
  }

  addFireTokenMoves(fireStack: Material, fire: Fire, tokens: number): MaterialMove[] {
    return times(
      tokens,
      () => fireStack
        .locationId(fire)
        .moveItem({ location: { type: LocationType.CircleOfSpiritBoardFire }})
    )
  }

  get fireOnCircle() {
    return this.material(MaterialType.FireTile).location(LocationType.CircleOfSpiritBoardFire)
  }
}