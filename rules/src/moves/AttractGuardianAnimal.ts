
import GameState from '../GameState';
import SpiritOfNature from '../SpiritOfNature';
import MoveType from './MoveType';
import GuardianAnimal from '../material/GuardianAnimal';
import GameView from '../GameView';
import { getPlayer, isPlayerView } from '../PlayerView';
import Coordinates from '../material/Coordinates';
import { getGuardianAnimalDetails } from '../material/GuardianAnimalDetails';
import ActionMove from './ActionMove';


type AttractGuardianAnimal = {
  type: MoveType.AttractGuardianAnimal
  spirit: SpiritOfNature
  guardianAnimal: GuardianAnimal
  coordinates: Coordinates
}

export default AttractGuardianAnimal


export function attractGuardianAnimal(state: GameState | GameView, move: AttractGuardianAnimal) {
  const player = getPlayer(state, move.spirit)

  player.attractedGuardianAnimal += getGuardianAnimalDetails(move.guardianAnimal).cost!

  if (isPlayerView(player)) {
    player.deck++
  } else {
    player.deck.unshift(move.guardianAnimal)
  }
  player.ongoingMove = ActionMove.AttractGuardianAnimal
  state.reserve.rows[move.coordinates.y][move.coordinates.x] = null
}

export function attractGuardianAnimalMove(spirit: SpiritOfNature, guardianAnimal: GuardianAnimal, coordinates: Coordinates): AttractGuardianAnimal {
  return { type: MoveType.AttractGuardianAnimal, spirit, guardianAnimal, coordinates }
}

