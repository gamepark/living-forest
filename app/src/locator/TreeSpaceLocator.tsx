/** @jsxImportSource @emotion/react */
import { ItemLocator } from '@gamepark/react-game'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/refacto/material/LocationType'
import { Location } from '@gamepark/rules-api'
import { TreeSpaceDescription } from './description/TreeSpaceDescription'

export class TreeSpaceLocator extends ItemLocator<SpiritOfNature, MaterialType, LocationType> {
  parentItemType = MaterialType.ForestBoard
  locationDescription = new TreeSpaceDescription()

  getPositionOnParent(location: Location) {
    return {
      x: 17 + location.x! * 15.2,
      y: 19 + location.y! * 24.2
    }
  }

  getParentItemId(location: Location): number | undefined {
    return location.player
  }
}
