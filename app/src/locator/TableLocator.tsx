import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { ItemContext, Locator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'

export class TableLocator extends Locator {
  getItemCoordinates(item: MaterialItem, { type, rules, player }: ItemContext) {
    if (type === MaterialType.CircleOfSpiritBoard) {
      const players = rules.players.length
      return { x: players === 2 ? 9 : 40, y: players === 2 ? -15 : 13 }
    } else {
      return getPlayerBoardPositionOnTable(rules, item.id!, player)
    }
  }
}

export const tableLocator = new TableLocator()