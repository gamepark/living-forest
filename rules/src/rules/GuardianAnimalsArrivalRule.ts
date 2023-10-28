import { MaterialRulesPart } from '@gamepark/rules-api'
import { RuleId } from './RuleId'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import { CARDS_PER_ROW } from '../LivingForestSetup'

export class GuardianAnimalsArrivalRule extends MaterialRulesPart {

  onRuleStart() {
    const moves = []
    const reserveStacks = this.material(MaterialType.GuardianAnimalCard).location(LocationType.ReserveStack)
    const reserveRows = this.material(MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow)

    for (const level of [1, 2, 3]) {
      const attractedAnimals = CARDS_PER_ROW - reserveRows.locationId(level).length
      if (!attractedAnimals) continue

      moves.push(
        ...reserveStacks
          .locationId(level)
          .sort((item) => -item.location.x!)
          .limit(attractedAnimals)
          .moveItems({ type: LocationType.ReserveRow, id: level })
      )
    }

    moves.push(this.rules().startRule(RuleId.ReturnOfGuardianAnimals))
    return moves
  }
}