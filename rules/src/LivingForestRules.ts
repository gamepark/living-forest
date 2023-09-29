import { CompetitiveScore, MaterialGame, MaterialMove, rankByScore, SecretMaterialRules } from '@gamepark/rules-api'
import SpiritOfNature from './SpiritOfNature'
import { MaterialType } from './material/MaterialType'
import { LocationType } from './material/LocationType'
import { rules } from './configuration/RuleDefinitions'
import { locationsStrategies } from './configuration/LocationStrategies'
import { hidingStrategies } from './configuration/HidingStrategies'
import { PlayerState } from './rules/helper/PlayerState'

export class LivingForestRules extends SecretMaterialRules<SpiritOfNature, MaterialType, LocationType>
  implements CompetitiveScore<MaterialGame<SpiritOfNature, MaterialType, LocationType>, MaterialMove<SpiritOfNature, MaterialType, LocationType>, SpiritOfNature> {

  getScore(playerId: SpiritOfNature, tieBreaker: number = 0) {
    switch (tieBreaker) {
      case 0:
        const playerState = new PlayerState(this.game, playerId)
        const otherPlayerEnded = this.game.players.filter((p) => p !== playerId).some((p) => new PlayerState(this.game, p).hasEnded)
        if (playerState.hasEnded && otherPlayerEnded) return 0
        return playerState.points
      case 1:
        return new PlayerState(this.game, playerId).points
    }

    return
  }

  rankPlayers(playerA: SpiritOfNature, playerB: SpiritOfNature): number {
    return rankByScore(playerA, playerB, this.getScore.bind(this))
  }


  rules = rules
  locationsStrategies = locationsStrategies
  hidingStrategies = hidingStrategies
}
