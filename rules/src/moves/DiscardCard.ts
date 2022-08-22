import GameState from "../GameState"
import MoveType from "./MoveType"
import SpiritOfNature from '../SpiritOfNature';
import GuardianAnimal from '../material/GuardianAnimal';


type DiscardCard = {
  type: MoveType.DiscardCard
  spirit: SpiritOfNature
}

export default DiscardCard


export function discardCard(state: GameState, move: DiscardCard) {
  const player = state.players.find(p => p.spirit === move.spirit)!
  const card = player.line[-1]
  if (card === GuardianAnimal.Varan) {
    player.line.pop()
  } else {
    player.discard.push(player.line.pop()!)
  }
  player.fragment--
}

export function discardCardMove(spirit: SpiritOfNature): DiscardCard {
  return { type: MoveType.DiscardCard, spirit }
}