import { ItemContext, LineLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { getPositionOnTable } from '../utils/PositionOnTable'

export class PlayerAreaLocation extends LineLocator {
  delta = { x: -0.05, y: 0, z: 0.05}

  getCoordinates(item: MaterialItem, context: ItemContext): Coordinates {
    const { rules, player } = context
    const parentPosition = getPositionOnTable(MaterialType.ForestBoard, rules, item, player)

    switch (item.location.id) {
      case MaterialType.SacredTree:
        return { x: parentPosition.x + 10.7, y: parentPosition.y - 7.5, z: 0.1 }
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