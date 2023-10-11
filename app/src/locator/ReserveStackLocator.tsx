import { DeckLocator, ItemContext } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../material/description/GuardianAnimalCardDescription'
import { ReserveStackLocatorDescription } from './description/ReserveStackLocatorDescription'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'

export class ReserveStackLocator extends DeckLocator {
  locationDescription = new ReserveStackLocatorDescription()
  limit = 20
  hidden = true
  delta = { x: -0.05, y: -0.05, z: 0.05 }

  getCoordinates(item: MaterialItem, { rules: { players } }: ItemContext): Coordinates {
    return getReserveStackCoordinates(item.location.id, players)
  }
}

export const reserveStackLocator = new ReserveStackLocator()

export const getReserveStackCoordinates = (level: number, players: SpiritOfNature[]) => {
  const playerCount = players.length
  const x = playerCount < 3 ? 36: (playerCount === 3? 32: 21)
  const y = playerCount < 3 ? -24: -32.9
  return {
    x,
    y: y + ((guardianAnimalCardDescription.height + 1.2) * (level - 1)),
    z: 0.05
  }
}