import { TokenDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree'
import { ProtectiveTreeTileHelp } from './help/ProtectiveTreeTileHelp'

export class ProtectiveTreeTileDescription extends TokenDescription {
  ratio = 1
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
    [ProtectiveTree.Tree11]: Images.tree11,
    [ProtectiveTree.Tree6K]: Images.tree6K,
    [ProtectiveTree.Tree7K]: Images.tree7K,
    [ProtectiveTree.Tree8K]: Images.tree8K,
    [ProtectiveTree.Tree9K]: Images.tree9K,
    [ProtectiveTree.Tree10K]: Images.tree10K,
    [ProtectiveTree.Tree11K]: Images.tree11K,
  }

  help = ProtectiveTreeTileHelp
}

export const protectiveTreeTileDescription = new ProtectiveTreeTileDescription()
