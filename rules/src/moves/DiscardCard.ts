import GameState from "../GameState"
import MoveType from "./MoveType"
import SpiritOfNature from '../SpiritOfNature';
import GuardianAnimal from '../material/GuardianAnimal';
import GameView from "../GameView";
import { getPlayer } from "../PlayerView";


type DiscardCard = {
  type: MoveType.DiscardCard
  spirit: SpiritOfNature
}

export default DiscardCard


export function discardCard(state: GameState | GameView, move: DiscardCard) {
  const player = getPlayer(state, move.spirit)
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