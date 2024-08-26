import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { isItemContext, ItemContext, Locator, MaterialContext } from '@gamepark/react-game'
import { Location, MaterialItem, XYCoordinates } from '@gamepark/rules-api'
import { CircleOfSpiritRockDescription } from './description/CircleOfSpiritRockDescription'

export class StandeeOnCircleOfSpiritBoardLocator extends Locator {
  locationDescription = new CircleOfSpiritRockDescription()
  parentItemType = MaterialType.CircleOfSpiritBoard
  rotationUnit = 'rad'

  getPositionOnParent({ x = 0 }: Location): XYCoordinates {
    const angle = -(x + 8.5) * Math.PI / 6
    const radius = 32.5
    return {
      x: 50 + radius * Math.sin(angle) - 0.6,
      y: 50 + radius * Math.cos(angle)
    }
  }

  getRotateZ({ x = 0 }: Location<number, number>, context: MaterialContext) {
    if (isItemContext(context)) return 0
    return (x + 8.5) * Math.PI / 6
  }

  getItemCoordinates(item: MaterialItem, context: ItemContext) {
    const { x = 0, y = 0, z } = super.getItemCoordinates(item, context)
    return { x: x, y: y - 2, z }
  }
}