import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { DeckLocator, ItemContext } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../material/description/GuardianAnimalCardDescription'
import { KodamaStackLocatorDescription } from './description/KodamaStackLocatorDescription'

export class KodamaStackLocator extends DeckLocator {
  locationDescription = new KodamaStackLocatorDescription()
  limit = 6
  delta = { x: -0.05, y: -0.05, z: 0.05 }

  getCoordinates(item: MaterialItem, { rules: { players } }: ItemContext): Coordinates {
    return getKodamaStackCoordinates((3 - item.location.id) + 1, players)
  }
}

export const kodamaStackLocator = new KodamaStackLocator()

export const getKodamaStackCoordinates = (level: number, players: SpiritOfNature[]) => {
  const playerCount = players.length
  const x = playerCount < 3 ? 26 : (playerCount === 3 ? 58 : 21)
  const y = playerCount < 3 ? 14 : -32.9
  return {
    x: x + ((guardianAnimalCardDescription.width + 0.9) * (level - 1)),
    y,
    z: 0.05
  }
}
