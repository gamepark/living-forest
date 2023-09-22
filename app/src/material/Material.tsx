import { MaterialDescription } from '@gamepark/react-game'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { guardianAnimalCardDescription } from './description/GuardianAnimalCardDescription'
import { spiritOfNatureStandeeDescription } from './description/SpiritOfNatureStandeeDescription'
import { protectiveTreeTileDescription } from './description/ProtectiveTreeTileDescription'
import { circleOfSpiritBoardDescription } from './description/CircleOfSpiritBoardDescription'
import { victoryTileDescription } from './description/VictoryTileDescription'
import { forestBoardDescription } from './description/ForestBoardDescription'
import { fragmentTileDescription } from './description/FragmentTileDescription'
import { sacredTreeDescription } from './description/SacredTreeDescription'
import { fireTileDescription } from './description/FireTileDescription'

export const material: Record<MaterialType, MaterialDescription> = {
  [MaterialType.GuardianAnimalCard]: guardianAnimalCardDescription,
  [MaterialType.SpiritOfNatureStandee]: spiritOfNatureStandeeDescription,
  [MaterialType.ProtectiveTreeTiles]: protectiveTreeTileDescription,
  [MaterialType.CircleOfSpiritBoard]: circleOfSpiritBoardDescription,
  [MaterialType.VictoryTile]: victoryTileDescription,
  [MaterialType.ForestBoard]: forestBoardDescription,
  [MaterialType.FireTile]: fireTileDescription,
  [MaterialType.FragmentTile]: fragmentTileDescription,
  [MaterialType.SacredTree]: sacredTreeDescription
}