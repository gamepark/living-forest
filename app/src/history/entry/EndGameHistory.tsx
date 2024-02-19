/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { HistoryEntry, MaterialHistoryProps, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const EndGameHistory: FC<MaterialHistoryProps> = (props) => {
  const { move, context } = props
  const { t } = useTranslation()
  const playerId = usePlayerId()
  const rules = new LivingForestRules(context.game)
  const bestScore = rules ? Math.max(...rules.game.players.map(player => rules.getScore(player) ?? 0)) : 0
  const winners = rules?.game.players.filter(player => rules.getScore(player) === bestScore) ?? []
  const winnerName = usePlayerName(winners[0])
  rules.play(move)

  if (winners.length === 1 && winners[0] === playerId) {
    return (
      <>
        <HistoryEntry border css={winnerStyle}>{t('result.comp.victory')}</HistoryEntry>
        <HistoryEntry border css={endOfGameStyle}>{t('history.game.end')}</HistoryEntry>
      </>
    )
  }

  if (winners.length === 1 && winners[0] !== playerId) {
    return (
      <>
        <HistoryEntry border css={winnerStyle}>{t('result.comp.winner', { player: winnerName })}</HistoryEntry>
        <HistoryEntry border css={endOfGameStyle}>{t('history.game.end')}</HistoryEntry>
      </>
    )
  }

  return (
    <>
      <HistoryEntry border css={winnerStyle}>{t('result.comp.tie.all')}</HistoryEntry>
      <HistoryEntry border css={endOfGameStyle}>{t('history.game.end')}</HistoryEntry>
    </>
  )
}

const winnerStyle = css`
  color: green;
  text-align: center;
  font-weight: bold;
  font-style: italic;
`

const endOfGameStyle = css`
  color: grey;
  text-align: center;
  font-style: italic
`