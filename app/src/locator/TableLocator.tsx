import { ItemContext, ItemLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { forestBoardDescription } from '../material/description/ForestBoardDescription'

export class TableLocator extends ItemLocator {
    getPosition(item: MaterialItem, context: ItemContext) {
      const { type, rules } = context
      switch (type) {
        case MaterialType.CircleOfSpiritBoard:
          const { players } = rules
          return {
            x: players.length < 4 ? 9: 30,
            y: players.length < 4 ? -15: 15,
            z: 0 }
        case MaterialType.ForestBoard: {
          const index = this.getBoardIndex(item, context)
          if (rules.players.length < 4) {
            return this.getPositionForIndex(index)
          }
          return this.getPositionForIndex([0, 2, 3, 5][index])
        }
        default:
          return { x: 0, y: 0, z: 0}
      }
    }

  getBoardIndex(item: MaterialItem, { player, rules }: ItemContext) {
    if (!player) return rules.players.indexOf(item.location.player!)
    if (player && player === item.location.player) return 0
    const remainingPlayers = rules.players.filter((p) => p !== player)
    if (remainingPlayers.length === 1) return 2
    return remainingPlayers.indexOf(item.location.player!) + 1
  }

  getPositionForIndex(index: number) {
    const baseX = -12
    const rightMargin = 13
    const playerIndex = index
    const playerX = (forestBoardDescription.width + rightMargin) * (playerIndex > 2? (playerIndex - 3): playerIndex )
    return { x: baseX + playerX, y: index < 3 ? 21.9 : -22.5, z: 0.1 }
  }
}

export const tableLocator = new TableLocator()