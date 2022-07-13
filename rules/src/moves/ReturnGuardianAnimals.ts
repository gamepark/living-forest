import GameState from '../GameState'
import GameView from '../GameView'
import SpiritOfNature from '../SpiritOfNature'
import MoveType from './MoveType'
import { getPlayer } from '../PlayerView';

type ReturnGuardianAnimals = {
  type: MoveType.ReturnGuardianAnimals
  spirit: SpiritOfNature
}

export default ReturnGuardianAnimals


export function returnGuardianAnimals(state: GameState | GameView, move: ReturnGuardianAnimals) {
  const player = getPlayer(state, move.spirit)
    while(player.line != []){
      player.discard.push(player.line.shift()!)
    }
}

export function returnGuardianAnimalsMove(spirit: SpiritOfNature): ReturnGuardianAnimals {
  return {type: MoveType.ReturnGuardianAnimals, spirit}
}

