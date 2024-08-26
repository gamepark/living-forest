/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { DropAreaDescription, isLocationSubset, LocationContext, MaterialContext } from '@gamepark/react-game'
import { isCustomMoveType, Location, MaterialMove } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../../material/description/GuardianAnimalCardDescription'

export class PlayerDeckDescription extends DropAreaDescription<SpiritOfNature, MaterialType, LocationType> {
  width = guardianAnimalCardDescription.width + 1
  height = guardianAnimalCardDescription.height + 1
  borderRadius = guardianAnimalCardDescription.borderRadius

  getExtraCss(location: Location, { rules }: LocationContext) {
    const deckSize = rules.material(MaterialType.GuardianAnimalCard).location(l => isLocationSubset(l, location)).length
    if (!deckSize) return
    return css`
      &:before {
        content: '${deckSize}';
        font-size: 5em;
        font-family: Arial, serif;
        color: rgb(0 0 0 / 60%);
        font-weight: bold;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: -${0.01 * (Math.min(deckSize, 10))}em;
        margin-top: -${0.01 * (Math.min(deckSize, 10))}em;
      }
    `
  }

  canShortClick(move: MaterialMove, location: Location, _context: MaterialContext) {
    return isCustomMoveType(CustomMoveType.ShuffleAndDraw)(move) && move.data === location.player
  }
}
