/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { LocationDescription } from '@gamepark/react-game'
import { isCustomMoveType, Location, MaterialMove } from '@gamepark/rules-api'
import { CircleOfSpiritSpaceHelp } from '../help/CircleOfSpiritSpaceHelp'

export class StandeeOnCircleOfSpiritBoardDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  width = 4.5
  height = 3.8
  borderRadius = 1

  coordinates = { x: -0.2, y: 0.2, z: 0}

  help = CircleOfSpiritSpaceHelp

  isMoveToLocation(move: MaterialMove, location: Location): any {
    if (!isCustomMoveType(CustomMoveType.MoveOnCircleOfSpirit)(move)) return false;
    return move.data.target === location.x
  }
}
