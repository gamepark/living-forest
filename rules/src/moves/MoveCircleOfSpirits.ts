import GameState from "../GameState"
import MoveType from "./MoveType"
import SpiritOfNature from '../SpiritOfNature';
import ActionMove from "./ActionMove";
import { circleOfSpiritsRocks } from "../material/CircleOfSpirits";


type MoveCircleOfSpirits = {
  type: MoveType.MoveCircleOfSpirits
  spirit: SpiritOfNature
  coordinate: number
}

export default MoveCircleOfSpirits


export function moveCircleOfSpirits(state: GameState, move: MoveCircleOfSpirits) {
  const player = state.players.find(p => p.spirit === move.spirit)!
  state.players.forEach(function (player, _index) {
    if (state.circle.position[player.spirit]! > state.circle.position[player.spirit]! && state.circle.position[player.spirit]! < move.coordinate) {
      player.bonus = ActionMove.TakeVictoryTile
    }
  })
  state.circle.position[player.spirit] = move.coordinate
  if (circleOfSpiritsRocks[move.coordinate] === ActionMove.TakeFragmentTile) {
    player.fragment++
  } else {
    player.bonus = circleOfSpiritsRocks[move.coordinate]
  }
}

export function moveCircleOfSpiritsMove(spirit: SpiritOfNature, coordinate: number): MoveCircleOfSpirits {
  return { type: MoveType.MoveCircleOfSpirits, spirit, coordinate }
}