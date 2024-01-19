/** @jsxImportSource @emotion/react */
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { css } from '@emotion/react'
import { isMoveItemType, isSameLocationArea, Location, MaterialMove } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../../material/description/GuardianAnimalCardDescription'
import { getPlayerBoardPositionOnTable } from '../../utils/PositionOnTable'
import { HelpLineRules } from './HelpLineRules'

export class HelpLineDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  alwaysVisible = true
  getLocations({ rules: { players } }: MaterialContext) {
    return players.map((p) => ({ type: LocationType.HelpLine, player: p }))
  }

  width = 38
  height = guardianAnimalCardDescription.height
  extraCss = css`
    background-color: rgba(0, 128, 0, 0.5);
    border-radius: 0.4em;
  `

  getCoordinates(location: Location, context: MaterialContext) {
    const { rules, player } = context
    const boardPosition = getPlayerBoardPositionOnTable(rules, { location }, player)

    return {
      x: boardPosition.x,
      y: boardPosition.y - 13,
      z: 0
    }
  }

  canShortClick(move: MaterialMove, location: Location, context: MaterialContext): boolean {
    if (isMoveItemType(MaterialType.GuardianAnimalCard)(move)) {
      return isSameLocationArea(move.location, location)
    }

    return super.canShortClick(move, location, context)
  }

  help = HelpLineRules

}
