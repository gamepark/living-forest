import { ItemContext, LineLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'

import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'
import { guardianAnimalCardDescription } from '../material/description/GuardianAnimalCardDescription'
import { HelpLineDescription } from './description/HelpLineDescription'

export class HelpLineLocator extends LineLocator {
  locationDescription = new HelpLineDescription()
  delta = { x: 2, y: 0, z: 0.1 }
  getDeltaMax(): Partial<Coordinates> {
    return { x: 33.6 }
  }

  getCoordinates(item: MaterialItem, context: ItemContext): Coordinates {
    const { rules, player } = context
    const boardPosition = getPlayerBoardPositionOnTable(rules, item.location.player!, player)

    return {
      x: boardPosition.x - 19 + guardianAnimalCardDescription.width / 2,
      y: boardPosition.y - 13,
      z: 0.1
    }
  }
}