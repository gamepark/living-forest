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
  console.log(displayedPlayer);


  return (
    <Letterbox css={letterBoxStyle} width={185} height={100}>
      <ScreenDisplay game={game} player={displayedPlayer} />
      <Panels game={game} player={displayedPlayer} />
    </Letterbox>
  )
}

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