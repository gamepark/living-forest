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
        if (state.circle.fire.length <= 7)
          for (var i = 0; i < 7; i++) {
            if (state.circle.fire[i] === null) {
              state.circle.fire[i] = index + 1
              break
            }
          }
      }
    })
  })
  if (state.circle.fire.length === 0) state.circle.fire.push(Fire.Fire2)
}

export function onibiAttackingSacredTreeMove(): OnibiAttackingSacredTree {
  return { type: MoveType.OnibiAttackingSacredTree }
}

