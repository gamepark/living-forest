import { TokenDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import { FragmentTileRules } from './FragmentTileRules'

export class FragmentTileDescription extends TokenDescription {
  width = 3
  ratio = 1
  image = Images.fragment

  rules = FragmentTileRules
}

export const fragmentTileDescription = new FragmentTileDescription()