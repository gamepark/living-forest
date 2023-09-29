/** @jsxImportSource @emotion/react */
import { usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { useTranslation } from 'react-i18next'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'

export const GameOverHeader = () => {
  const { t } = useTranslation()
  const rules = useRules<LivingForestRules>()
  const player = usePlayerId()
  const bestScore = rules ? Math.max(...rules.game.players.map(player => rules.getScore(player) ?? 0)) : 0
  const winners = rules?.game.players.filter(player => rules.getScore(player) === bestScore) ?? []
  const winnerName = usePlayerName(winners[0])
  if (winners.length === 1) {
    if (winners[0] !== player) {
      return <>{t('header.winner', { player: winnerName, score: bestScore })}</>
    } else {
      return <>{t('header.victory', { score: bestScore })}</>
    }
  } else {
    return <>{t('header.tie', { score: bestScore })}</>
  }
}
