import { BoardDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { CircleOfSpiritBoardRules } from './CircleOfSpiritBoardRules'

export class CircleOfSpiritBoardDescription extends BoardDescription {
  ratio = 1
  width = 31.5

  locations = Array.from(Array(12)).map((_, id) => ({ type: LocationType.CircleOfSpiritBoardSpace, x: id }))

  staticItem = { location: { type: LocationType.Table } }
  image = Images.circleOfSpirits

  rules = CircleOfSpiritBoardRules

}
export const circleOfSpiritBoardDescription = new CircleOfSpiritBoardDescription()