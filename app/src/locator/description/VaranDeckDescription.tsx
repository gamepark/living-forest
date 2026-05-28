import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { LocationDescription } from '@gamepark/react-game'
import Images from '../../images/Images'

export class VaranDeckDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  width = 13.7
  height = 10.5
  image = Images.VaranHolder
}
