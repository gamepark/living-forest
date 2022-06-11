/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { Letterbox } from '@gamepark/react-components'
import Panels from './board/Panels'
import { usePlayerId } from '@gamepark/react-client'
import GameLocalView from './GameLocalView'
import ScreenDisplay from './ScreenDisplay'

type Props = {
  game: GameLocalView
}

export default function GameDisplay({ game }: Props) {
  const playerId = usePlayerId<SpiritOfNature>()
  const player = game.players.find(player => player.spirit === playerId)
  const displayedPlayerId = game.displayedPlayer ?? playerId ?? game.players[0].spirit
  const displayedPlayer = game.players.find(player => player.spirit === displayedPlayerId)!
  console.log(player);


  return (
    <Letterbox css={letterBoxStyle} width={185} height={100}>
      <div css={perspective}>
        <ScreenDisplay game={game} player={displayedPlayer} />
      </div>
      <Panels game={game} />
    </Letterbox>
  )
}

const perspective = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: perspective(400em) rotateX(15deg);
  transform-origin: bottom center;
`

const fadeIn = keyframes`
  from, 50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const letterBoxStyle = css`
  animation: ${fadeIn} 3s ease-in forwards;
`