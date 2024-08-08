import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { fragmentTileDescription } from '../../material/description/FragmentTileDescription'
import { fragmentStockCoordinate } from '../FragmentStockLocation'


export class FragmentStockDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  location = fragmentStockLocation
  width = fragmentTileDescription.width + 2
  ratio = 1
  borderRadius = this.width / 2

  getCoordinates(_location: Location, { rules: { players }}: MaterialContext) {
    const stock = fragmentStockCoordinate(players)
    return {
      x: stock.x - 0.1,
      y: stock.y - 0.1,
      z: 20
    }
  }
}

export const fragmentStockLocation = { type: LocationType.FragmentStack }