import { PlayerTurnRule } from '@gamepark/rules-api/dist/material/rules/PlayerTurnRule'
import { MaterialMove } from '@gamepark/rules-api/dist/material/moves/MaterialMove'
import { MaterialType } from '../../material/MaterialType'
import { LocationType } from '../../material/LocationType'
import { ItemMove } from '@gamepark/rules-api/dist/material/moves/items/ItemMove'
import { RuleId } from '../RuleId'
import { VictoryTileTypes } from '../../../material/VictoryTiles'

export class PickVictoryTileRule extends PlayerTurnRule {
  getPlayerMoves(): MaterialMove<number, number, number>[] {
    return this.material(MaterialType.VictoryTile)
      .location(LocationType.VictoryTileArea)
      .player((player) => player !== this.player)
      .moveItems((item) => ({ location: { type: LocationType.VictoryTileArea, player: this.player, id: VictoryTileTypes[item.id] }}))
  }

  afterItemMove(_move: ItemMove<number, number, number>): MaterialMove<number, number, number>[] {
    return [this.rules().startRule(RuleId.MoveOnCircleOfSpirit)]
  }
}