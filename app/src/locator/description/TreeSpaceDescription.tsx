/** @jsxImportSource @emotion/react */
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { protectiveTreeTileDescription } from '../../material/description/ProtectiveTreeTileDescription'
import { css } from '@emotion/react'
import { LocationDescription } from '@gamepark/react-game'

export class TreeSpaceDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  alwaysVisible = false
  width = protectiveTreeTileDescription.width + 0.3
  ratio = protectiveTreeTileDescription.ratio
  borderRadius = protectiveTreeTileDescription.borderRadius
  rules = () => <p></p>
  extraCss = css`
    background-color: rgba(0, 128, 0, 0.30);
  `
}