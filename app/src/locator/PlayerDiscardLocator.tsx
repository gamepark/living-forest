import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { DeckLocator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'
import { PlayerDiscardDescription } from './description/PlayerDiscardDescription'

export class PlayerDiscardLocator extends DeckLocator {
  getLocations = ({ rules }: MaterialContext) => rules.players.map(player => ({ type: LocationType.PlayerDiscardStack, player }))

  locationDescription = new PlayerDiscardDescription()

  getCoordinates(location: Location, { rules, player }: MaterialContext) {
    const { x, y } = getPlayerBoardPositionOnTable(rules, location.player!, player)
    return { x: x + 15.5, y: y - 3 }
  }
}

export const playerDiscardLocator = new PlayerDiscardLocator()
