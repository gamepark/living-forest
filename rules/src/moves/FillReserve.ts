import GameState from '../GameState';
import GameView from '../GameView';
import MoveType from './MoveType';
import GuardianAnimal from '../material/GuardianAnimal';

type FillReserve = {
  type: MoveType.FillReserve
  row: number
  column: number
}

export default FillReserve

export type FillReserveView = FillReserve & {
  card: GuardianAnimal
}

export function fillReserve(state: GameState, move: FillReserve) {
  state.reserve.rows[move.row][move.column] = state.reserve.stacks[move.row].shift() ?? null
}

export function fillReserveInView(state: GameView, move: FillReserveView) {
  state.reserve.stacks[move.row]--
  state.reserve.rows[move.row][move.column] = move.card

}

export function fillReserveMove(row: number, column: number): FillReserve {
  return { type: MoveType.FillReserve, row, column }
}
