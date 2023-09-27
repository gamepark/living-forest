/** @jsxImportSource @emotion/react */
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/refacto/material/LocationType'
import { css } from '@emotion/react'
import { Location } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../../material/description/GuardianAnimalCardDescription'
import { getPositionOnTable } from '../../utils/PositionOnTable'

export class HelpLineLocatorDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  alwaysVisible = true
  getLocations({ player }: MaterialContext) {
    if (!player) return []
    return [{ type: LocationType.HelpLine, player: player }]
  }

  width = 38
  height = guardianAnimalCardDescription.getSize(0).height
  //coordinates = { x: 20, y: 0, z: 0 }
  extraCss = css`
    background-color: rgba(0, 128, 0, 0.5);
    border-radius: 0.4em;
  `

  getCoordinates(location: Location, context: MaterialContext) {
    const { rules, player } = context
    const boardPosition = getPositionOnTable(MaterialType.ForestBoard, rules, { location }, player)

    return {
      x: boardPosition.x,
      y: boardPosition.y - 13,
      z: 0
    }
  }

}