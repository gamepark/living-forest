import { BoardDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import Victory from '@gamepark/living-forest/material/Victory'

export class VictoryTileDescription extends BoardDescription {
  height = 3
  width = 4.6

  images = {
    [Victory.Fire]: Images.fire,
    [Victory.SacredFlower]: Images.sacredFlower,
    [Victory.Tree]: Images.seed,
  }

  rules = () => <p></p>
}

export const victoryTileDescription = new VictoryTileDescription()