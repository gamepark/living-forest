/** @jsxImportSource @emotion/react */
import { usePlayerId, usePlayers } from '@gamepark/react-game'
import { FC } from 'react'
import { css } from '@emotion/react'
import { LivingForestPlayerPanel } from './LivingForestPlayerPanel'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'

export const PlayerPanels: FC = () => {
  const players = usePlayers({ sortFromMe: true })
  const playerId = usePlayerId()
  return (
    <>
      {players.map((player, index) =>
        <LivingForestPlayerPanel key={player.id} player={player} css={panelPosition(index, players.length, playerId)} />
      )}
    </>
  )
}

const panelPosition = (index: number, players: number, player?: SpiritOfNature) => css`
  position: absolute;
  right: 1em;
  top: ${8.5 + (players < 4? ((index) * 19.5): ((player === undefined ? index : (index || players) - 1) * 76.5 / (players - 1)))}em;
  width: ${players < 4? 34: 28}em;
  height: ${players < 4? 17.5: 17.5}em;
`