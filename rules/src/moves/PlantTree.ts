
import GameState from '../GameState';
import SpiritOfNature from '../SpiritOfNature';
import MoveType from './MoveType';
import Coordinates from '../material/Coordinates';
import GameView from '../GameView';
import { getPlayer } from '../PlayerView';


type PlantTree = {
  type: MoveType.PlantTree
  spirit: SpiritOfNature
  coordinates: Coordinates
}

export default PlantTree


export function plantTree(state: GameState | GameView, move: PlantTree) {
  const player = getPlayer(state, move.spirit)
  player.forest[move.coordinates.x][move.coordinates.y] = player.tree
  player.tree = null
}

export function plantTreeMove(spirit: SpiritOfNature, coordinates: Coordinates): PlantTree {
  return { type: MoveType.PlantTree, spirit, coordinates }
}

