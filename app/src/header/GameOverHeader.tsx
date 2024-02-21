/** @jsxImportSource @emotion/react */
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { PlayerState } from '@gamepark/living-forest/rules/helper/PlayerState'
import { usePlayerId, usePlayerName, useRankedPlayers, useRules } from '@gamepark/react-game'
import { useTranslation } from 'react-i18next'

export const GameOverHeader = () => {
  const { t } = useTranslation()
  const rules = useRules<LivingForestRules>()!
  const player = usePlayerId()
  const rankedPlayers = useRankedPlayers()
  const firstPlayer = rankedPlayers[0]
  const tie = firstPlayer?.rank === rankedPlayers[1]?.rank
  const winnerName = usePlayerName(firstPlayer)
  if (!tie) {
    const winner = firstPlayer.id!
    const playerState = new PlayerState(rules.game, winner)
    const headerKey = getHeaderKey(playerState, tie, player && player === winner)
    return <>{t(headerKey, { player: winnerName, score: playerState.points })}</>
  } else {
    return <>{t('header.tie')}</>
  }
}

export const getHeaderKey = (playerState: PlayerState, tie: boolean, me: boolean) => {
  if (tie) return me? 'header.winner.me': 'header.winner'
  if (playerState.firePoints >= 12) return me? 'header.winner.fire.me': 'header.winner.fire'
  if (playerState.flowerPoints >= 12) return  me? 'header.winner.flower.me': 'header.winner.flower'
  if (playerState.treePoints >= 12) return  me? 'header.winner.tree.me': 'header.winner.tree'
  return 'header.winner'
}
