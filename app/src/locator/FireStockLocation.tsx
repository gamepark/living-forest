import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { DeckLocator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { reserveStackLocator } from './ReserveStackLocator'

export class FireStockLocation extends DeckLocator {
  limit = 10

  getCoordinates(location: Location, context: MaterialContext) {
    const { x, y } = reserveStackLocator.getCoordinates({type: LocationType.ReserveStack, id: location.id - 1}, context)
    return { x: x - 6, y: y - 0.8 }
  }
}