import { GridLocator } from '@gamepark/living-forest/configuration/GridLocator'
import { MaterialItem } from '@gamepark/rules-api'
import { ItemContext } from '@gamepark/react-game'

export class ProtectiveTreeDeckLocator extends GridLocator {
  delta = { x: 0.5, y: 0.5 }


  getColumns(_item: MaterialItem, { rules: { players } }: ItemContext): number {
    return players.length < 3? 4: 3
  }

  getCoordinates(_item: MaterialItem, { rules: { players }}: ItemContext) {
    if (players.length < 3) {
      return { x: -25, y: -8.5, z: 0}
    }

    return { x: 13.5, y: 2.5, z: 0}
  }
}