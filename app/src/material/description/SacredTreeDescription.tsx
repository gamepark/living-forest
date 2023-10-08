import { TokenDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import { SacredTreeRules } from './SacredTreeRules'

export class SacredTreeDescription extends TokenDescription {
  width = 5
  ratio = 356 / 320
  image = Images.SacredTree
  rules = SacredTreeRules
}

export const sacredTreeDescription = new SacredTreeDescription()