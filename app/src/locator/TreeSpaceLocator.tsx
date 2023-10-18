/** @jsxImportSource @emotion/react */
import { ItemLocator } from '@gamepark/react-game'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { Location } from '@gamepark/rules-api'
import { TreeSpaceDescription } from './description/TreeSpaceDescription'

export class TreeSpaceLocator extends ItemLocator<SpiritOfNature, MaterialType, LocationType> {
  parentItemType = MaterialType.ForestBoard
  locationDescription = new TreeSpaceDescription()

  getPositionOnParent(location: Location) {
    return {
      x: 17.5 + location.x! * 14.8,
      y: 20.5 + location.y! * 23.8
    }
  }

  getParentItemId(location: Location): number | undefined {
    return location.player
  }
}
