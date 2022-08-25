/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import GameLocalView from '../GameLocalView'
import { panelBottom, panelLeft, panelWidth } from '../styles'
import PanelGame from './PanelGame'
import PlayerPanel from './PlayerPanel'
import { usePlayerId } from '@gamepark/react-client';



type Props = {
  game: GameLocalView
}

export default function Panels({ game }: Props) {
  const playerId = usePlayerId()
  return (
    <>
      <PanelGame game={game}></PanelGame>
      {
        game.players.map((player, index) =>
          <PlayerPanel key={player.spirit} player={player} css={playerPanelPosition(index, game.players.findIndex(player => player.spirit === playerId), game.players.length)} sacredTreeOwner={player.spirit === game.sacredTreeOwner} />
        )}
    </>
  );

}

function playerPanelPosition(index: number, playerIndex: number, players: number) {
  return css`
position: absolute;
bottom: ${panelBottom}em;
left:  ${panelLeft + (panelWidth + 0.2) * ((players + index - playerIndex) % players + 1)}em;
`
}