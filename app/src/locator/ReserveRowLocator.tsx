import { ItemContext, LineLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../material/description/GuardianAnimalCardDescription'
import { reserveStackLocator } from './ReserveStackLocator'

export class ReserveRowLocator extends LineLocator {
  delta = { x: -0.05, y: -0.05, z: 0.1 }

  getCoordinates(item: MaterialItem, context: ItemContext): Coordinates {
    const stackPosition = reserveStackLocator.getCoordinates(item, context)
    const x = stackPosition.x + 1 + ((guardianAnimalCardDescription.width + 1) * (item.location.x! + 1))
    const y = stackPosition.y
    return {
      x,
      y,
      z: 0
    }
  }
}