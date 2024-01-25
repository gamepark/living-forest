/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../../material/description/GuardianAnimalCardDescription'
import { getPlayerBoardPositionOnTable } from '../../utils/PositionOnTable'
import { PlayerDiscardHelp } from '../help/PlayerDiscardHelp'

export class PlayerDiscardDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {

  getLocations({ rules: { players} }: MaterialContext): Location[] {
    return players.map((p) => ({ type: LocationType.PlayerDiscardStack, player: p }))
  }

  width = guardianAnimalCardDescription.width + 1
  height = guardianAnimalCardDescription.width / guardianAnimalCardDescription.ratio + 1
  borderRadius = guardianAnimalCardDescription.borderRadius
  alwaysVisible = true

  getCoordinates(location: Location, context: MaterialContext) {
    const { rules, player } = context
    const parentPosition = getPlayerBoardPositionOnTable(rules, { location }, player)

    return {
      x: parentPosition.x + 15.5,
      y: parentPosition.y - 3,
      z: 10
    }
  }

  help = PlayerDiscardHelp
}
