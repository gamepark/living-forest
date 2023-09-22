import { TokenDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import { Fire } from '@gamepark/living-forest/material/Fire'

export class FireTileDescription extends TokenDescription {
  width = 3
  ratio = 74 / 100
  images = {
    [Fire.Fire2]: Images.fire2,
    [Fire.Fire3]: Images.fire3,
    [Fire.Fire4]: Images.fire4,
  }

  getSize(id: Fire) {
    let height = 0
    switch (id) {
      case Fire.Fire2:
        height = 2.7
        break
      case Fire.Fire3:
        height = 3.1
        break
      case Fire.Fire4:
        height = 3.5
        break
    }

    return { height, width: this.ratio * height }
  }

  rules = () => <p></p>
}

export const fireTileDescription = new FireTileDescription()