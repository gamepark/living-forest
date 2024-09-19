/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { DropAreaDescription, MaterialContext } from '@gamepark/react-game'
import { isMoveItemType, Location, MaterialMove } from '@gamepark/rules-api'
import { isEqual } from 'lodash'
import { protectiveTreeTileDescription } from '../../material/description/ProtectiveTreeTileDescription'
import { TreeSpaceHelp } from '../help/TreeSpaceHelp'

export class TreeSpaceDescription extends DropAreaDescription<SpiritOfNature, MaterialType, LocationType> {
  width = protectiveTreeTileDescription.width + 0.3
  height = protectiveTreeTileDescription.height + 0.3
  borderRadius = protectiveTreeTileDescription.borderRadius

  help = TreeSpaceHelp

  canShortClick(move: MaterialMove, location: Location, { rules }: MaterialContext) {
    if (!isMoveItemType(MaterialType.ProtectiveTreeTiles)(move)) return false
    const item = rules.material(MaterialType.ProtectiveTreeTiles).getItem(move.itemIndex)
    if (!item.selected) return false
    return isEqual(move.location, location)
  }
}
