import GameState from '../GameState'
import GameView from '../GameView'
import GuardianAnimal from '../material/GuardianAnimal'
import SpiritOfNature from '../SpiritOfNature'
import MoveType from './MoveType'
import { getAnimalsResource, getAnimalsType } from '../material/GuardianAnimalDetails';
import Resource from '../material/Resource'

type DrawCard = {
  type: MoveType.DrawCard
  spirit: SpiritOfNature
}

export default DrawCard

export type DrawCardView = DrawCard & {
  card: GuardianAnimal
}

export function isDrawCardView(move: DrawCard | DrawCardView): move is DrawCardView {
  return (move as DrawCardView).card !== undefined
}

export function drawCard(state: GameState, move: DrawCard) {
  const player = state.players.find(p => p.spirit === move.spirit)!
  const card = player.deck.shift()!
  player.line.push(card)
  if (getAnimalsType(player.line) == 3 && player.fragment === 0) {
    player.ready = true
  }

  if (getAnimalsResource([card], Resource.SacredFlower) != null) player.victory[2] += getAnimalsResource([card], Resource.SacredFlower)
}

export function drawCardMove(spirit: SpiritOfNature): DrawCard {
  return { type: MoveType.DrawCard, spirit }
}

export function drawCardInView(state: GameView, move: DrawCardView) {
  const player = state.players.find(p => p.spirit === move.spirit)!
  player.line.push(move.card)
  player.deck--
  if (getAnimalsType(player.line) == 3 && player.fragment === 0) {
    player.ready = true
  }

  if (getAnimalsResource([move.card], Resource.SacredFlower) != null) player.victory[2] += getAnimalsResource([move.card], Resource.SacredFlower)

}
