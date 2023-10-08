import { ComponentSize, ItemContext, TokenDescription } from '@gamepark/react-game'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import Images from '../../images/Images'
import { MaterialMove, isCustomMoveType } from '@gamepark/rules-api'
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { SpiritOfNatureStandeeRules } from './SpiritOfNatureStandeeRules'

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

  canDrag(move: MaterialMove, context: ItemContext): boolean {
    const { player, index, rules } = context
    if (!isCustomMoveType(CustomMoveType.MoveOnCircleOfSpirit)(move)) return super.canDrag(move, context)
    const standee = rules.material(MaterialType.SpiritOfNatureStandee).getItem(index)!
    return standee.id === player;
  }

  rules = SpiritOfNatureStandeeRules
}

export const spiritOfNatureStandeeDescription = new SpiritOfNatureStandeeDescription()