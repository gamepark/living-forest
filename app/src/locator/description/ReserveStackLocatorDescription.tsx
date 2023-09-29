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
  ratio = 12 / 27
  height = 31
  coordinates = { x: 20, y: 0, z: 0 }
  extraCss = css`
    background-image: url(${Images.ReserveHolder});
    background-size: contain;
    pointer-events: none;
  `

  getCoordinates(_location: Location, context: MaterialContext) {
    const stack = reserveStackLocator.getCoordinates({ location: { type: LocationType.Table, id: 1 }}, context as ItemContext)
    return {
      x: stack.x - 2.5,
      y: stack.y + 9.8,
      z: 0
    }
  }

}