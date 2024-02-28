import { CompetitiveRank, MaterialGame, MaterialMove, SecretMaterialRules } from '@gamepark/rules-api'
import { hidingStrategies } from './configuration/HidingStrategies'
import { locationsStrategies } from './configuration/LocationStrategies'
import { rules } from './configuration/RuleDefinitions'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { ScoringRule } from './rules/helper/ScoringRule'
import SpiritOfNature from './SpiritOfNature'

export class LivingForestRules extends SecretMaterialRules<SpiritOfNature, MaterialType, LocationType>
  implements CompetitiveRank<MaterialGame<SpiritOfNature, MaterialType, LocationType>, MaterialMove<SpiritOfNature, MaterialType, LocationType>, SpiritOfNature> {

  rankPlayers(playerA: SpiritOfNature, playerB: SpiritOfNature): number {
    return new ScoringRule(this.game).rankPlayers(playerA, playerB)
  }


  rules = rules
  locationsStrategies = locationsStrategies
  hidingStrategies = hidingStrategies
}
