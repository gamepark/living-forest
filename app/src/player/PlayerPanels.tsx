/** @jsxImportSource @emotion/react */
import { usePlayers } from '@gamepark/react-game'
import { FC } from 'react'
import { css } from '@emotion/react'
import { LivingForestPlayerPanel } from './LivingForestPlayerPanel'

export const PlayerPanels: FC = () => {
  const players = usePlayers({ sortFromMe: true })
  return (
    <>
      {players.map((player, index) =>
        <LivingForestPlayerPanel key={player.id} player={player} css={panelPosition(index, players.length)} />
      )}
    </>
  )
}

const panelPosition = (index: number, players: number) => css`
  position: absolute;
  right: 1em;
  top: ${8.5 + (index) * 19.5}em;
  width: ${players < 4? 34: 28}em;
  height: ${players < 4? 17.5: 14}em;
`