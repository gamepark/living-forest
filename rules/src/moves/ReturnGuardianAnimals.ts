import GameState from '../GameState'
import GameView from '../GameView'
import MoveType from './MoveType'
import { getVictoryTilesCount } from '../material/VictoryTile';

type ReturnGuardianAnimals = {
  type: MoveType.ReturnGuardianAnimals
}

export default ReturnGuardianAnimals


export function returnGuardianAnimals(state: GameState | GameView, _move: ReturnGuardianAnimals) {
  state.players.forEach(function (player, _) {
    while (player.line.length > 0) {
      player.discard.push(player.line.shift()!)
    }
    player.victory.forEach((victory, index) => {
      player.victory[index] = getVictoryTilesCount(player.victoryTiles, victory)
    })
  })
}

export function returnGuardianAnimalsMove(): ReturnGuardianAnimals {
  return { type: MoveType.ReturnGuardianAnimals }
}

