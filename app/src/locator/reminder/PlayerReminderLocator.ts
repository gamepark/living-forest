import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { LocationContext, Locator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { getIndexForPlayers, getPlayerBoardPositionOnTable } from '../../utils/PositionOnTable'
import { PlayerReminderDescription } from './PlayerReminderDescription'

export class PlayerReminderLocator extends Locator {
  getLocations = (context: MaterialContext) => context.rules.players.map(player => ({ type: LocationType.PlayerReminder, player }))
  locationDescription = new PlayerReminderDescription()

  getCoordinates(location: Location, { rules, player }: LocationContext) {
    const { x, y } = getPlayerBoardPositionOnTable(rules, location.player!, player)
    const players = rules.players.length
    const index = getIndexForPlayers(location.player!, rules, player)
    return {
      x: players === 2 ? x + 11 : x - 6,
      y: index === 0 || index === 3 ? y - 18.4 : y + 11
    }
  }

}

export const playerReminderLocator = new PlayerReminderLocator()
