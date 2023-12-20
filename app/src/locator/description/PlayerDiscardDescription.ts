/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { LocationDescription, MaterialContext } from '@gamepark/react-game'
import { Location } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../../material/description/GuardianAnimalCardDescription'
import { getPlayerBoardPositionOnTable } from '../../utils/PositionOnTable'

export class PlayerDiscardDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {

  getLocations({ player }: MaterialContext): Location[] {
    if (!player) return []
    return  [{ type: LocationType.PlayerDiscardStack, player }]
  }

  width = guardianAnimalCardDescription.width + 1
  height = guardianAnimalCardDescription.width / guardianAnimalCardDescription.ratio + 1
  borderRadius = guardianAnimalCardDescription.borderRadius

  getCoordinates(location: Location, context: MaterialContext) {
    const { rules, player } = context
    const parentPosition = getPlayerBoardPositionOnTable(rules, { location }, player)

    return {
      x: parentPosition.x + 15.5,
      y: parentPosition.y - 3,
      z: 10
    }
  }

  // couldDrop(_move: MaterialMove): boolean {
  //   return true
  // }
  //
  // canDrop(move: MaterialMove, location: Location, context: ItemContext) {
  //   const { type, rules, index } = context
  //   if (!isMoveItemType(MaterialType.FragmentTile)(move) || type === MaterialType.FragmentTile) return false
  //
  //   if (type === MaterialType.GuardianAnimalCard) {
  //     const item = rules.material(MaterialType.GuardianAnimalCard).getItem(index)!
  //     return move.location!.type === LocationType.FragmentStack
  //      && item.location.player === location.player
  //   }
  //
  //   return false
  // }
}
