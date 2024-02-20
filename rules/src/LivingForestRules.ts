import { CompetitiveScore, MaterialGame, MaterialMove, SecretMaterialRules } from '@gamepark/rules-api'
import SpiritOfNature from './SpiritOfNature'
import { MaterialType } from './material/MaterialType'
import { LocationType } from './material/LocationType'
import { rules } from './configuration/RuleDefinitions'
import { locationsStrategies } from './configuration/LocationStrategies'
import { hidingStrategies } from './configuration/HidingStrategies'
import { PlayerState } from './rules/helper/PlayerState'

export class LivingForestRules extends SecretMaterialRules<SpiritOfNature, MaterialType, LocationType>
  implements CompetitiveScore<MaterialGame<SpiritOfNature, MaterialType, LocationType>, MaterialMove<SpiritOfNature, MaterialType, LocationType>, SpiritOfNature> {

  getScore(playerId: SpiritOfNature) {
    const playerState = new PlayerState(this.game, playerId)
    const otherPlayerEnded = this.game.players.filter((p) => p !== playerId).some((p) => new PlayerState(this.game, p).hasEnded)
    if (!playerState.hasEnded || otherPlayerEnded) return 0
    return playerState.points
  }

  getTieBreaker(tieBreaker: number, playerId: SpiritOfNature): number | undefined {
    if (tieBreaker === 1) {
      return new PlayerState(this.game, playerId).points
    }

    return undefined
  }


  rules = rules
  locationsStrategies = locationsStrategies
  hidingStrategies = hidingStrategies
}
