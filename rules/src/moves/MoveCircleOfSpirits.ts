import GameState from "../GameState"
import MoveType from "./MoveType"
import SpiritOfNature from '../SpiritOfNature';
import ActionMove from "./ActionMove";
import { circleOfSpiritsRocks } from "../material/CircleOfSpirits";
import GameView from '../GameView';
import { getPlayer } from "../PlayerView";


type MoveCircleOfSpirits = {
  type: MoveType.MoveCircleOfSpirits
  spirit: SpiritOfNature
  coordinate: number
}

export default MoveCircleOfSpirits


export function moveCircleOfSpirits(state: GameState | GameView, move: MoveCircleOfSpirits) {
  const player = getPlayer(state, move.spirit)
  player.ongoingMove = ActionMove.MoveCircleOfSpirits
  state.players.forEach(function (player, _index) {
    if (state.circle.position[player.spirit]! > state.circle.position[player.spirit]! && state.circle.position[player.spirit]! < move.coordinate) {
      player.bonus = ActionMove.TakeVictoryTile
    }
  })
  state.circle.position[player.spirit] = move.coordinate
  if (circleOfSpiritsRocks[move.coordinate] === ActionMove.TakeFragmentTile) {
    player.fragment++
    player.actionMoves = [ActionMove.MoveCircleOfSpirits]
    player.ongoingMove = null
  } else {
    player.bonus = circleOfSpiritsRocks[move.coordinate]
  }
}

export function moveCircleOfSpiritsMove(spirit: SpiritOfNature, coordinate: number): MoveCircleOfSpirits {
  return { type: MoveType.MoveCircleOfSpirits, spirit, coordinate }
}