import { LocationDescription } from '@gamepark/react-game/dist/components/material/locations/LocationDescription'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/refacto/material/LocationType'
import { Location } from '@gamepark/rules-api/dist/material/location/Location'
import { MaterialContext } from '@gamepark/react-game/dist/locators/ItemLocator'
import { fragmentStockCoordinate } from './FragmentStockLocation'
import { fragmentTileDescription } from '../material/description/FragmentTileDescription'


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