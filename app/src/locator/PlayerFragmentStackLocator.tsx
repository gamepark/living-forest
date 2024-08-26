import { DropAreaDescription, MaterialContext, PileLocator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'

export class PlayerFragmentLocator extends PileLocator {
  locationDescription = new DropAreaDescription({ width: 5, height: 5, borderRadius: 2.5 })
  radius = 1.4
  maxAngle = 20

  getCoordinates(location: Location, { rules, player }: MaterialContext) {
    const { x, y } = getPlayerBoardPositionOnTable(rules, location.player!, player)
    return { x: x - 16, y: y + 4.5 }
  }
}

export const playerFragmentStackLocator = new PlayerFragmentLocator()