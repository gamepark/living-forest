import { Locator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'

export class SacredTreeLocator extends Locator {
  getCoordinates(location: Location, context: MaterialContext) {
    const { rules, player } = context
    const parentPosition = getPlayerBoardPositionOnTable(rules, location.player!, player)
    return { x: parentPosition.x + 10.9, y: parentPosition.y - 7.5, z: 0.1 }
  }
}

export const sacredTreeLocator = new SacredTreeLocator()