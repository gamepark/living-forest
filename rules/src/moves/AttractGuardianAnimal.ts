
import GameState from '../GameState';
import GameView from '../GameView';
import Coordinates from '../material/Coordinates';
import GuardianAnimal from '../material/GuardianAnimal';
import { getGuardianAnimalDetails } from '../material/GuardianAnimalDetails';
import { getPlayer, isPlayerView } from '../PlayerView';
import SpiritOfNature from '../SpiritOfNature';
import MoveType from './MoveType';


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
  // if (player.ongoingMove != ActionMove.MoveCircleOfSpirits) player.ongoingMove = ActionMove.AttractGuardianAnimal
  state.reserve.rows[move.coordinates.y][move.coordinates.x] = null
}

export function attractGuardianAnimalMove(spirit: SpiritOfNature, guardianAnimal: GuardianAnimal, coordinates: Coordinates): AttractGuardianAnimal {
  return { type: MoveType.AttractGuardianAnimal, spirit, guardianAnimal, coordinates }
}

