import { DeckLocator, ItemContext } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { PlayerDiscardDescription } from './description/PlayerDiscardDescription'
import { getPositionOnTable } from '../utils/PositionOnTable'

export class PlayerDiscardLocator extends DeckLocator {
  delta = { x: -0.03, y: -0.03, z: 0.1 }
  locationDescription = new PlayerDiscardDescription()

  getCoordinates(item: MaterialItem, context: ItemContext): Coordinates {
    const { rules, player } = context
    const parentPosition = getPositionOnTable(MaterialType.ForestBoard, rules, item, player)

    return {
      x: parentPosition.x + 15.2,
      y: parentPosition.y - 3,
      z: 0.1
    }
  }
}

export const playerDiscardLocator = new PlayerDiscardLocator()