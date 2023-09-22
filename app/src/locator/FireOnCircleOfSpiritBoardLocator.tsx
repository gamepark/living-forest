import { ItemLocator } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { MaterialItem } from '@gamepark/rules-api'
import { circleOfSpiritBoardDescription } from '../material/description/CircleOfSpiritBoardDescription'

export class FireOnCircleOfSpiritBoardLocator extends ItemLocator {
  parentItemType = MaterialType.CircleOfSpiritBoard

  getPosition(item: MaterialItem) {
    const angle = (item.location.x ?? 0) * 360 / 6
    console.log(item.location.x, angle)
    const radius = !item.location.x? 0:  4
    const x = circleOfSpiritBoardDescription.width * 0.5 + radius * Math.sin(angle * Math.PI / 180) - 0.3
    const y = circleOfSpiritBoardDescription.width * 0.5 + radius * Math.cos(angle * Math.PI / 180) + 0.5
    return { x, y: y - 1, z: 1}
  }
}