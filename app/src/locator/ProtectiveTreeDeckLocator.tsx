import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { FlexLocator, ItemContext, MaterialContext } from '@gamepark/react-game'
import { Location, MaterialItem } from '@gamepark/rules-api'
import { protectiveTreeTileDescription } from '../material/description/ProtectiveTreeTileDescription'

export class ProtectiveTreeDeckLocator extends FlexLocator {
  gap = { x: protectiveTreeTileDescription.width + 0.5 }
  lineGap = { y: protectiveTreeTileDescription.height + 0.5 }
  getLineSize = (_: Location, { rules }: MaterialContext) => rules.players.length < 3 ? 4 : 3

  getCoordinates = (_: Location, { rules }: MaterialContext) => rules.players.length === 2 ? { x: -25, y: -8.5 } : { x: 13.5, y: 2.5 }

  getItemCoordinates(item: MaterialItem, context: ItemContext) {
    let { x = 0, y = 0, z = 0 } = super.getItemCoordinates(item, context)
    const { rules, displayIndex } = context
    x -= displayIndex * 0.15
    y -= displayIndex * 0.15
    z += displayIndex * 0.15
    const countTreeOfTypes = rules
      .material(MaterialType.ProtectiveTreeTiles)
      .location(LocationType.TreeDispenser)
      .filter((i) => i.id === item.id)
      .getItem()?.quantity ?? 1
    const selected = item.selected && (countTreeOfTypes - 1 === displayIndex)
    if (selected) y -= 1.5
    return { x, y, z }
  }
}
