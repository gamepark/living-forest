import { TokenDescription } from '@gamepark/react-game'
import Images from '../../images/Images'

export class SacredTreeDescription extends TokenDescription {
  width = 5
  ratio = 1
  image = Images.SacredTree
  rules = () => <p></p>
}

export const sacredTreeDescription = new SacredTreeDescription()