import { DeckLocator, ItemContext } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { PlayerDeckDescription } from './description/PlayerDeckDescription'
import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'

export class PlayerDeckLocator extends DeckLocator {
  limit = 10
  locationDescription = new PlayerDeckDescription()
  hidden = true

  delta = { x: -0.05, y: -0.05, z: 0.1 }

  getCoordinates(item: MaterialItem, context: ItemContext): Coordinates {
    const { rules, player } = context
    const parentPosition = getPlayerBoardPositionOnTable(rules, item, player)

    return {
      x: parentPosition.x - 15.3,
      y: parentPosition.y - 3,
      z: 0.1
    }
  }
}

export const playerDeckLocator = new PlayerDeckLocator()