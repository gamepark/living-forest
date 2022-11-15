import GameState from "../GameState";
import GameView from '../GameView';
import VictoryTile from "../material/VictoryTile";
import { getPlayer } from "../PlayerView";
import SpiritOfNature from '../SpiritOfNature';
import ActionMove from "./ActionMove";
import MoveType from "./MoveType";


type TakeVictoryTile = {
  type: MoveType.TakeVictoryTile
  victory: VictoryTile
  spirit: SpiritOfNature
  spiritJumped: SpiritOfNature
}

export default TakeVictoryTile


export function takeVictoryTile(state: GameState | GameView, move: TakeVictoryTile) {
  const player = getPlayer(state, move.spirit)
  const playerJumped = getPlayer(state, move.spiritJumped)
  const victoryIndex = playerJumped.victoryTiles.findIndex(vt => vt === move.victory)

  player.victoryTiles.push(...playerJumped.victoryTiles.splice(victoryIndex, 1))
  player.bonus = null
  player.actionMoves.push(ActionMove.MoveCircleOfSpirits)
  player.ongoingMove = null
}

export function takeVictoryTileMove(spirit: SpiritOfNature, spiritJumped: SpiritOfNature, victory: VictoryTile): TakeVictoryTile {
  return { type: MoveType.TakeVictoryTile, victory, spirit, spiritJumped }
}