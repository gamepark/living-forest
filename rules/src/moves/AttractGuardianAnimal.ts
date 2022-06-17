
import GameState from '../GameState';
import SpiritOfNature from '../SpiritOfNature';
import MoveType from './MoveType';
import GuardianAnimal from '../material/GuardianAnimal';
import GameView from '../GameView';
import { getPlayer, isPlayerView } from '../PlayerView';
import Coordinates from '../material/Coordinates';
// import ActionMove from './ActionMove';
import { getAnimalsResource } from '../material/GuardianAnimalDetails';
import Resource from '../material/Resource';


type AttractGuardianAnimal = {
  type: MoveType.AttractGuardianAnimal
  spirit: SpiritOfNature
  guardianAnimal: GuardianAnimal
  coordinates: Coordinates
}

export default AttractGuardianAnimal


export function attractGuardianAnimal(state: GameState | GameView, move: AttractGuardianAnimal) {
  const player = getPlayer(state, move.spirit)

  player.attractedGuardianAnimal += getAnimalsResource([move.guardianAnimal], Resource.Sun)

  if (isPlayerView(player)) {
    player.deck++
  } else {
    player.deck.unshift(move.guardianAnimal)
  }
  // player.actionMoves.push(ActionMove.AttractGuardianAnimal)
  state.reserve.rows[move.coordinates.y][move.coordinates.x] = null
}

export function attractGuardianAnimalMove(spirit: SpiritOfNature, guardianAnimal: GuardianAnimal, coordinates: Coordinates): AttractGuardianAnimal {
  return { type: MoveType.AttractGuardianAnimal, spirit, guardianAnimal, coordinates }
}

