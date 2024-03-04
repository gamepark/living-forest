import { LivingForestDummy } from '@gamepark/living-forest/dummy/LivingForestDummy'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { GameAI } from '@gamepark/react-game'
import { MaterialGame, MaterialMove } from '@gamepark/rules-api'

export const ai: GameAI<MaterialGame<SpiritOfNature, MaterialType, LocationType>, MaterialMove<SpiritOfNature, MaterialType, LocationType>, SpiritOfNature>
  = (game: MaterialGame<SpiritOfNature, MaterialType, LocationType>, bot: SpiritOfNature): Promise<MaterialMove[]> => {
  return new LivingForestDummy().getRandomMove(game, bot)
}