import { ItemLocator } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { Location, XYCoordinates } from '@gamepark/rules-api'
import { StandeeOnCircleOfSpiritBoardDescription } from './StandeeOnCircleOfSpiritBoardDescription'

export class StandeeOnCircleOfSpiritBoardLocator extends ItemLocator {
  locationDescription = new StandeeOnCircleOfSpiritBoardDescription()
  parentItemType = MaterialType.CircleOfSpiritBoard

  getPosition() {
    return { x: 0, y: -2, z: 0}
  }

  getPositionOnParent(location: Location): XYCoordinates {
    const angle = (location.x! + 8.5) * 360 / 12
    const radius = 33.5
    const x = 50 + radius * Math.sin(-angle * Math.PI / 180)
    const y = 50 + radius * Math.cos(-angle * Math.PI / 180)
    return { x, y }
  }
}