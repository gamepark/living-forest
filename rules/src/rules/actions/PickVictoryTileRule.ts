import { isMoveItemType, ItemMove, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { VictoryTileTypes } from '../../material/VictoryTiles'
import SpiritOfNature from '../../SpiritOfNature'
import { Memory } from '../Memory'
import { RuleId } from '../RuleId'

export class PickVictoryTileRule extends PlayerTurnRule {
  getPlayerMoves(): MaterialMove<number, number, number>[] {
    const player = this.passedPlayers?.[0]
    if (!player) console.error("Trying to move victory tile to a non existing player")
    return this.material(MaterialType.VictoryTile)
      .location(LocationType.VictoryTileArea)
      .player((p) => p === player)
      .moveItems((item) => ({ type: LocationType.VictoryTileArea, player: this.player, id: VictoryTileTypes[item.id] }))
  }

  get passedPlayers() {
    return this.remind<SpiritOfNature[]>(Memory.PassedPlayers) ?? []
  }

  beforeItemMove(move: ItemMove<number, number, number>): MaterialMove<number, number, number>[] {
    if (!isMoveItemType(MaterialType.VictoryTile)(move)) return []
    const tile = this.material(MaterialType.VictoryTile).getItem(move.itemIndex)!
    this.memorize(Memory.PassedPlayers, (passedPlayers) => (passedPlayers ?? []).filter((p: SpiritOfNature) => p !== tile.location.player))
    return []
  }

  afterItemMove(_move: ItemMove<number, number, number>): MaterialMove<number, number, number>[] {
    if (!this.passedPlayers.length) {
      this.forget(Memory.PassedPlayers)
      return [this.startRule(RuleId.MoveOnCircleOfSpirit)]
    }

    return []
  }
}