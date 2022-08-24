import GameState from "../GameState"
import MoveType from "./MoveType"
import SpiritOfNature from '../SpiritOfNature';
import VictoryTile from "../material/VictoryTile";


type TakeVictoryTile = {
  type: MoveType.TakeVictoryTile
  victory: VictoryTile
  spirit: SpiritOfNature
  spiritJumped: SpiritOfNature
}

export default TakeVictoryTile


export function takeVictoryTile(state: GameState, move: TakeVictoryTile) {
  const player = state.players.find(p => p.spirit === move.spirit)!
  const playerJumped = state.players.find(p => p.spirit === move.spiritJumped)!
  player.victoryTiles.push(...playerJumped.victoryTiles.splice(move.victory, 1))
  player.bonus = null
  playerJumped.victory[move.victory - 1] -= 1
}

export function takeVictoryTileMove(spirit: SpiritOfNature, spiritJumped: SpiritOfNature, victory: VictoryTile): TakeVictoryTile {
  return { type: MoveType.TakeVictoryTile, victory, spirit, spiritJumped }
}