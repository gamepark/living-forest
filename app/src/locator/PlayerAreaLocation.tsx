import { ItemContext, LineLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { playerDeckLocator } from './PlayerDeckLocator'

export class PlayerAreaLocation extends LineLocator {
  delta = { x: -0.2, y: 0, z: 0.05}

  getCoordinates(item: MaterialItem, context: ItemContext): Coordinates {
    const parentPosition = playerDeckLocator.getPosition(
    { location: item.location },
      context
    )

    switch (item.location.id) {
      case MaterialType.SacredTree:
        return { x: parentPosition.x + 22, y: parentPosition.y + 6, z: 0.1 }
      case MaterialType.FireTile:
        return { x: parentPosition.x - 7, y: parentPosition.y + 1, z: 0 }
      default:
        return { x: parentPosition.x - 7, y: parentPosition.y - 3, z: 0 }
    }
  }
}

export const playerAreaLocation = new PlayerAreaLocation()