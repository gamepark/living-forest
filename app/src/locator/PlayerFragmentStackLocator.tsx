import { ItemContext, PileLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'
import { PlayerFragmentStackDescription } from './description/PlayerFragmentStackDescription'

export class PlayerFragmentLocator extends PileLocator {
  radius = 1.4
  locationDescription = new PlayerFragmentStackDescription()
  maxAngle = 20

  getCoordinates(item: MaterialItem, context: ItemContext): Coordinates {
    const { rules, player } = context
    const parentPosition = getPlayerBoardPositionOnTable(rules, item.location.player!, player)
    return {
      x: parentPosition.x - 16,
      y: parentPosition.y + 4.5,
      z: 0.1
    }
  }
}

export const playerFragmentStackLocator = new PlayerFragmentLocator()