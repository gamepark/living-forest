import GameState from '../GameState'
import GameView from '../GameView'
import Fire from '../material/Fire'
import MoveType from './MoveType'

type OnibiAttackingSacredTree = {
  type: MoveType.OnibiAttackingSacredTree
}

export default OnibiAttackingSacredTree


export function onibiAttackingSacredTree(state: GameState | GameView, _move: OnibiAttackingSacredTree) {
  state.reserve.rows.forEach(function (row, index) {
    row.forEach(function (card, _indexRow) {
      if (card === null) {
        state.circle.fire.push(index + 1)
      }
    })
  })
  if (state.circle.fire.length === 0) state.circle.fire.push(Fire.Fire2)
}

export function onibiAttackingSacredTreeMove(): OnibiAttackingSacredTree {
  return { type: MoveType.OnibiAttackingSacredTree }
}

