/** @jsxImportSource @emotion/react */
import { ItemContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { css } from '@emotion/react'
import Images from '../../images/Images'
import { kodamaStackLocator } from '../KodamaStackLocator'
import { Location } from '@gamepark//rules-api'

export class KodamaStackLocatorDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  alwaysVisible = true
  location = { type: LocationType.KodamaStack }
  ratio = 827 / 377
  height = 12.5
  extraCss = css`
    background-image: url(${Images.KodamaHolder});
    background-size: contain;
    pointer-events: none;
  `

  getCoordinates(_location: Location, context: MaterialContext) {
    const stack = kodamaStackLocator.getCoordinates({ location: { type: LocationType.Table, id: 1 } }, context as ItemContext)
    return {
      x: stack.x + 9,
      y: stack.y + 0.7,
      z: 0
    }
  }

}