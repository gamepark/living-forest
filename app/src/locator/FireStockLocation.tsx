import { ItemContext, LineLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { reserveStackLocator } from './ReserveStackLocator'

export class FireStockLocation extends LineLocator {
  limit = 10

  delta = { x: -0.05, y: -0.05, z: 0.05}

  getCoordinates(item: MaterialItem, context: ItemContext) {
    const stackPosition = reserveStackLocator.getCoordinates({ ...item, location: { ...item.location, id: item.location.id - 1} }, context)
    const x = stackPosition.x - 6.1
    const y = stackPosition.y - 0.8
    return {
      x,
      y,
      z: 0.05
    }
  }
}