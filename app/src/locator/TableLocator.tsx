import { ItemContext, ItemLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'


export class TableLocator extends ItemLocator {
    getPosition(item: MaterialItem, context: ItemContext) {
      const { type, rules, player } = context
      if (type === MaterialType.CircleOfSpiritBoard) {
        const { players } = rules
        return {
          x: players.length < 3 ? 9 : 40,
          y: players.length < 3 ? -15 : 13,
          z: 0.01,
        }
      }

      return getPlayerBoardPositionOnTable(rules, item, player)
    }
}

export const tableLocator = new TableLocator()