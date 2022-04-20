/** @jsxImportSource @emotion/react */
import ForestBoard from './board/ForestBoard'
import PlayerBoard from './board/PlayerBoard'
import GameLocalView from './GameLocalView'
import PlayerView from '@gamepark/living-forest/PlayerView';

type Props = {
  game: GameLocalView
  player: PlayerView
}

export default function ScreenDisplay({ game, player }: Props) {
  if (game.displayedPlayer) {

    return (
      <>
        <PlayerBoard game={game} player={player} />
      </>
    );
  } else {
    return (
      <>
        <ForestBoard />
      </>
    );
  }
}