import GameState from "../GameState"
import MoveType from "./MoveType"
import SpiritOfNature from '../SpiritOfNature';
import GameView from '../GameView';
import { getPlayer } from '../PlayerView';
import ActionMove from "./ActionMove";
// import ActionMove from './ActionMove';


type ExtinguishFire = {
  type: MoveType.ExtinguishFire
  spirit: SpiritOfNature
  position: number
}

export default ExtinguishFire

export function extinguishFire(state: GameState | GameView, move: ExtinguishFire) {
  const player = getPlayer(state, move.spirit)
  const fire = state.circle.fire[move.position]

  if (fire != null) player.extinguishedFiresTotal += fire + 1
  player.extinguishedFires.push(state.circle.fire[move.position]!)
  state.circle.fire[move.position] = null
  player.ongoingMove = ActionMove.ExtinguishFire
  player.victory[0]++
}

export function extinguishFireMove(spirit: SpiritOfNature, position: number): ExtinguishFire {
  return { type: MoveType.ExtinguishFire, spirit, position }
}