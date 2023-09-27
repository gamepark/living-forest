import { DeckLocator, ItemContext } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { PlayerDeckDescription } from './description/PlayerDeckDescription'
import { getPositionOnTable } from '../utils/PositionOnTable'

export class PlayerDeckLocator extends DeckLocator {

  locationDescription = new PlayerDeckDescription()
  hidden = true

  delta = { x: -0.05, y: -0.05, z: 0.1 }

  getCoordinates(item: MaterialItem, context: ItemContext): Coordinates {
    const { rules, player } = context
    const parentPosition = getPositionOnTable(MaterialType.ForestBoard, rules, item, player)

    return {
      x: parentPosition.x - 15.5,
      y: parentPosition.y - 3,
      z: 0.1
    }
  }
}

export const playerDeckLocator = new PlayerDeckLocator()