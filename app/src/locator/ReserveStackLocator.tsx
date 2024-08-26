import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { DeckLocator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../material/description/GuardianAnimalCardDescription'
import { ReserveStackLocationDescription } from './description/ReserveStackLocationDescription'

export class ReserveStackLocator extends DeckLocator {
  location = { type: LocationType.ReserveStack }
  locationDescription = new ReserveStackLocationDescription()

  getAreaCoordinates(_location: Location, context: MaterialContext) {
    const { x, y } = reserveStackLocator.getCoordinates({ type: LocationType.Table, id: 1 }, context)
    return { x: x - 2.4, y: y + 9.8 }
  }

  getCoordinates(location: Location, { rules }: MaterialContext) {
    const players = rules.players.length
    const x = players === 2 ? 36 : players === 3 ? 32 : 21
    const y = players === 2 ? -24 : -32.9
    return { x, y: y + (guardianAnimalCardDescription.height + 1.2) * (location.id - 1) }
  }
}

export const reserveStackLocator = new ReserveStackLocator()
