/** @jsxImportSource @emotion/react */
import { ItemContext, LocationDescription, MaterialContext } from '@gamepark/react-game'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/refacto/material/LocationType'
import { isMoveItemType, Location, MaterialMove } from '@gamepark/rules-api'
import { guardianAnimalCardDescription } from '../../material/description/GuardianAnimalCardDescription'
import { playerDiscardLocator } from '../PlayerDiscardLocator'

export class PlayerDiscardDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  getLocations({ player }: MaterialContext): Location[] {
    if (!player) return []
    return  [{ type: LocationType.PlayerDiscardStack, player }]
  }

  width = guardianAnimalCardDescription.width + 1
  height = guardianAnimalCardDescription.width / guardianAnimalCardDescription.ratio + 1
  borderRadius = guardianAnimalCardDescription.borderRadius

  getCoordinates(location: Location, context: MaterialContext) {
    // FIXME: better solution ?
    const deckPosition = playerDiscardLocator.getCoordinates(
      { location: { type: LocationType.PlayerDiscardStack, player: location.player }},
      { ...context, type: MaterialType.GuardianAnimalCard, index: 0, displayIndex: 0 },
    )
    return {
      x: deckPosition.x - 0.1,
      y: deckPosition.y - 0.1,
      z: 10
    }
  }

  canDrop(move: MaterialMove, location: Location, context: ItemContext) {
    const { type, rules, index } = context
    if (!isMoveItemType(MaterialType.FragmentTile)(move) || type === MaterialType.FragmentTile) return false

    if (type === MaterialType.GuardianAnimalCard) {
      const item = rules.material(MaterialType.GuardianAnimalCard).getItem(index)!
      return move.position.location!.type === LocationType.FragmentStack
       && item.location.player === location.player
    }

    return false
  }
}
