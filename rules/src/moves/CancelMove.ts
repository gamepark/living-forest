
import GameState from '../GameState';
import SpiritOfNature from '../SpiritOfNature';
import MoveType from './MoveType';
import GameView from '../GameView';
import { getPlayer } from '../PlayerView';


type CancelMove = {
  type: MoveType.CancelMove
  spirit: SpiritOfNature
}

export default CancelMove


export function cancel(state: GameState | GameView, move: CancelMove) {
  const player = getPlayer(state, move.spirit)
  player.ongoingMove = null
  if (player.bonus != null) player.bonus = null
  if (player.tree != null) player.tree = null
}

export function cancelMove(spirit: SpiritOfNature): CancelMove {
  return { type: MoveType.CancelMove, spirit }
}

