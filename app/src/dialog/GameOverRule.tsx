/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VictoryTileType } from '@gamepark/living-forest/material/VictoryTiles'
import { PlayerState } from '@gamepark/living-forest/rules/helper/PlayerState'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { Medal } from '@gamepark/react-game/dist/components/menus/Result/Medal'
import { usePlayerName } from '@gamepark/react-game/dist/hooks/usePlayerName'
import { useRankedPlayers } from '@gamepark/react-game/dist/hooks/useRankedPlayers'
import { useRules } from '@gamepark/react-game/dist/hooks/useRules'
import { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { resourceStyle } from '../material/description/help/GuardianAnimalCardHelp'
import { VictoryImage } from '../player/PlayerVictories'

type GameOverRuleProps = {}

export const GameOverRule: FC<GameOverRuleProps> = () => {
  const { t } = useTranslation()
  const rankedPlayers = useRankedPlayers()
  const players = rankedPlayers.filter((p) => !p.quit)
  const winners = rankedPlayers.filter((p) => p.rank === 1)

  return (
    <div css={container}>
      <h1>{t('header.gameover.summary.title')}</h1>
      <p css={resume}>
        <Trans defaults="header.gameover.summary">
          <strong/>
          <span css={resourceStyle(VictoryImage[VictoryTileType.Tree])}/>
          <span css={resourceStyle(VictoryImage[VictoryTileType.Fire])}/>
          <span css={resourceStyle(VictoryImage[VictoryTileType.Flower])}/>
        </Trans>
      </p>
      <table css={tableStyle}>
        <thead>
        <tr css={headerStyle}>
          <td css={playerColumn}/>
          <td css={resourceColumn}>
            <span css={[large, resourceStyle(VictoryImage[VictoryTileType.Fire])]}/>
          </td>
          <td css={resourceColumn}>
            <span css={[large, resourceStyle(VictoryImage[VictoryTileType.Tree])]}/>
          </td>
          <td css={resourceColumn}>
            <span css={[large, resourceStyle(VictoryImage[VictoryTileType.Flower])]}/>
          </td>
          <td css={resourceColumn}><span css={medium}>{t('header.gameover.summary.total')}</span></td>
        </tr>
        </thead>
        <tbody>
        {players.map((p) => (
          <PlayerLine player={p.id} winners={winners}/>
        ))}
        </tbody>
      </table>
    </div>
  )
}

type PlayerLineProps = { player: SpiritOfNature, winners: { rank: number, id: SpiritOfNature }[] } & GameOverRuleProps

const PlayerLine: FC<PlayerLineProps> = (props) => {
  const { player, winners } = props
  const name = usePlayerName(player)
  const rules = useRules()!
  const state = new PlayerState(rules.game, player)
  const winnerTie = winners.length > 1 && winners.some((w) => w.id === player)
  const hasWonWithTotalPoints = rules.game.players.some((p: SpiritOfNature) => {
    if (p === player) return false
    const otherPlayerState = new PlayerState(rules.game, p)
    return otherPlayerState.firePoints >= 12 || otherPlayerState.treePoints >= 12 || otherPlayerState.flowerPoints >= 12
  })
  const winnerSolo = winners.length === 1 && winners[0].id === player && !hasWonWithTotalPoints
  const winner = winners[0].id
  return (
    <tr>
      <td css={playerColumn}>
        {(winnerSolo || winnerTie) && <Medal rank={winners[0].rank} css={medalCss} />}
        <span>{name}</span>
      </td>
      <td css={[resourceColumn, winnerSolo && state.firePoints >= 12 && green]}><span css={medium}>{state.firePoints}</span></td>
      <td css={[resourceColumn, winnerSolo && state.treePoints >= 12 && green]}><span css={medium}>{state.treePoints}</span></td>
      <td css={[resourceColumn, winnerSolo && state.flowerPoints >= 12 && green]}><span css={medium}>{state.flowerPoints}</span></td>
      <td css={[resourceColumn, (winnerTie || (!winnerSolo && winner === player))  && green]}><span css={medium}>{state.points}</span></td>
    </tr>
  )
}

const tableStyle = css`
  height: 20em;
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
`

const playerColumn = css`
  vertical-align: middle;
  border: 0.1em solid black;
  max-width: 15em;
  min-width: 15em;
  padding: 1em 1em;

  > span {
    font-size: 3em;
    display: inline-block;
  }

`

const resourceColumn = css`
  text-align: center;
  vertical-align: middle;
  border: 0.1em solid black;
  padding-top: 2em;
  padding-bottom: 2em;
`

const headerStyle = css`
  display: table-row;
  border: 0.1em solid black;
`

const container = css`
  padding: 3em;
  max-width: 90vw;
  max-height: 90vh;

  h1 {
    padding: 0;
    margin: 0 0 1em;
    font-size: 4em;
  }

  thead {
    background-color: rgb(237 238 242);
  }
`

const medium = css`
  font-size: 3em;
`

const large = css`
  font-size: 4em;
`

const green = css`
  background-color: rgba(0, 128, 0, 0.30);
`

const medalCss = css`
  position: relative;
  width: 4em;
  height: 4em;
  fill: #002448;
  top: 0.8em;
  margin-right: 1em;
  margin-top: -1.5em
`

const resume = css`
  white-space: pre-wrap;
  font-size: 2.5em;
`