import { ItemContext, LineLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'

export class FragmentStockLocator extends LineLocator {
  limit = 10
  delta = { x: -0.05, y: -0.05, z: 0.01 }

  getCoordinates(_item: MaterialItem, { rules: { players }}: ItemContext) {
    if (players.length < 4) {
      return { x: -23.5, y: -23.5, z: 0}
    }

    return { x: 69.5, y: -4.4, z: 0}
  }
}