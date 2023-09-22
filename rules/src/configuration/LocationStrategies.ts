import { MaterialType } from '../refacto/material/MaterialType'
import { LocationType } from '../refacto/material/LocationType'
import { PositiveSequenceStrategy } from '@gamepark/rules-api'
import { OnlyAddPositiveStrategy } from './OnlyAddPositiveStrategy'

export const locationsStrategies = {
  [MaterialType.GuardianAnimalCard]: {
    [LocationType.ReserveStack]: new PositiveSequenceStrategy(),
    [LocationType.ReserveRow]: new OnlyAddPositiveStrategy(),
    [LocationType.PlayerDeckStack]: new PositiveSequenceStrategy(),
    [LocationType.PlayerDiscardStack]: new PositiveSequenceStrategy(),
    [LocationType.HelpLine]: new PositiveSequenceStrategy()
  },
  [MaterialType.VictoryTile]: {
    [LocationType.VictoryTileArea]: new PositiveSequenceStrategy()
  },
  [MaterialType.ProtectiveTreeTiles]: {
    [LocationType.ProtectiveTreeDeck]: new OnlyAddPositiveStrategy(),
  }
}
