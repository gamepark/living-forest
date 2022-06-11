import GameState from './GameState'
import PlayerView from './PlayerView'
import {ReserveView} from './Reserve'
import { isPlayerView } from './PlayerView';

/**
 * In here, you describe what a GameView will look like at any time during a game.
 * It usually derives from the GameState, because only a few properties change.
 */
// Here is a example of a "Game View": the deck content is hidden, instead it is replaced with the number of cards remaining inside
type GameView = Omit<GameState, 'players' | 'reserve'> & {
  players: PlayerView[]
  reserve: ReserveView
}

export default GameView

export function isGameView(game:GameState|GameView):game is GameView{
  return isPlayerView(game.players[0])
}