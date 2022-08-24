import GameState from '../GameState'
import GameView from '../GameView'
import MoveType from './MoveType'

type GivingSacredTree = {
  type: MoveType.GivingSacredTree
}

export default GivingSacredTree


export function givingSacredTree(state: GameState | GameView, _move: GivingSacredTree) {
  const activePlayerIndex = state.players.findIndex(player => player.spirit === state.sacredTreeOwner)
  const nextPlayerIndex = (activePlayerIndex + 1) % state.players.length

  const nextPlayer = state.players[nextPlayerIndex];

  state.sacredTreeOwner = nextPlayer.spirit;
}

export function givingSacredTreeMove(): GivingSacredTree {
  return { type: MoveType.GivingSacredTree }
}

