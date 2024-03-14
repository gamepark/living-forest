/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { getIndexForPlayers, getPlayerBoardPositionOnTable } from '../../utils/PositionOnTable'
import { PlayerReminder } from './PlayerReminder'

export class PlayerReminderDescription extends LocationDescription {
  width = 25
  height = 4.6
  borderRadius = 1
  alwaysVisible = true

  getLocations(context: MaterialContext): Location[] {
    return context.rules.players.map((player) => ({
      type: LocationType.PlayerReminder,
      player
    }))
  }

  extraCss = css`pointer-events: none`

  getCoordinates(location: Location, context: LocationContext) {
    const { rules, player } = context
    const position = getPlayerBoardPositionOnTable(rules, location.player!, player)
    const index = getIndexForPlayers(location.player!, rules, player)

    if (index === 0 || index === 3) {
      position.y -= 18.4
    } else {
      position.y += 11
    }

    if (rules.players.length === 2) {
      position.x += 11
    } else {
      position.x -= 6
    }

    return position
  }

  content = PlayerReminder
}
