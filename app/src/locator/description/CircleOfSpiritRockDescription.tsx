/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { DropAreaDescription } from '@gamepark/react-game'
import { isCustomMoveType, Location, MaterialMove } from '@gamepark/rules-api'
import { CircleOfSpiritSpaceHelp } from '../help/CircleOfSpiritSpaceHelp'

export class CircleOfSpiritRockDescription extends DropAreaDescription<SpiritOfNature, MaterialType, LocationType> {
  width = 4.5
  height = 3.8
  borderRadius = 1
  help = CircleOfSpiritSpaceHelp

  isMoveToLocation(move: MaterialMove, location: Location) {
    return isCustomMoveType(CustomMoveType.MoveOnCircleOfSpirit)(move) && move.data.target === location.x
  }
}
