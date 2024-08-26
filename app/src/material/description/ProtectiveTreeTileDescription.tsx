import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree'
import { TokenDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import { ProtectiveTreeTileHelp } from './help/ProtectiveTreeTileHelp'

export class ProtectiveTreeTileDescription extends TokenDescription {
  width = 3.6
  height = 3.6
  borderRadius = 0.3

  images = {
    [ProtectiveTree.Tree3A]: Images.tree3A,
    [ProtectiveTree.Tree3B]: Images.tree3B,
    [ProtectiveTree.Tree4A]: Images.tree4A,
    [ProtectiveTree.Tree4B]: Images.tree4B,
    [ProtectiveTree.Tree5A]: Images.tree5A,
    [ProtectiveTree.Tree5B]: Images.tree5B,
    [ProtectiveTree.Tree6]: Images.tree6,
    [ProtectiveTree.Tree7]: Images.tree7,
    [ProtectiveTree.Tree8]: Images.tree8,
    [ProtectiveTree.Tree9]: Images.tree9,
    [ProtectiveTree.Tree10]: Images.tree10,
    [ProtectiveTree.Tree11]: Images.tree11
  }

  help = ProtectiveTreeTileHelp
}

export const protectiveTreeTileDescription = new ProtectiveTreeTileDescription()
