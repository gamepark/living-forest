import GameState from "../GameState"
import MoveType from "./MoveType"
import SpiritOfNature from '../SpiritOfNature';


type ExtinguishFire = {
    type: MoveType.ExtinguishFire
    spirit: SpiritOfNature
    fire: number
  }
  
  export default ExtinguishFire
  
  
  export function extinguishFire(state: GameState, move: ExtinguishFire) {
    const player = state.players.find(p => p.spirit === move.spirit)!
    state.circle.fire[move.fire-2] --
    player.fireExtinguished.push(move.fire)
  }
  
  export function extinguishFireMove(spirit: SpiritOfNature, fire: number): ExtinguishFire {
    return {type: MoveType.ExtinguishFire, spirit, fire}
  }