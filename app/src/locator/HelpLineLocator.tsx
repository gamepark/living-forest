import { ItemContext, LineLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../material/description/GuardianAnimalCardDescription'
import { playerDeckLocator } from './PlayerDeckLocator'
import { HelpLineLocatorDescription } from './description/HelpLineLocatorDescription'

export class HelpLineLocator extends LineLocator {
  locationDescription = new HelpLineLocatorDescription()
  delta = { x: 2, y: 0, z: 0.1 }
  getDeltaMax(): Partial<Coordinates> {
    return { x: 25.5 }
  }

  getCoordinates(item: MaterialItem, context: ItemContext): Coordinates {
    const deckPosition = playerDeckLocator.getCoordinates(item, context)
    const x = deckPosition.x + 0.8 + guardianAnimalCardDescription.width
    const y = deckPosition.y
    return {
      x,
      y,
      z: context.material[context.type].thickness
    }
  }
}