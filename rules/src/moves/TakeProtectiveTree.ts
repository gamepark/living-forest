import GameState from "../GameState"
import GameView from "../GameView"
import ProtectiveTree from "../material/ProtectiveTree"
import { getPlayer } from "../PlayerView"
import SpiritOfNature from "../SpiritOfNature"
import MoveType from "./MoveType"

type TakeProtectiveTree = {
    type: MoveType.TakeProtectiveTree
    spirit: SpiritOfNature
    tree: ProtectiveTree
  }

export default TakeProtectiveTree

  
export function takeProtectiveTree(state: GameState|GameView, move: TakeProtectiveTree) {
    const player = getPlayer(state, move.spirit)
    player.tree = move.tree   
    state.dispenser[move.tree] -- 
  }
  
  export function takeProtectiveTreeMove(spirit: SpiritOfNature, tree: ProtectiveTree): TakeProtectiveTree {
    return {type: MoveType.TakeProtectiveTree, spirit, tree}
  }