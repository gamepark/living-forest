import { MaterialRulesPart } from '@gamepark/rules-api'
import SpiritOfNature from '../../SpiritOfNature'
import { PlayerState } from './PlayerState'

export class ScoringRule extends MaterialRulesPart {
  rankPlayers(playerA: SpiritOfNature, playerB: SpiritOfNature): number {
    const playerAState = new PlayerState(this.game, playerA)
    const playerBState = new PlayerState(this.game, playerB)
    if (playerAState.hasEnded && !playerBState.hasEnded) return -1
    if (!playerAState.hasEnded && playerBState.hasEnded) return 1
    if (!playerAState.hasEnded && !playerBState.hasEnded) return 0
    if (playerAState.hasEnded && playerBState.hasEnded) return playerBState.points - playerAState.points
    return 0
  }

  isWinningWithTotalPoints(players: SpiritOfNature[]) {
    const severalPlayersEnded = players.filter((p) => new PlayerState(this.game, p).hasEnded)
    return severalPlayersEnded.length > 1
  }

}