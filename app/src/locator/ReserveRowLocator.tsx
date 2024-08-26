import { ListLocator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../material/description/GuardianAnimalCardDescription'
import { reserveStackLocator } from './ReserveStackLocator'

export class ReserveRowLocator extends ListLocator {
  gap = { x: guardianAnimalCardDescription.width + 1 }

  getCoordinates(location: Location, context: MaterialContext) {
    const { x, y } = reserveStackLocator.getCoordinates(location, context)
    return { x: x + guardianAnimalCardDescription.width + 2, y }
  }
}