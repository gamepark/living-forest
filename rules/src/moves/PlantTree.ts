
import GameState from '../GameState';
import SpiritOfNature from '../SpiritOfNature';
import MoveType from './MoveType';
import ProtectiveTree from '../material/ProtectiveTree';
import Coordinates from '../material/Coordinates';


type PlantTree = {
  type: MoveType.PlantTree
  spirit: SpiritOfNature
  tree: ProtectiveTree
  coordinates: Coordinates
}

export default PlantTree


export function plantTree(state: GameState, move: PlantTree) {
  const player = state.players.find(p => p.spirit === move.spirit)!
  player.line.push(player.deck.shift()!)
}

export function plantTreeMove(spirit: SpiritOfNature, tree: ProtectiveTree, coordinates: Coordinates): PlantTree {
  return {type: MoveType.PlantTree, spirit, tree, coordinates}
}

