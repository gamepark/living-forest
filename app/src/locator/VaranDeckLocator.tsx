import { DeckLocator, ItemContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { getVaranDeckHolderCoordinates, VaranDeckDescription } from './description/VaranDeckDescription'

export class VaranDeckLocator extends DeckLocator {
  limit = 10
  locationDescription = new VaranDeckDescription()

  delta = { x: -0.05, y: -0.05, z: 0.05 }

  getCoordinates(_item: MaterialItem, { rules: { players }}: ItemContext) {
    const holder = getVaranDeckHolderCoordinates(players)
    return {
      x: holder.x + 2.1,
      y: holder.y,
      z: 0.05
    }
  }
}
