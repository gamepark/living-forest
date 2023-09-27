import { ItemLocator } from '@gamepark/react-game'
import { LocationType } from '@gamepark/living-forest/refacto/material/LocationType'
import { tableLocator } from './TableLocator'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { VaranDeckLocator } from './VaranDeckLocator'
import { playerDeckLocator } from './PlayerDeckLocator'
import { reserveStackLocator } from './ReserveStackLocator'
import { ReserveRowLocator } from './ReserveRowLocator'
import { FragmentStockLocator } from './FragmentStockLocation'
import { ProtectiveTreeDeckLocator } from './ProtectiveTreeDeckLocator'
import { HelpLineLocator } from './HelpLineLocator'
import { StandeeOnCircleOfSpiritBoardLocator } from './StandeeOnCircleOfSpiritBoardLocator'
import { FireOnCircleOfSpiritBoardLocator } from './FireOnCircleOfSpiritBoardLocator'
import { FireStockLocation } from './FireStockLocation'
import { playerDiscardLocator } from './PlayerDiscardLocator'
import { playerAreaLocation } from './PlayerAreaLocation'
import { TreeSpaceLocator } from './TreeSpaceLocator'
import { victoryTileAreaLocator } from './VictoryTileAreaLocator'

export const locators: Record<LocationType, ItemLocator<SpiritOfNature, MaterialType, LocationType>> = {
  [LocationType.Table]: tableLocator,
  [LocationType.ForestBoard]: tableLocator,
  [LocationType.CircleOfSpiritBoardSpace]: new StandeeOnCircleOfSpiritBoardLocator(),
  [LocationType.CircleOfSpiritBoardFire]: new FireOnCircleOfSpiritBoardLocator(),
  [LocationType.PlayerDeckStack]: playerDeckLocator,
  [LocationType.PlayerDiscardStack]: playerDiscardLocator,
  [LocationType.ReserveStack]: reserveStackLocator,
  [LocationType.ReserveRow]: new ReserveRowLocator(),
  [LocationType.TreeDispenser]: new ProtectiveTreeDeckLocator(),
  [LocationType.VictoryTileArea]: victoryTileAreaLocator,
  [LocationType.VaranDeck]: new VaranDeckLocator(),
  [LocationType.FragmentStack]: new FragmentStockLocator(),
  [LocationType.HelpLine]: new HelpLineLocator(),
  [LocationType.FireStack]: new FireStockLocation(),
  [LocationType.PlayerArea]: playerAreaLocation,
  [LocationType.TreeSpace]: new TreeSpaceLocator()
}