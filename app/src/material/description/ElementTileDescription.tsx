import ElementTile from '@gamepark/living-forest/material/ElementTile'
import { TokenDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import { ElementTileHelp } from './help/ElementTileHelp'

export class ElementTileDescription extends TokenDescription {
  ratio = 1
  width = 3.6
  height = 3.6
  borderRadius = 0.3

  images = {
    [ElementTile.Recto]: Images.ElementTileRecto,
    [ElementTile.Verso]: Images.ElementTileVerso,
  }

  help = ElementTileHelp
}

export const protectiveTreeTileDescription = new ElementTileDescription()
