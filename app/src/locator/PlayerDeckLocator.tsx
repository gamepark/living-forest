import { DeckLocator, ItemContext } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { tableLocator } from './TableLocator'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { PlayerDeckDescription } from './description/PlayerDeckDescription'

export class PlayerDeckLocator extends DeckLocator {

  locationDescription = new PlayerDeckDescription()
  hidden = true

  delta = { x: -0.05, y: -0.05, z: 0.1 }

  getCoordinates(item: MaterialItem, context: ItemContext): Coordinates {
    const parentPosition = tableLocator.getPosition(
    { location: item.location },
      { ...context, type: MaterialType.ForestBoard}
    )

    return {
      x: parentPosition.x - 11,
      y: parentPosition.y - 13.5,
      z: 0
    }
  }
}

export const playerDeckLocator = new PlayerDeckLocator()