import { GridLocator } from '@gamepark/living-forest/configuration/GridLocator'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { ItemContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'

export class ProtectiveTreeDeckLocator extends GridLocator {
  delta = { x: 0.5, y: 0.5, z: 0.5 }

  getColumns(_item: MaterialItem, { rules: { players } }: ItemContext): number {
    return players.length < 3 ? 4 : 3
  }

  getCoordinates(item: MaterialItem, context: ItemContext) {
    const { rules, displayIndex } = context
    const { players } = rules
    const countTreeOfTypes = rules
      .material(MaterialType.ProtectiveTreeTiles)
      .location(LocationType.TreeDispenser)
      .filter((i) => i.id === item.id)
      .getItem()?.quantity ?? 1

    const selected = item.selected && (countTreeOfTypes - 1 === displayIndex)
    if (players.length < 3) {
      return { x: -25, y: selected ? -10 : -16.5, z: 0 }
    }

    return { x: 13.5, y: selected ? 1 : -5.5, z: 0 }
  }
}
