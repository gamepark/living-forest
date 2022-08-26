import GameState from '../GameState'
import GameView from '../GameView'
import MoveType from './MoveType'
import { getVictoryTilesCount } from '../material/VictoryTile';
import Victory from '../material/Victory';

type ReturnGuardianAnimals = {
  type: MoveType.ReturnGuardianAnimals
}

export default ReturnGuardianAnimals


export function returnGuardianAnimals(state: GameState | GameView, _move: ReturnGuardianAnimals) {
  state.players.forEach(function (player, _) {
    while (player.line.length > 0) {
      player.discard.push(player.line.shift()!)
    }
    player.victory[2] = getVictoryTilesCount(player.victoryTiles, Victory.SacredFlower)
  })
}

export function returnGuardianAnimalsMove(): ReturnGuardianAnimals {
  return { type: MoveType.ReturnGuardianAnimals }
}

