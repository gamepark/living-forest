import GameState from '../GameState';
import GameView from '../GameView';
import MoveType from './MoveType';

type NextPlayer = {
  type: MoveType.NextPlayer
}

export default NextPlayer


export function nextPlayer(state: GameState | GameView, move: NextPlayer) {
  console.log(move);
  
  for (let i = 1; i <= state.players.length; i++) {
    const activePlayerIndex = state.players.findIndex(player => player.spirit === state.currentPlayer)
    const nextPlayerIndex = (activePlayerIndex + i) % state.players.length

    const nextPlayer = state.players[nextPlayerIndex];

    state.currentPlayer = nextPlayer.spirit;
    return;
  }

}

export function nextPlayerMove(): NextPlayer {
  return { type: MoveType.NextPlayer}
}
