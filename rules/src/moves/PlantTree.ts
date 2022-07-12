
import GameState from '../GameState';
import SpiritOfNature from '../SpiritOfNature';
import MoveType from './MoveType';
import Coordinates from '../material/Coordinates';


type PlantTree = {
  type: MoveType.PlantTree
  spirit: SpiritOfNature
  coordinates: Coordinates
}

export default PlantTree


export function plantTree(state: GameState, move: PlantTree) {
  const player = state.players.find(p => p.spirit === move.spirit)!
  player.forest[move.coordinates.x][move.coordinates.y] = player.tree
  player.tree = null
}

export function plantTreeMove(spirit: SpiritOfNature, coordinates: Coordinates): PlantTree {
  return { type: MoveType.PlantTree, spirit, coordinates }
}

