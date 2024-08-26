import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { Locator } from '@gamepark/react-game'
import { FireOnCircleOfSpiritBoardLocator } from './FireOnCircleOfSpiritBoardLocator'
import { FireStockLocation } from './FireStockLocation'
import { FragmentStockLocator } from './FragmentStockLocation'
import { HelpLineLocator } from './HelpLineLocator'
import { playerDeckLocator } from './PlayerDeckLocator'
import { playerDiscardLocator } from './PlayerDiscardLocator'
import { playerFireTileStackLocator } from './PlayerFireStackLocator'
import { playerFragmentStackLocator } from './PlayerFragmentStackLocator'
import { ProtectiveTreeDeckLocator } from './ProtectiveTreeDeckLocator'
import { playerReminderLocator } from './reminder/PlayerReminderLocator'
import { ReserveRowLocator } from './ReserveRowLocator'
import { reserveStackLocator } from './ReserveStackLocator'
import { sacredTreeLocator } from './SacredTreeLocator'
import { StandeeOnCircleOfSpiritBoardLocator } from './StandeeOnCircleOfSpiritBoardLocator'
import { tableLocator } from './TableLocator'
import { TreeSpaceLocator } from './TreeSpaceLocator'
import { varanDeckLocator } from './VaranDeckLocator'
import { victoryTileAreaLocator } from './VictoryTileAreaLocator'

export const locators: Record<LocationType, Locator<SpiritOfNature, MaterialType, LocationType>> = {
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
  [LocationType.VaranDeck]: varanDeckLocator,
  [LocationType.FragmentStack]: new FragmentStockLocator(),
  [LocationType.HelpLine]: new HelpLineLocator(),
  [LocationType.FireStack]: new FireStockLocation(),
  [LocationType.SacredTree]: sacredTreeLocator,
  [LocationType.TreeSpace]: new TreeSpaceLocator(),
  [LocationType.PlayerFireTileStack]: playerFireTileStackLocator,
  [LocationType.PlayerFragmentTileStack]: playerFragmentStackLocator,
  [LocationType.PlayerReminder]: playerReminderLocator
}