import GameState from '../GameState'
import GameView from '../GameView'
import GuardianAnimal from '../material/GuardianAnimal'
import SpiritOfNature from '../SpiritOfNature'
import MoveType from './MoveType'

type ShuffleDiscard = {
  type: MoveType.ShuffleDiscard
  spirit: SpiritOfNature
  deck: GuardianAnimal[]
}

export default ShuffleDiscard

export type ShuffleDiscardView = Omit<ShuffleDiscard, 'deck'>

export function shuffleDiscard(state: GameState, move: ShuffleDiscard) {
  const player = state.players.find(p => p.spirit === move.spirit)!
  player.deck = move.deck
  player.discard = []
  delete player.shuffle
}

export function shuffleDiscardMove(spirit: SpiritOfNature, deck: number[]): ShuffleDiscard {
  return {type: MoveType.ShuffleDiscard, spirit, deck}
}

export function shuffleDiscardInView(state: GameView, move: ShuffleDiscardView) {
  const player = state.players.find(p => p.spirit === move.spirit)!
  player.deck = player.discard.length
  player.discard = []
}
