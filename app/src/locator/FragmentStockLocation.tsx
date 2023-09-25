import { ItemContext, LineLocator } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { FragmentStockDescription } from './description/FragmentStockDescription'

export class FragmentStockLocator extends LineLocator {
  locationDescription = new FragmentStockDescription()
  limit = 10
  delta = { x: -0.05, y: -0.05, z: 0.1 }

  getCoordinates(_item: MaterialItem, { rules: { players }}: ItemContext) {
    return fragmentStockCoordinate(players)
  }
}

export const fragmentStockCoordinate = (players: SpiritOfNature[]) => {
  if (players.length < 4) {
    return { x: -23.5, y: -23.5, z: 0}
  }

  return { x: 69.5, y: -4.4, z: 0}
}