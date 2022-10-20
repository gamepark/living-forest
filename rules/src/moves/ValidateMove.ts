
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
  if (player.ongoingMove != null) player.actionMoves.push(player.ongoingMove)
  if (player.ongoingMove === ActionMove.AttractGuardianAnimal || player.bonus === ActionMove.AttractGuardianAnimal) player.attractedGuardianAnimal = 0
  if (player.ongoingMove === ActionMove.ExtinguishFire) player.victory[1] = player.extinguishedFires.length
  player.extinguishedFires = []
  player.extinguishedFiresTotal = 0

  player.ongoingMove = null
  if (player.bonus === ActionMove.AttractGuardianAnimal || player.bonus === ActionMove.ExtinguishFire || player.bonus === ActionMove.PlantTree) player.bonus = null

}

export function validateMove(spirit: SpiritOfNature): ValidateMove {
  return { type: MoveType.ValidateMove, spirit }
}

