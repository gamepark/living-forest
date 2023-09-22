import { ComponentSize, TokenDescription } from '@gamepark/react-game'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import Images from '../../images/Images'

export class SpiritOfNatureStandeeDescription extends TokenDescription {
  height = 5.1

  images = {
    [SpiritOfNature.Autumn]: Images.autumnSpiritCircle,
    [SpiritOfNature.Summer]: Images.summerSpiritCircle,
    [SpiritOfNature.Spring]: Images.springSpiritCircle,
    [SpiritOfNature.Winter]: Images.winterSpiritCircle,
  }

  getSize(id: SpiritOfNature): ComponentSize {
    switch (id) {
      case SpiritOfNature.Autumn:
        return { width: this.height * 214 / 320, height: this.height }
      default:
        return { width: this.height * 214 / 320, height: this.height }
    }
  }

  rules = () => <p></p>
}

export const spiritOfNatureStandeeDescription = new SpiritOfNatureStandeeDescription()