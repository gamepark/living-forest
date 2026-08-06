import { TFunction, OptionsSpecV2 } from '@gamepark/rules-api'
import SpiritOfNature, { spirits } from './SpiritOfNature'

/**
 * This is the options for each players in the game.
 */
type LivingForestPlayerOptions = { id: SpiritOfNature }

/**
 * This is the type of object that the game receives when a new game is started.
 * The first generic parameter, "{}", can be changed to include game options like variants or expansions.
 */
export type LivingForestOptions = {
  players: LivingForestPlayerOptions[]
}

/**
 * The option space of living-forest: structure only.
 *
 * Labels live in the game's presentation document, published beside its translations at
 * `/options/<locale>.json` and keyed by convention. Subscription and competitive gates live in
 * the platform database, so they can change without releasing the game again.
 */
export const LivingForestOptionsSpecV2: OptionsSpecV2 = {
  specVersion: 2,
  players: { min: 2, max: 4 },
  identities: { values: spirits }
}

export function getPlayerName(playerId: SpiritOfNature, t: TFunction) {
  switch (playerId) {
    case SpiritOfNature.Winter:
      return t('Winter')
    case SpiritOfNature.Spring:
      return t('Spring')
    case SpiritOfNature.Summer:
      return t('Summer')
    case SpiritOfNature.Autumn:
      return t('Autumn')
  }
}