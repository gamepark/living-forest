import { DeckLocator, ItemContext } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { PlayerDiscardDescription } from './description/PlayerDiscardDescription'
import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'

export class PlayerDiscardLocator extends DeckLocator {
  limit = 10
  hidden = false
  delta = { x: -0.03, y: -0.03, z: 0.1 }
  locationDescription = new PlayerDiscardDescription()

  getCoordinates(item: MaterialItem, context: ItemContext): Coordinates {
    const { rules, player } = context
    const parentPosition = getPlayerBoardPositionOnTable(rules, item, player)

    return {
      x: parentPosition.x + 15.5,
      y: parentPosition.y - 3,
      z: 0.1
    }
  }
}

export const playerDiscardLocator = new PlayerDiscardLocator()