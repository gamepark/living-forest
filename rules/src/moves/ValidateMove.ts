
import GameState from '../GameState';
import GameView from '../GameView';
import { getPlayer } from '../PlayerView';
import SpiritOfNature from '../SpiritOfNature';
import ActionMove from './ActionMove';
import MoveType from './MoveType';



type ValidateMove = {
  type: MoveType.ValidateMove
  spirit: SpiritOfNature
}

export default ValidateMove


export function validate(state: GameState | GameView, move: ValidateMove) {
  const player = getPlayer(state, move.spirit)
  if (player.ongoingMove != null) player.actionMoves.push(player.ongoingMove)
  if (player.ongoingMove === ActionMove.AttractGuardianAnimal || player.bonus === ActionMove.AttractGuardianAnimal) player.attractedGuardianAnimal = 0
  player.extinguishedFires = []
  player.extinguishedFiresTotal = 0

  player.ongoingMove = null
  if (player.bonus === ActionMove.AttractGuardianAnimal || player.bonus === ActionMove.ExtinguishFire || player.bonus === ActionMove.PlantTree || player.bonus === ActionMove.ExtinguishFire2 || player.bonus === ActionMove.AttractGuardianAnimal3) player.bonus = null

}

export function validateMove(spirit: SpiritOfNature): ValidateMove {
  return { type: MoveType.ValidateMove, spirit }
}

