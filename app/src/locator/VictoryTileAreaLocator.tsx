import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { DropAreaDescription, ListLocator, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { forestBoardDescription } from '../material/description/ForestBoardDescription'
import { victoryTileDescription } from '../material/description/VictoryTileDescription'
import { getPlayerBoardPositionOnTable } from '../utils/PositionOnTable'

export class VictoryTileAreaLocator extends ListLocator {
  getLocations({ player }: MaterialContext): Location[] {
    if (!player) return []
    return [{ type: LocationType.VictoryTileArea, player }]
  }

  locationDescription = new DropAreaDescription({ width: forestBoardDescription.width, height: victoryTileDescription.height + 1, borderRadius: 1 })

  gap = { x: 1 }

  getAreaCoordinates(location: Location, { rules, player }: MaterialContext) {
    const { x, y } = getPlayerBoardPositionOnTable(rules, location.player!, player)
    return { x, y: y + 7.5 }
  }

  getCoordinates(location: Location, context: MaterialContext) {
    const { x, y } = this.getAreaCoordinates(location, context)
    return {
      x: x - 14.5 + ((victoryTileDescription.width + 3) * location.id - 1),
      y: y + 0.5
    }
  }
}

export const victoryTileAreaLocator = new VictoryTileAreaLocator()