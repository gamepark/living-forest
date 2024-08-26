import { DeckLocator, DropAreaDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { varanDeckLocator } from './VaranDeckLocator'

export class FragmentStockLocator extends DeckLocator {
  locationDescription = new DropAreaDescription({ width: 5, height: 5, borderRadius: 2.5 })
  limit = 10

  getAreaCoordinates(_location: Location, { rules: { players } }: MaterialContext) {
    if (players.length < 3) {
      return { x: -23.6, y: -23.6 }
    }
    return { x: 69.4, y: -4.5 }
  }

  getCoordinates(location: Location, context: MaterialContext) {
    const { x, y } = varanDeckLocator.getAreaCoordinates(location, context)
    return { x: x - 3.6, y: y + 0.7 }
  }
}
