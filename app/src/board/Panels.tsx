/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { usePlayerId } from '@gamepark/react-client'
import GameLocalView from '../GameLocalView'
import { panelBottom, panelLeft, panelWidth } from '../styles'
import PanelGame from './PanelGame'
import PlayerPanel from './PlayerPanel'

type Props = {
  game: GameLocalView
}

export default function Panels({ game }: Props) {
  const playerId = usePlayerId()

  return (
    <div css={panelsPosition(game.players.length)}>
      <PanelGame game={game}></PanelGame>
      {
        game.players.map((player, index) =>
          <PlayerPanel key={player.spirit} player={player} css={playerPanelPosition(index, game.players.findIndex(player => player.spirit === playerId), game.players.length)} sacredTreeOwner={player.spirit === game.sacredTreeOwner} />
        )}
    </div>
  );
}

function playerPanelPosition(index: number, playerIndex: number, players: number) {
  return css`
position: absolute;
bottom: ${panelBottom}em;
left:  ${panelLeft + (panelWidth + 0.2) * ((players + index - playerIndex) % players + 1)}em;
`
}
function panelsPosition(players: number) {
  return css`
  margin-left:-${100 / (players + 1)}%;
  width:${(players + 1) * 15}em;
  position: absolute;
  bottom:0;
  left: 50%;
  `
}