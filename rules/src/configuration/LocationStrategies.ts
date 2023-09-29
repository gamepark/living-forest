import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
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
    [LocationType.PlayerFireTileStack]: new PositiveSequenceStrategy()
  },
  [MaterialType.FragmentTile]: {
    [LocationType.PlayerFragmentTileStack]: new PositiveSequenceStrategy()
  }
}
