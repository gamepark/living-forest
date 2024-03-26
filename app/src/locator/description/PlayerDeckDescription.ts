/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { isLocationSubset, LocationContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import { isCustomMoveType, Location, MaterialMove } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../../material/description/GuardianAnimalCardDescription'
import { playerDeckLocator } from '../PlayerDeckLocator'

export class PlayerDeckDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  getLocations({ player }: MaterialContext): Location[] {
    if (!player) return []
    return [{ type: LocationType.PlayerDeckStack, player }]
  }

  getExtraCss(location: Location, context: LocationContext) {
    const deckSize = context.rules.material(MaterialType.GuardianAnimalCard).location((l) => isLocationSubset(l, location)).length
    if (!deckSize) return []
    return [
      css`
        pointer-events: none;
        &:before {
          font-size: 5em;
          font-family: Arial, serif;
          color: rgb(0 0 0 / 60%);
          font-weight: bold;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          content: '${deckSize}';
        }
      `
    ]
  }


  width = guardianAnimalCardDescription.width + 1
  height = guardianAnimalCardDescription.width / guardianAnimalCardDescription.ratio + 1
  borderRadius = guardianAnimalCardDescription.borderRadius
  alwaysVisible = true

  getCoordinates(location: Location, context: MaterialContext) {
    const deckPosition = playerDeckLocator.getCoordinates(
      { location: { type: LocationType.PlayerDeckStack, player: location.player } },
      { ...context, type: MaterialType.GuardianAnimalCard, index: 0, displayIndex: 0 }
    )

    return {
      x: deckPosition.x - 0.1,
      y: deckPosition.y - 0.1,
      z: 10
    }
  }

  canShortClick(move: MaterialMove, location: Location, _context: MaterialContext): boolean {
    return isCustomMoveType(CustomMoveType.ShuffleAndDraw)(move) && move.data === location.player
  }

  canLongClick(move: MaterialMove, location: Location, context: MaterialContext): boolean {
    return this.canShortClick(move, location, context)
  }
}
