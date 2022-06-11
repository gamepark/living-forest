import PlayerState from './PlayerState'
import GameState from './GameState';
import GameView, { isGameView } from './GameView';
import SpiritOfNature from './SpiritOfNature';

type PlayerView = Omit<PlayerState, 'deck'> & {
  deck: number
}

export default PlayerView

export function getPlayer(game:GameState|GameView, spirit:SpiritOfNature){
  return isGameView(game)?game.players.find(p => p.spirit === spirit)!:game.players.find(p => p.spirit === spirit)!
}

export function isPlayerView(player:PlayerState|PlayerView):player is PlayerView{
  return typeof player.deck === 'number'
}