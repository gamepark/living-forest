/** @jsxImportSource @emotion/react */
import ForestBoard from './board/ForestBoard';
import PlayerView from '@gamepark/living-forest/PlayerView';
import { PlayerBoard } from './board/PlayerBoard';
import GameLocalView from './GameLocalView';

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
        <ForestBoard game={game} player={player} />
      </>
    );
  }
}