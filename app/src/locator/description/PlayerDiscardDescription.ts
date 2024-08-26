/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { LocationDescription } from '@gamepark/react-game'
import { guardianAnimalCardDescription } from '../../material/description/GuardianAnimalCardDescription'
import { PlayerDiscardHelp } from '../help/PlayerDiscardHelp'

export class PlayerDiscardDescription extends LocationDescription<SpiritOfNature, MaterialType, LocationType> {
  width = guardianAnimalCardDescription.width + 1
  height = guardianAnimalCardDescription.height + 1
  borderRadius = guardianAnimalCardDescription.borderRadius
  help = PlayerDiscardHelp
}
