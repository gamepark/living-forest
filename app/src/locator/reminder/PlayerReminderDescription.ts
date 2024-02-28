/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { getBoardIndex, getPlayerBoardPositionOnTable } from '../../utils/PositionOnTable'
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
    const position = getPlayerBoardPositionOnTable(rules, { location }, player)
    const boardIndex = getBoardIndex({location}, rules, player)

    if (boardIndex < 2) {
      position.y -= 18.4
    } else {
      position.y += 11
    }

    position.x -= 6

    return position
  }

  content = PlayerReminder
}
