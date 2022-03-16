import Phase from './Phase'
import PlayerState from './PlayerState'
import SpiritOfNature from './SpiritOfNature'

/**
 * In here, you describe what a GameState will look like at any time during a game.
 */
type GameState = {
  players: PlayerState[]
  phase: Phase
  sacredTreeOwner: SpiritOfNature
  currentPlayer?: SpiritOfNature
  deck: number[]
}

export default GameState