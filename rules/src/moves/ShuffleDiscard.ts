import GameState from '../GameState'
import GameView from '../GameView'
import GuardianAnimal from '../material/GuardianAnimal'
import SpiritOfNature from '../SpiritOfNature'
import MoveType from './MoveType'
import shuffle from 'lodash.shuffle';

type ShuffleDiscard = {
  type: MoveType.ShuffleDiscard
  spirit: SpiritOfNature
}

export default ShuffleDiscard

export type ShuffleDiscardRandomized = ShuffleDiscard & {
  deck: GuardianAnimal[]
}

export function shuffleDiscardMove(spirit: SpiritOfNature): ShuffleDiscard {
  return { type: MoveType.ShuffleDiscard, spirit }
}

export function randomizeShuffleDiscardMove(state: GameState, move: ShuffleDiscard): ShuffleDiscardRandomized {
  const shufflingPlayer = state.players.find(p => p.spirit === move.spirit)!
  return { ...move, deck: shuffle(shufflingPlayer.discard) }
}

export function shuffleDiscard(state: GameState, move: ShuffleDiscardRandomized) {
  const player = state.players.find(p => p.spirit === move.spirit)!
  player.deck = move.deck
  player.discard = []
}

export function shuffleDiscardInView(state: GameView, move: ShuffleDiscard) {
  const player = state.players.find(p => p.spirit === move.spirit)!
  player.deck = player.discard.length
  player.discard = []
}
