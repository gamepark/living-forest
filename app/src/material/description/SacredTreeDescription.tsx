import { TokenDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import { SacredTreeHelp } from './help/SacredTreeHelp'

export class SacredTreeDescription extends TokenDescription {
  width = 5
  ratio = 356 / 320
  image = Images.SacredTree
  help = SacredTreeHelp
}

export const sacredTreeDescription = new SacredTreeDescription()
