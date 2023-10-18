import { ItemContext, ItemLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'

export class SacredTreeLocator extends ItemLocator {
  getPosition(item: MaterialItem, context: ItemContext): Coordinates {
    const { rules, player } = context
    const parentPosition = getPlayerBoardPositionOnTable(rules, item, player)
    return { x: parentPosition.x + 10.9, y: parentPosition.y - 7.5, z: 0.1 }
  }
}

export const sacredTreeLocator = new SacredTreeLocator()