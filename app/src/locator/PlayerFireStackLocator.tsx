import { ItemContext, PileLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'
import { PlayerFireStackDescription } from './description/PlayerFireStackDescription'

export class PlayerFireStackLocator extends PileLocator {
  radius = 1.4
  locationDescription = new PlayerFireStackDescription()
  maxAngle = 20

  getCoordinates(item: MaterialItem, context: ItemContext): Coordinates {
    const { rules, player } = context
    const parentPosition = getPlayerBoardPositionOnTable(rules, item.location.player!, player)
    return {
      x: parentPosition.x + 15,
      y: parentPosition.y + 4.5,
      z: 0.1
    }
  }
}

export const playerFireTileStackLocator = new PlayerFireStackLocator()