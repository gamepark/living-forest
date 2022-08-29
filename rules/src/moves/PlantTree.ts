
import GameState from '../GameState';
import SpiritOfNature from '../SpiritOfNature';
import MoveType from './MoveType';
import Coordinates from '../material/Coordinates';
import GameView from '../GameView';
import { getPlayer } from '../PlayerView';
import ProtectiveTree from '../material/ProtectiveTree';
import ActionMove from './ActionMove';


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
  player.actionMoves.push(ActionMove.PlantTree)
  player.ongoingMove = null
  player.victory[1]++
  if (player.bonus === ActionMove.PlantTree) player.bonus = null
  if (player.tree === ProtectiveTree.Tree11) player.bonus = ActionMove.PlantTree
  if (move.coordinates.x === 0 && move.coordinates.y === 0) player.bonus = ActionMove.AttractGuardianAnimal3
  if ((move.coordinates.x === 0 && move.coordinates.y === 4) || (move.coordinates.x === 2 && move.coordinates.y === 0)) player.fragment++
  if (move.coordinates.x === 2 && move.coordinates.y === 4) player.bonus = ActionMove.ExtinguishFire2
}

export function plantTreeMove(spirit: SpiritOfNature, coordinates: Coordinates): PlantTree {
  return { type: MoveType.PlantTree, spirit, coordinates }
}

export function placementIsValid(forest: (ProtectiveTree | number | null)[][], coordinates: Coordinates) {
  var valid = false
  if (coordinates.x != 2 && forest[coordinates.x + 1][coordinates.y] != null) valid = true
  if (coordinates.x != 0 && forest[coordinates.x - 1][coordinates.y] != null) valid = true
  if (coordinates.y != 4 && forest[coordinates.x][coordinates.y + 1] != null) valid = true
  if (coordinates.y != 0 && forest[coordinates.x][coordinates.y - 1] != null) valid = true
  return valid
}
