import { TokenDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import { OnibiHelp } from './help/OnibiHelp'

export class OnibiDescription extends TokenDescription {
  // width = 5
  // ratio = 356 / 320
  image = Images.Onibi
  help = OnibiHelp
}

export const onibiDescription = new OnibiDescription()
