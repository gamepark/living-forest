import { PlayerTurnRule, MaterialMove, ItemMove } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { LocationType } from '../../material/LocationType'
import { RuleId } from '../RuleId'
import { VictoryTileTypes } from '../../material/VictoryTiles'

export class PickVictoryTileRule extends PlayerTurnRule {
  getPlayerMoves(): MaterialMove<number, number, number>[] {
    return this.material(MaterialType.VictoryTile)
      .location(LocationType.VictoryTileArea)
      .player((player) => player !== this.player)
      .moveItems((item) => ({ type: LocationType.VictoryTileArea, player: this.player, id: VictoryTileTypes[item.id] }))
  }

  afterItemMove(_move: ItemMove<number, number, number>): MaterialMove<number, number, number>[] {
    return [this.rules().startRule(RuleId.MoveOnCircleOfSpirit)]
  }
}