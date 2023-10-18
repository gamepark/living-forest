import { ItemContext, LineLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { FragmentStockDescription } from './description/FragmentStockDescription'
import { getVaranDeckHolderCoordinates } from './description/VaranDeckDescription'

export class FragmentStockLocator extends LineLocator {
  locationDescription = new FragmentStockDescription()
  limit = 10
  delta = { x: -0.05, y: -0.05, z: 0.1 }

  getCoordinates(_item: MaterialItem, { rules: { players }}: ItemContext) {
    const holder = getVaranDeckHolderCoordinates(players)
    return {
      x: holder.x - 3.6,
      y: holder.y + 0.7,
      z: 0.05
    }
  }
}

export const fragmentStockCoordinate = (players: SpiritOfNature[]) => {
  if (players.length < 3) {
    return { x: -23.5, y: -23.5, z: 0}
  }

  return { x: 69.5, y: -4.4, z: 0}
}