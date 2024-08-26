/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { LocationDescription } from '@gamepark/react-game'
import Images from '../../images/Images'

export class ReserveStackLocationDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  width = 14.7
  height = 32
  image = Images.ReserveHolder
}