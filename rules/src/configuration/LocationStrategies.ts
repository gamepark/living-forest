import { MaterialType } from '../refacto/material/MaterialType'
import { LocationType } from '../refacto/material/LocationType'
import { FillGapStrategy, PositiveSequenceStrategy } from '@gamepark/rules-api'

export const locationsStrategies = {
  [MaterialType.GuardianAnimalCard]: {
    [LocationType.ReserveStack]: new PositiveSequenceStrategy(),
    [LocationType.ReserveRow]: new FillGapStrategy(),
    [LocationType.PlayerDeckStack]: new PositiveSequenceStrategy(),
    [LocationType.PlayerDiscardStack]: new PositiveSequenceStrategy(),
    [LocationType.HelpLine]: new PositiveSequenceStrategy()
  },
  [MaterialType.VictoryTile]: {
    [LocationType.VictoryTileArea]: new PositiveSequenceStrategy()
  },
  [MaterialType.ProtectiveTreeTiles]: {
    [LocationType.ProtectiveTreeDeck]: new FillGapStrategy(),
  },
  [MaterialType.FireTile]: {
    [LocationType.CircleOfSpiritBoardFire]: new PositiveSequenceStrategy(),
  }
}
