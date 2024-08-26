import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { DeckLocator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { VaranDeckDescription } from './description/VaranDeckDescription'

class VaranDeckLocator extends DeckLocator {
  location = { type: LocationType.VaranDeck, id: 99 }
  locationDescription = new VaranDeckDescription()
  limit = 10

  getAreaCoordinates = (_: Location, { rules }: MaterialContext) => rules.players.length === 2 ? { x: -20, y: -24 } : { x: 18, y: 22.5 }

  getCoordinates(location: Location, context: MaterialContext) {
    const { x, y } = this.getAreaCoordinates(location, context)
    return { x: x + 2.1, y }
  }
}

export const varanDeckLocator = new VaranDeckLocator()
