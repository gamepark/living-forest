import { ItemLocator } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { Location, XYCoordinates } from '@gamepark/rules-api'

export class FireOnCircleOfSpiritBoardLocator extends ItemLocator {
  parentItemType = MaterialType.CircleOfSpiritBoard

  getPosition() {
    return { x: 0, y: -0.5, z: 0}
  }

  getPositionOnParent(location: Location): XYCoordinates {
    const angle = (location.x ?? 0) * 360 / 6
    const radius = !location.x? 0:  14
    const x = 48 + radius * Math.sin(angle * Math.PI / 180)
    const y = 50 + radius * Math.cos(angle * Math.PI / 180)
    return { x, y}
  }
}