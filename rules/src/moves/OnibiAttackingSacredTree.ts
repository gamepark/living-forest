import GameState from '../GameState'
import GameView from '../GameView'
import Fire from '../material/Fire'
import MoveType from './MoveType'

type OnibiAttackingSacredTree = {
  type: MoveType.OnibiAttackingSacredTree
}

export default OnibiAttackingSacredTree


export function onibiAttackingSacredTree(state: GameState | GameView, _move: OnibiAttackingSacredTree) {
  let fires = 0
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
  for (var i = 0; i < 7; i++) {
    if (state.circle.fire[i] !== null) {
      fires++
      break
    }
  }
  if (fires === 0) state.circle.fire[0] = Fire.Fire2
}

export function onibiAttackingSacredTreeMove(): OnibiAttackingSacredTree {
  return { type: MoveType.OnibiAttackingSacredTree }
}

export function nextFireEmpty(fires: (Fire | null)[]) {
  let place = 8
  for (let i = 0; i < 7; i++) {
    if (fires[i] === null && place == 8) place = i
  }
  return place
}
