/** @jsxImportSource @emotion/react */
import { ItemContext, LineLocator } from '@gamepark/react-game'
import { Coordinates, MaterialItem } from '@gamepark/rules-api'
import SpiritOfNature from '../SpiritOfNature'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'

export class GridLocator extends LineLocator<SpiritOfNature, MaterialType, LocationType> {
  coordinates = { x: 0, y: 0, z: 0 }
  columns = 2

  getColumns(_item: MaterialItem, _context: ItemContext): number {
    return this.columns
  }

  getPosition(item: MaterialItem, context: ItemContext): Coordinates {
    const coordinates = this.getCoordinates(item, context)
    const index = this.getItemIndex(item, context)
    const columns = this.getColumns(item, context)
    const deltaX = (index % columns) * (this.delta?.x ?? 0) + (item.location.z ?? 0) * (this.delta?.z ?? 0)
    const deltaY = Math.floor(index / columns) * (this.delta?.y ?? 0)

    const x = coordinates.x + ((index % columns) * context.material[context.type]!.width!) + deltaX
    const y = coordinates.y + (Math.floor(index / columns) * context.material[context.type]!.height!) + deltaY

    return { x, y, z: coordinates.z }
  }
}
