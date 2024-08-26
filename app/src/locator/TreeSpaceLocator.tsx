/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { Locator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { forestBoardDescription } from '../material/description/ForestBoardDescription'
import { TreeSpaceDescription } from './description/TreeSpaceDescription'

export class TreeSpaceLocator extends Locator<SpiritOfNature, MaterialType, LocationType> {
  parentItemType = MaterialType.ForestBoard
  locationDescription = new TreeSpaceDescription()
  getPositionOnParent = ({ x = 0, y = 0 }: Location) => ({ x: 17.5 + x * 14.8, y: 20.5 + y * 23.8 })
  getParentItem = (location: Location) => forestBoardDescription.getPlayerBoard(location.player!)
}
