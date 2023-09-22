import { MaterialRulesPart } from '@gamepark/rules-api/dist/material/rules/MaterialRulesPart'
import { RuleId } from './RuleId'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import { CARDS_PER_ROW } from '../../LivingForestSetup'
import { Fire } from '../../material/Fire'

export class OnibiAttacksSacredTreeRule extends MaterialRulesPart {

  onRuleStart() {
    const takenLevel1Cards = CARDS_PER_ROW - this.material(MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow).locationId(1).length
    const takenLevel2Cards = CARDS_PER_ROW - this.material(MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow).locationId(2).length
    const takenLevel3Cards = CARDS_PER_ROW - this.material(MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow).locationId(3).length

    const fireOnCircle = this.fireOnCircle.length
    const moves = []
    if (fireOnCircle < 7) {
      let max = 7 - fireOnCircle

      if (takenLevel1Cards) {
        const tokens = Math.min(takenLevel1Cards, max)
        moves.push(
          ...this.material(MaterialType.FireTile)
            .location(LocationType.FireStack)
            .locationId(Fire.Fire2)
            .moveItems({ location: { type: LocationType.CircleOfSpiritBoardFire, id: Fire.Fire2 }}, tokens)
        )
        max -= tokens
      }

      if (max && takenLevel2Cards) {
        const tokens = Math.min(takenLevel2Cards, max)
        moves.push(
          ...this.material(MaterialType.FireTile)
            .location(LocationType.FireStack)
            .locationId(Fire.Fire3)
            .moveItems({ location: { type: LocationType.CircleOfSpiritBoardFire, id: Fire.Fire3 }}, tokens)
        )
        max -= tokens
      }

      if (max && takenLevel3Cards) {
        const tokens = Math.min(takenLevel3Cards, max)
        moves.push(
          ...this.material(MaterialType.FireTile)
            .location(LocationType.FireStack)
            .locationId(Fire.Fire4)
            .moveItems({ location: { type: LocationType.CircleOfSpiritBoardFire, id: Fire.Fire4 }}, tokens)
        )
      }

    }

    moves.push(this.rules().startRule(RuleId.GuardianAnimalsArrival))
    return moves
  }

  get fireOnCircle() {
    return this.material(MaterialType.FireTile).location(LocationType.CircleOfSpiritBoardFire)
  }
}