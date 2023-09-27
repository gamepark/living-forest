import { ItemContext, LineLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { HelpLineLocatorDescription } from './description/HelpLineLocatorDescription'
import { getPositionOnTable } from '../utils/PositionOnTable'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { guardianAnimalCardDescription } from '../material/description/GuardianAnimalCardDescription'

export class HelpLineLocator extends LineLocator {
  locationDescription = new HelpLineLocatorDescription()
  delta = { x: 2, y: 0, z: 0.1 }
  getDeltaMax(): Partial<Coordinates> {
    return { x: 33.6 }
  }

  getCoordinates(item: MaterialItem, context: ItemContext): Coordinates {
    const { rules, player } = context
    const boardPosition = getPositionOnTable(MaterialType.ForestBoard, rules, item, player)

    return {
      x: boardPosition.x - 19 + guardianAnimalCardDescription.width / 2,
      y: boardPosition.y - 13,
      z: 0.1
    }
  }
}