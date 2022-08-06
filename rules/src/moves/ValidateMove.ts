
import GameState from '../GameState';
import SpiritOfNature from '../SpiritOfNature';
import MoveType from './MoveType';
import GameView from '../GameView';
import { getPlayer } from '../PlayerView';



type ValidateMove = {
  type: MoveType.ValidateMove
  spirit: SpiritOfNature
}

export default ValidateMove


export function validate(state: GameState | GameView, move: ValidateMove) {
  const player = getPlayer(state, move.spirit)

  player.actionMoves.push(player.ongoingMove!)

}

export function validateMove(spirit: SpiritOfNature): ValidateMove {
  return { type: MoveType.ValidateMove, spirit }
}

