import { LineLocator } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { Location } from '@gamepark/rules-api'
import { Fire } from '@gamepark/living-forest/material/Fire'

export class FireOnCircleOfSpiritBoardLocator extends LineLocator {
  limit = 10
  parentItemType = MaterialType.CircleOfSpiritBoard

  delta = { x: -0.05, y: -0.05, z: 0}

  getPositionOnParent(location: Location) {
    switch (location.id) {
      case Fire.Fire2:
        return { x: 50, y: 35, z: 0}
      case Fire.Fire3:
        return { x: 40, y: 55, z: 0}
      case Fire.Fire4:
      default:
        return { x: 60, y: 55, z: 0}
    }
  }
}