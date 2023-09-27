import { ItemContext, LineLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { getIndexForPlayers, getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'
import { victoryTileDescription } from '../material/description/VictoryTileDescription'

export class PlayerAreaLocation extends LineLocator {
  delta = { x: -0.05, y: 0, z: 0.05}

  getDelta(_item: MaterialItem, context: ItemContext) {
    if (context.type === MaterialType.VictoryTile) {
      return { x: -(victoryTileDescription.width), y: 0, z: 0.05}
    }

    return super.getDelta(_item, context)
  }

  getCoordinates(item: MaterialItem, context: ItemContext): Coordinates {
    const { rules, player } = context
    const parentPosition = getPlayerBoardPositionOnTable(rules, item, player)

    switch (item.location.id) {
      case MaterialType.SacredTree:
        return { x: parentPosition.x + 10.7, y: parentPosition.y - 7.5, z: 0.1 }
      case MaterialType.VictoryTile:
        const index = getIndexForPlayers(item, rules, player)
        console.log(index)
        if (index >= 3) {
          return { x: parentPosition.x + 17 - (item.location.x! * (victoryTileDescription.width + 0.5)), y: parentPosition.y + 8, z: 0.1 }
        }
        return { x: parentPosition.x + 17 - (item.location.x! * (victoryTileDescription.width + 0.5)), y: parentPosition.y - 19.2, z: 0.1 }
      case MaterialType.FireTile:
        return {
          x: parentPosition.x - 15,
          y: parentPosition.y + 4,
          z: 0.1
        }
      default:
        return {
          x: parentPosition.x - 18,
          y: parentPosition.y + 4,
          z: 0.1
        }
    }
  }
}

export const playerAreaLocation = new PlayerAreaLocation()