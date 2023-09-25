import { DeckLocator, ItemContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { VaranDeckDescription } from './description/VaranDeckDescription'

export class VaranDeckLocator extends DeckLocator {
  limit = 10
  locationDescription = new VaranDeckDescription()

  delta = { x: -0.05, y: -0.05, z: 0.05 }

  getCoordinates(_item: MaterialItem, { rules: { players }}: ItemContext) {
    if (players.length < 4) {
      return { x: -17.5, y: -24, z: 0.05}
    }

    return { x: 75, y: -5, z: 0.05}
  }
}