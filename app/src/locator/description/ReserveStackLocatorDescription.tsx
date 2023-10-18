/** @jsxImportSource @emotion/react */
import { ItemContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { css } from '@emotion/react'
import Images from '../../images/Images'
import { reserveStackLocator } from '../ReserveStackLocator'
import { Location } from '@gamepark//rules-api'

export class ReserveStackLocatorDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  alwaysVisible = true
  location = { type: LocationType.ReserveStack }
  ratio = 12.5 / 27
  height = 32
  extraCss = css`
    background-image: url(${Images.ReserveHolder});
    background-size: contain;
    pointer-events: none;
  `

  getCoordinates(_location: Location, context: MaterialContext) {
    const stack = reserveStackLocator.getCoordinates({ location: { type: LocationType.Table, id: 1 }}, context as ItemContext)
    return {
      x: stack.x - 2.4,
      y: stack.y + 9.8,
      z: 0
    }
  }

}