import { ItemContext, LineLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'
import { victoryTileDescription } from '../material/description/VictoryTileDescription'

export class VictoryTileAreaLocator extends LineLocator {
  delta = { x: 1, y: 0, z: 0.05 }

  getCoordinates(item: MaterialItem, { rules, player }: ItemContext): Coordinates {
    const forestCoordinates = getPlayerBoardPositionOnTable(rules, item, player)
    return {
      x: forestCoordinates.x - 14.5 + ((victoryTileDescription.width + 3) * item.location.id - 1),
      y: forestCoordinates.y + 8,
      z: 0.1,
    }
  }
}

export const victoryTileAreaLocator = new VictoryTileAreaLocator()