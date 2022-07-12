import GameState from "../GameState"
import GameView from "../GameView"
import { getPlayer } from "../PlayerView"
import SpiritOfNature from "../SpiritOfNature"
import Move from "./Move"
import MoveType from "./MoveType"

type EndTurn = {
  type: MoveType.EndTurn
  spirit: SpiritOfNature
}

export default EndTurn

export function endTurnMove(spirit: SpiritOfNature): EndTurn {
  return {type: MoveType.EndTurn, spirit}
}

export function endTurn(state: GameState | GameView, move: EndTurn) {
const player = getPlayer(state, move.spirit)
  player.ready = true
}

export function isEndTurn(move: Move): move is EndTurn {
  return move.type === MoveType.EndTurn
}