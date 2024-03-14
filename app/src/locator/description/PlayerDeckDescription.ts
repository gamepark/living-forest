/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import { isCustomMoveType, Location, MaterialMove } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../../material/description/GuardianAnimalCardDescription'
import { playerDeckLocator } from '../PlayerDeckLocator'

export class PlayerDeckDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  getLocations({ player }: MaterialContext): Location[] {
    if (!player) return []
    return [{ type: LocationType.PlayerDeckStack, player }]
  }


  width = guardianAnimalCardDescription.width + 1
  height = guardianAnimalCardDescription.width / guardianAnimalCardDescription.ratio + 1
  borderRadius = guardianAnimalCardDescription.borderRadius

  isAlwaysVisible(location: Location<SpiritOfNature, LocationType>, context: MaterialContext<SpiritOfNature, MaterialType, LocationType>): boolean {
    const { rules } = context
    return rules.material(MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(location.player).length === 0
  }

  getCoordinates(location: Location, context: MaterialContext) {
    const deckPosition = playerDeckLocator.getCoordinates(
      { location: { type: LocationType.PlayerDeckStack, player: location.player }},
      { ...context, type: MaterialType.GuardianAnimalCard, index: 0, displayIndex: 0 }
    )

    return {
      x: deckPosition.x - 0.1,
      y: deckPosition.y - 0.1,
      z: 10
    }
  }

  canShortClick(move: MaterialMove, location: Location): boolean {
    return isCustomMoveType(CustomMoveType.ShuffleAndDraw)(move) && move.data === location.player
  }
}
