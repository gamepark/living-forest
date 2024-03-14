/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { forestBoardDescription } from '../../material/description/ForestBoardDescription'
import { victoryTileDescription } from '../../material/description/VictoryTileDescription'
import { getPlayerBoardPositionOnTable } from '../../utils/PositionOnTable'

export class VictoryTileAreaDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  width = forestBoardDescription.width
  height = victoryTileDescription.height + 1
  borderRadius = 1
  getLocations({ player }: MaterialContext): Location[] {
    if (!player) return []
    return [{ type: LocationType.VictoryTileArea, player }]
  }

  getCoordinates(location: Location, context: MaterialContext) {
    const { rules, player } = context
    const parentPosition = getPlayerBoardPositionOnTable(rules, location.player!, player)
    return {
      x: parentPosition.x,
      y: parentPosition.y + 7.5,
      z: 0.1
    }
  }
}
