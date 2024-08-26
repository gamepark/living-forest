import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { Locator } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'

export class FireOnCircleOfSpiritBoardLocator extends Locator {
  parentItemType = MaterialType.CircleOfSpiritBoard

  getPositionOnParent({ x = 0 }: Location) {
    const angle = x * Math.PI / 3
    const radius = x === 0 ? 0 : 14
    return {
      x: 48 + radius * Math.sin(angle),
      y: 50 + radius * Math.cos(angle) - 1.6
    }
  }

}