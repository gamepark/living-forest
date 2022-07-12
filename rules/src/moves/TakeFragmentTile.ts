import GameState from "../GameState"
import MoveType from "./MoveType"
import SpiritOfNature from '../SpiritOfNature';
import GameView from '../GameView';
import { getPlayer } from '../PlayerView';
import ActionMove from './ActionMove';


type TakeFragmentTile = {
    type: MoveType.TakeFragmentTile
    spirit: SpiritOfNature
  }
  
  export default TakeFragmentTile
  
  
  export function takeFragmentTile(state: GameState|GameView, move: TakeFragmentTile) {
    const player = getPlayer(state, move.spirit)
    player.actionMoves.push(ActionMove.TakeFragmentTile)
    player.fragment ++
  }
  
  export function takeFragmentTileMove(spirit: SpiritOfNature): TakeFragmentTile {
    return {type: MoveType.TakeFragmentTile, spirit}
  }