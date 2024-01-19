/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
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

  help = HelpLineRules

}
