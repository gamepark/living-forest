/** @jsxImportSource @emotion/react */
import { ItemContext, LocationDescription } from '@gamepark/react-game'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/refacto/material/LocationType'
import { css } from '@emotion/react'
import Images from '../images/Images'
import { Location } from '@gamepark/rules-api'

export class VaranDeckLocatorDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  alwaysVisible = true
  location = { type: LocationType.VaranDeck, id: 99 }
  ratio = 600 / 451
  height = 9.9
  coordinates = { x: 20, y: 0, z: 0 }
  extraCss = css`
    background-image: url(${Images.VaranHolder});
    background-size: contain;
    pointer-events: none;
  `

  getCoordinates(_location: Location, { rules: { players }}: ItemContext) {
    if (players.length < 4) {
      return { x: -20, y: -24.2, z: 0}
    }

    return { x: 73, y: -5.1, z: 0}
  }

}