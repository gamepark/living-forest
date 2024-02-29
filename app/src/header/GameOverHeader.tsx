/** @jsxImportSource @emotion/react */
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons/faCircleQuestion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { PlayerState } from '@gamepark/living-forest/rules/helper/PlayerState'
import { ScoringRule } from '@gamepark/living-forest/rules/helper/ScoringRule'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { pointerCursorCss, RulesDialog, usePlayerId, usePlayerName, useRankedPlayers, useRules } from '@gamepark/react-game'
import { MaterialGame } from '@gamepark/rules-api/dist/material/MaterialGame'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GameOverRule } from '../dialog/GameOverRule'

export const GameOverHeader = () => {
  const { t } = useTranslation()
  const rules = useRules<LivingForestRules>()!
  const player = usePlayerId()
  const rankedPlayers = useRankedPlayers()
  const firstPlayer = rankedPlayers[0]
  const tie = firstPlayer?.rank === rankedPlayers[1]?.rank
  const winnerName = usePlayerName(firstPlayer?.id)
  const [dialogOpen, setDialogOpen] = useState(false)

  const dialog = (
    <>
      &nbsp;<FontAwesomeIcon icon={faCircleQuestion} onClick={() => setDialogOpen(true)} css={pointerCursorCss}/>
      <RulesDialog open={dialogOpen} close={() => setDialogOpen(false)}>
        <GameOverRule/>
      </RulesDialog>
    </>
  )

  if (!tie) {
    const isWinningWithTotalPoints = new ScoringRule(rules.game).isWinningWithTotalPoints(rankedPlayers.filter((p) => !p.quit).map((p) => p.id))
    const headerKey = getHeaderKey(rules.game, firstPlayer.id!, isWinningWithTotalPoints, player)
    if (!headerKey) return <></>
    return <>
      {t(headerKey.text, { player: winnerName, score: headerKey.score })}
      {dialog}
    </>
  } else {
    return (
      <>
        {t('header.tie')}
        {dialog}
      </>
    )
  }
}

export const getHeaderKey = (game: MaterialGame, winner: SpiritOfNature, isWinningWithTotalPoints: boolean, playerId?: SpiritOfNature) => {
  const me = playerId && playerId === winner
  const playerState = new PlayerState(game, winner)
  if (isWinningWithTotalPoints) return { text: me? 'result.score.victory': 'result.score.winner', score: playerState.points }
  if (playerState.firePoints >= 12) return { text: me? 'header.winner.fire.me': 'header.winner.fire', score: playerState.firePoints }
  if (playerState.flowerPoints >= 12) return  { text: me? 'header.winner.flower.me': 'header.winner.flower', score: playerState.flowerPoints }
  if (playerState.treePoints >= 12) return  { text: me? 'header.winner.tree.me': 'header.winner.tree', score: playerState.treePoints }
  return
}
