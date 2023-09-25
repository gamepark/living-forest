/** @jsxImportSource @emotion/react */
import { LocationDescription } from '@gamepark/react-game'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/refacto/material/LocationType'
import { Location } from '@gamepark/rules-api'

export class StandeeOnCircleOfSpiritBoardDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  width = 4.5
  height = 3.8
  borderRadius = 1

  coordinates = { x: -0.2, y: 0.2, z: 0}

  getRotation(location: Location<SpiritOfNature, LocationType>): number {
    return ((location.x! + 8.5) * 360 / 12)
  }

}