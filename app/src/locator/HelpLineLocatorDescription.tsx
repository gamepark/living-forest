/** @jsxImportSource @emotion/react */
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/refacto/material/LocationType'
import { css } from '@emotion/react'
import { Location } from '@gamepark/rules-api/dist/material/location/Location'
import { playerDeckLocator } from './PlayerDeckLocator'
import { guardianAnimalCardDescription } from '../material/description/GuardianAnimalCardDescription'

export class HelpLineLocatorDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  getLocations({ rules: { players } }: MaterialContext) {
    return players.map((p) => ({ type: LocationType.HelpLine, player: p }))
  }

  width = 30
  height = guardianAnimalCardDescription.getSize(0).height
  //coordinates = { x: 20, y: 0, z: 0 }
  extraCss = css`
    background-color: rgba(0, 128, 0, 0.5);
    border-radius: 0.4em;
  `

  getCoordinates(location: Location, context: MaterialContext) {
    // FIXME: better solution ?
    const deckPosition = playerDeckLocator.getCoordinates(
      { location: { type: LocationType.PlayerDeckStack, player: location.player }},
      { ...context, type: MaterialType.GuardianAnimalCard, index: 0, displayIndex: 0 },
    )
    return {
      x: deckPosition.x + 19,
      y: deckPosition.y,
      z: 20
    }
  }

}