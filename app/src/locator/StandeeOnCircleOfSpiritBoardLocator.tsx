import { ItemLocator } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { MaterialItem } from '@gamepark/rules-api'
import { circleOfSpiritBoardDescription } from '../material/description/CircleOfSpiritBoardDescription'

export class StandeeOnCircleOfSpiritBoardLocator extends ItemLocator {
  parentItemType = MaterialType.CircleOfSpiritBoard

  getPosition(item: MaterialItem) {
    const angle = (item.location.x! + 0.5) * 360 / 12
    const radius = 10.5
    const x = circleOfSpiritBoardDescription.width * 0.5 + radius * Math.sin(angle * Math.PI / 180)
    const y = circleOfSpiritBoardDescription.width * 0.5 + radius * Math.cos(angle * Math.PI / 180)
    return { x, y: y - 1, z: 1}
  }
}