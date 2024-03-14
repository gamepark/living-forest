/** @jsxImportSource @emotion/react */
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { Location } from '@gamepark/rules-api'
import { getPlayerBoardPositionOnTable } from '../../utils/PositionOnTable'
import { css } from '@emotion/react'

export class PlayerFireStackDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  //alwaysVisible = true
  extraCss = css`background-color: rgba(255, 255, 255, 0.3)`
  width = 5
  height = 5
  borderRadius = 3

  getLocations({ player }: MaterialContext): Location[] {
    if (!player) return []
    return [{ type: LocationType.PlayerFireTileStack, player }]
  }

  getCoordinates(location: Location, context: MaterialContext) {
    const { rules, player } = context
    const parentPosition = getPlayerBoardPositionOnTable(rules, location.player!, player)
    return {
      x: parentPosition.x + 15,
      y: parentPosition.y + 4.5,
      z: 0.1
    }
  }
}
