import { DeckLocator, ItemContext } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../material/description/GuardianAnimalCardDescription'
import { ReserveStackLocatorDescription } from './ReserveStackLocatorDescription'

export class ReserveStackLocator extends DeckLocator {
  locationDescription = new ReserveStackLocatorDescription()
  limit = 20
  hidden = true
  delta = { x: -0.05, y: -0.05, z: 0.05 }

  getCoordinates(item: MaterialItem, { rules: { players } }: ItemContext): Coordinates {
    const x = players.length < 4 ? 36: 17
    const y = players.length < 4 ? -24: -25
    return {
      x,
      y: y + ((guardianAnimalCardDescription.getSize(0).height + 1.2) * (item.location.id - 1)),
      z: 0.05
    }
  }
}

export const reserveStackLocator = new ReserveStackLocator()