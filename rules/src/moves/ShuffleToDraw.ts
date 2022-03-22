import GameState from '../GameState'
import SpiritOfNature from '../SpiritOfNature'
import MoveType from './MoveType'

type ShuffleToDraw = {
  type: MoveType.ShuffleToDraw
  spirit: SpiritOfNature
}

export default ShuffleToDraw

export function shuffleToDraw(state: GameState, move: ShuffleToDraw) {
  const player = state.players.find(p => p.spirit === move.spirit)!
  player.shuffle = true
}

export function shuffleToDrawMove(spirit: SpiritOfNature): ShuffleToDraw {
  return {type: MoveType.ShuffleToDraw, spirit}
}
