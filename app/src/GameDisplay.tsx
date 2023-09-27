/** @jsxImportSource @emotion/react */
import { GameTable, usePlayers } from '@gamepark/react-game'
import { pointerWithin } from '@dnd-kit/core'
import { PlayerPanels } from './player/PlayerPanels'
import { css } from '@emotion/react'

export default function GameDisplay() {
  const players = usePlayers()
  if (!players.length) return null;
  const bigTable = players.length > 3
  return <>
    <GameTable 
    xMin={-28} 
    xMax={bigTable ? 90: 92} 
    yMin={bigTable ? -41: -30} 
    yMax={28} 
    collisionAlgorithm={pointerWithin} 
    margin={{ top: 7, left: 0, right: bigTable? 30: 0, bottom: 0 }}
    css={css`background-color: rgba(255, 255, 255, 0.47)`}
    />
    <PlayerPanels/>
  </>
}
