/** @jsxImportSource @emotion/react */
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/refacto/material/LocationType'
import { Location } from '@gamepark/rules-api/dist/material/location/Location'
import { guardianAnimalCardDescription } from '../material/description/GuardianAnimalCardDescription'
import { playerDeckLocator } from './PlayerDeckLocator'

export class PlayerDeckDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  getLocations({ rules: { players } }: MaterialContext): Location[] {
    return players.map((player) => ({ type: LocationType.PlayerDeckStack, player }))
  }

  width = guardianAnimalCardDescription.width + 1
  height = guardianAnimalCardDescription.width / guardianAnimalCardDescription.ratio + 1
  borderRadius = guardianAnimalCardDescription.borderRadius

  getCoordinates(location: Location, context: MaterialContext) {
    // FIXME: better solution ?
    const deckPosition = playerDeckLocator.getCoordinates(
      { location: { type: LocationType.PlayerDeckStack, player: location.player }},
      { ...context, type: MaterialType.GuardianAnimalCard, index: 0, displayIndex: 0 },
    )
    return {
      x: deckPosition.x - 0.1,
      y: deckPosition.y - 0.1,
      z: 20
    }
  }
}
