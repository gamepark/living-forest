import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { fragmentStockCoordinate } from '../FragmentStockLocation'
import { fragmentTileDescription } from '../../material/description/FragmentTileDescription'
import { ItemContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location, MaterialMove } from '@gamepark/rules-api'


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

  canDrop(move: MaterialMove, location: Location, context: ItemContext): boolean {
    return super.canDrop(move, location, context) && context.type === MaterialType.FragmentTile
  }
}

export const fragmentStockLocation = { type: LocationType.FragmentStack }