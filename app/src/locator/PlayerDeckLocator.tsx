import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { DeckLocator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'
import { PlayerDeckDescription } from './description/PlayerDeckDescription'

export class PlayerDeckLocator extends DeckLocator {
  getLocations = ({ player }: MaterialContext): Location[] => player ? [{ type: LocationType.PlayerDeckStack, player }] : []
  locationDescription = new PlayerDeckDescription()

  getAreaCoordinates(location: Location, context: MaterialContext) {
    const { x, y } = super.getAreaCoordinates(location, context)
    return { x, y, z: 15 }
  }

  getCoordinates(location: Location, { rules, player }: MaterialContext) {
    const { x, y } = getPlayerBoardPositionOnTable(rules, location.player!, player)
    return { x: x - 15.3, y: y - 3 }
  }
}

export const playerDeckLocator = new PlayerDeckLocator()
