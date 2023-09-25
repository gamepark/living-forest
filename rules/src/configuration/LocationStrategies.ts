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
    [LocationType.TreeDispenser]: new FillGapStrategy(),
  },
  [MaterialType.FireTile]: {
    [LocationType.CircleOfSpiritBoardFire]: new FillGapStrategy(),
    [LocationType.PlayerArea]: new PositiveSequenceStrategy()
  },
  [MaterialType.FragmentTile]: {
    [LocationType.PlayerArea]: new PositiveSequenceStrategy()
  }
}
