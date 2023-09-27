import { ItemContext, ItemLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { getPositionOnTable } from '../utils/PositionOnTable'


export class TableLocator extends ItemLocator {
    getPosition(item: MaterialItem, context: ItemContext) {
      const { type, rules, player } = context
      return getPositionOnTable(type, rules, item, player)
    }
}

export const tableLocator = new TableLocator()