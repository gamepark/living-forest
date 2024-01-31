/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { GameTable, GameTableNavigation, usePlayers } from '@gamepark/react-game'
import { pointerWithin } from '@dnd-kit/core'
import { PlayerPanels } from './player/PlayerPanels'
//import { css } from '@emotion/react'

export default function GameDisplay() {
  const players = usePlayers()
  if (!players.length) return null;
  const bigTable = players.length > 3
  const twoPlayers = players.length === 2
  return <>
    <GameTable 
    xMin={-28} 
    xMax={!twoPlayers ? 90: 95}
    yMin={!twoPlayers ? -39: -30}
    yMax={!twoPlayers? 28: 30}
    collisionAlgorithm={pointerWithin} 
    margin={{ top: 7, left: 0, right: bigTable? 38: 0, bottom: 0 }}
    //css={css`background-color: rgba(255, 255, 255, 0.47)`}
    >
      <GameTableNavigation css={navigationPosition(players.length)} />
    </GameTable>
    <PlayerPanels/>
  </>
}
const navigationPosition = (players: number) => css`
  position: absolute;
  left: auto;
  right: ${players < 4? 22: 1}em;
  top: ${players < 4? 8.5: 86}em;
  flex-direction: ${players < 4? 'column': 'row'};
  width: 14em;
  height: 14em;
  > button {
    padding: 0;
    filter: drop-shadow(0.1em 0.1em 0.05em black);
  }
`