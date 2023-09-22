import { GridLocator } from '@gamepark/living-forest/configuration/GridLocator'
import { MaterialItem } from '@gamepark/rules-api'
import { ItemContext } from '@gamepark/react-game/dist/locators/ItemLocator'

export class ProtectiveTreeDeckLocator extends GridLocator {
  columns = 4
  coordinates = { x: -24, y: -16, z: 0}
  delta = { x: 0.8, y: 0.8 }

  getCoordinates(_item: MaterialItem, { rules: { players }}: ItemContext) {
    if (players.length < 4) {
      return { x: -24, y: -16, z: 0}
    }

    return { x: -24, y: -10, z: 0}
  }
}