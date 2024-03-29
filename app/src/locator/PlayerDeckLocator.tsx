import { DeckLocator, ItemContext } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'
import { PlayerDeckDescription } from './description/PlayerDeckDescription'

export class PlayerDeckLocator extends DeckLocator {
  locationDescription = new PlayerDeckDescription()

  delta = { x: -0.05, y: -0.05, z: 0.1 }

  getCoordinates(item: MaterialItem, context: ItemContext): Coordinates {
    const { rules, player } = context
    const parentPosition = getPlayerBoardPositionOnTable(rules, item.location.player!, player)

    return {
      x: parentPosition.x - 15.3,
      y: parentPosition.y - 3,
      z: 0.1
    }
  }
}

export const playerDeckLocator = new PlayerDeckLocator()
