import GameState from "../GameState"
import MoveType from "./MoveType"
import SpiritOfNature from '../SpiritOfNature';


type MoveCircleOfSpirits = {
    type: MoveType.MoveCircleOfSpirits
    spirit: SpiritOfNature
    coordinate: number
  }
  
  export default MoveCircleOfSpirits
  
  
  export function moveCircleOfSpirits(state: GameState, move: MoveCircleOfSpirits) {
    const player = state.players.find(p => p.spirit === move.spirit)!
    state.circle.position[player.spirit] = move.coordinate

  }
  
  export function moveCircleOfSpiritsMove(spirit: SpiritOfNature, coordinate:number): MoveCircleOfSpirits {
    return {type: MoveType.MoveCircleOfSpirits, spirit, coordinate}
  }