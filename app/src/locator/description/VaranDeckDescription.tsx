/** @jsxImportSource @emotion/react */
import { ItemContext, LocationDescription } from '@gamepark/react-game'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { css } from '@emotion/react'
import Images from '../../images/Images'
import { Location } from '@gamepark/rules-api'

export class VaranDeckDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  alwaysVisible = true
  location = { type: LocationType.VaranDeck, id: 99 }
  ratio = 600 / 455
  height = 10.5
  extraCss = css`
    background-image: url(${Images.VaranHolder});
    background-size: contain;
    pointer-events: none;
  `

  getCoordinates(_location: Location, { rules: { players }}: ItemContext) {
    return getVaranDeckHolderCoordinates(players)
  }

}

export const getVaranDeckHolderCoordinates = (players: SpiritOfNature[]) => {
  if (players.length < 3) {
    return { x: -20, y: -24, z: 0}
  }

  return { x: 18, y: 22.5, z: 0}
}