import { TokenDescription } from '@gamepark/react-game'
import Images from '../../images/Images'

export class FragmentTileDescription extends TokenDescription {
  width = 3
  ratio = 1
  image = Images.fragment
  rules = () => <p></p>
}

export const fragmentTileDescription = new FragmentTileDescription()