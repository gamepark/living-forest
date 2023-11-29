import { ItemContext, TokenDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import { FragmentTileRules } from './FragmentTileRules'
import { isMoveItemType, MaterialMove } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/material/LocationType'

export class FragmentTileDescription extends TokenDescription {
  width = 3
  ratio = 1
  image = Images.fragment

  help = FragmentTileRules

  canDrag(move: MaterialMove, context: ItemContext): boolean {
    return super.canDrag(move, context) && this.isTopItem(move, context)
  }

  canLongClick(move: MaterialMove, context: ItemContext): boolean {
    return super.canLongClick(move, context) && this.isTopItem(move, context)
  }

  isTopItem(move: MaterialMove, context: ItemContext): boolean {
    // Only compute it for element that goes to player fragment token
    if (!isMoveItemType(MaterialType.FragmentTile)(move) || move.location?.type !== LocationType.PlayerFragmentTileStack) return true
    const  { displayIndex, index, rules, type } = context
    const shineIndex = (Math.min(rules.material(type).getItem(index)?.quantity ?? 0, 10) - 1)
    return displayIndex === shineIndex
  }
}

export const fragmentTileDescription = new FragmentTileDescription()
