import { CompetitiveScore, MaterialGame, MaterialMove, SecretMaterialRules } from '@gamepark/rules-api'
import SpiritOfNature from './SpiritOfNature'
import { MaterialType } from './refacto/material/MaterialType'
import { LocationType } from './refacto/material/LocationType'
import { rules } from './configuration/RuleDefinitions'
import { locationsStrategies } from './configuration/LocationStrategies'
import { hidingStrategies } from './configuration/HidingStrategies'

export class LivingForestRules extends SecretMaterialRules<SpiritOfNature, MaterialType, LocationType>
  implements CompetitiveScore<MaterialGame<SpiritOfNature, MaterialType, LocationType>, MaterialMove<SpiritOfNature, MaterialType, LocationType>, SpiritOfNature> {

  getScore(_playerId: SpiritOfNature, _tieBreaker?: number): number | undefined {
    return 0
  }

  rankPlayers(_playerA: SpiritOfNature, _playerB: SpiritOfNature): number {
    return 0
  }


  rules = rules
  locationsStrategies = locationsStrategies
  hidingStrategies = hidingStrategies
}
