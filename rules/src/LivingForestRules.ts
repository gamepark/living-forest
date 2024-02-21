import { CompetitiveRank, MaterialGame, MaterialMove, SecretMaterialRules } from '@gamepark/rules-api'
import { hidingStrategies } from './configuration/HidingStrategies'
import { locationsStrategies } from './configuration/LocationStrategies'
import { rules } from './configuration/RuleDefinitions'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerState } from './rules/helper/PlayerState'
import SpiritOfNature from './SpiritOfNature'

export class LivingForestRules extends SecretMaterialRules<SpiritOfNature, MaterialType, LocationType>
  implements CompetitiveRank<MaterialGame<SpiritOfNature, MaterialType, LocationType>, MaterialMove<SpiritOfNature, MaterialType, LocationType>, SpiritOfNature> {

  rankPlayers(playerA: SpiritOfNature, playerB: SpiritOfNature): number {
    const playerAState = new PlayerState(this.game, playerA)
    const playerBState = new PlayerState(this.game, playerB)
    if (playerAState.hasEnded && !playerBState.hasEnded) return -1
    if (!playerAState.hasEnded && playerBState.hasEnded) return 1
    if (!playerAState.hasEnded && !playerBState.hasEnded) return 0
    if (playerAState.hasEnded && playerBState.hasEnded) return playerBState.points - playerAState.points
    return 0
  }


  rules = rules
  locationsStrategies = locationsStrategies
  hidingStrategies = hidingStrategies
}
