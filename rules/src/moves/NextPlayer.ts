import GameState from '../GameState';
import GameView from '../GameView';
import MoveType from './MoveType';

type NextPlayer = {
  type: MoveType.NextPlayer
}

export default NextPlayer


export function nextPlayer(state: GameState | GameView, _move: NextPlayer) {

  const activePlayerIndex = state.players.findIndex(player => player.spirit === state.currentPlayer)

  state.players[activePlayerIndex].ready = true

  const nextPlayerIndex = (activePlayerIndex + 1) % state.players.length

  const nextPlayer = state.players[nextPlayerIndex];

  console.log(nextPlayer);


  state.currentPlayer = nextPlayer.spirit;

}

export function nextPlayerMove(): NextPlayer {
  return { type: MoveType.NextPlayer }
}
