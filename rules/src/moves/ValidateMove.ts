
import GameState from '../GameState';
import SpiritOfNature from '../SpiritOfNature';
import MoveType from './MoveType';
import GameView from '../GameView';
import { getPlayer } from '../PlayerView';
import ActionMove from './ActionMove';



type ValidateMove = {
  type: MoveType.ValidateMove
  spirit: SpiritOfNature
}

export default ValidateMove


export function validate(state: GameState | GameView, move: ValidateMove) {
  const player = getPlayer(state, move.spirit)

  if (player.ongoingMove == ActionMove.ExtinguishFire) {
    player.victory[1] = player.extinguishedFires.length
  }

  player.actionMoves.push(player.ongoingMove!)
  player.ongoingMove = null
  if (player.bonus === ActionMove.AttractGuardianAnimal || player.bonus === ActionMove.ExtinguishFire || player.bonus === ActionMove.PlantTree) player.bonus = null

}

export function validateMove(spirit: SpiritOfNature): ValidateMove {
  return { type: MoveType.ValidateMove, spirit }
}

