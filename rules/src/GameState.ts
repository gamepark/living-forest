
import CircleOfSpirits from './material/CircleOfSpirits'
import TreeDispenser from './material/TreeDispenser'
import Phase from './Phase'
import PlayerState from './PlayerState'
import Reserve from './Reserve'
import SpiritOfNature from './SpiritOfNature'


/**
 * In here, you describe what a GameState will look like at any time during a game.
 */
type GameState = {
  players: PlayerState[]
  phase: Phase
  sacredTreeOwner: SpiritOfNature
  reserve: Reserve
  dispenser: TreeDispenser
  circle: CircleOfSpirits
  currentPlayer?: SpiritOfNature
}

export default GameState