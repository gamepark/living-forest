/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { isLocationSubset, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { isMoveItemType, Location, MaterialMove } from '@gamepark/rules-api'
import { protectiveTreeTileDescription } from '../../material/description/ProtectiveTreeTileDescription'
import { TreeSpaceHelp } from '../help/TreeSpaceHelp'

export class TreeSpaceDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  width = protectiveTreeTileDescription.width + 0.3
  ratio = protectiveTreeTileDescription.ratio
  borderRadius = protectiveTreeTileDescription.borderRadius
  alwaysVisible = true


  help = TreeSpaceHelp
  extraCss = css`
    background-color: rgba(0, 128, 0, 0.30);
  `

  canShortClick(move: MaterialMove, location: Location, context: MaterialContext): boolean {
    if (!isMoveItemType(MaterialType.ProtectiveTreeTiles)(move)) return false
    const { rules } = context
    const item = rules.material(MaterialType.ProtectiveTreeTiles).getItem(move.itemIndex)!
    if (!item.selected) return false
    return isLocationSubset(move.location,location)
  }
}
