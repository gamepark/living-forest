import { SecretMaterialRules } from '@gamepark/rules-api'
import SpiritOfNature from './SpiritOfNature'
import { MaterialType } from './refacto/material/MaterialType'
import { LocationType } from './refacto/material/LocationType'
import { rules } from './configuration/RuleDefinitions'
import { locationsStrategies } from './configuration/LocationStrategies'
import { hidingStrategies } from './configuration/HidingStrategies'

export class LivingForestRules extends SecretMaterialRules<SpiritOfNature, MaterialType, LocationType> {

  rules = rules
  locationsStrategies = locationsStrategies
  hidingStrategies = hidingStrategies
}
