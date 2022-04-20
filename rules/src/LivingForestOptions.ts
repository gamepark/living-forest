import { OptionsSpec } from '@gamepark/rules-api'
import { TFunction } from 'i18next'
import GameState from './GameState'
import SpiritOfNature, { playerColors } from './SpiritOfNature'

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
 * Typeguard to help Typescript distinguish between a GameState and new game's options, for you main class constructor.
 * @param arg GameState or Game options
 * @return true if arg is a Game options
 */
export function isGameOptions(arg: GameState | LivingForestOptions): arg is LivingForestOptions {
  return (arg as GameState).phase === undefined
}

/**
 * This object describes all the options a game can have, and will be used by GamePark website to create automatically forms for you game
 * (forms for friendly games, or forms for matchmaking preferences, for instance).
 */
export const LivingForestOptionsSpec: OptionsSpec<LivingForestOptions> = {
  players: {
    id: {
      label: (t: TFunction) => t('Color'),
      values: playerColors,
      valueSpec: color => ({ label: t => getPlayerName(color, t) })
    }
  }
}

export function getPlayerName(playerId: SpiritOfNature, t: TFunction) {
  switch (playerId) {
    case SpiritOfNature.Winter:
      return t('Winter Spirit')
    case SpiritOfNature.Spring:
      return t('Spring Spirit')
    case SpiritOfNature.Summer:
      return t('Summer Spirit')
    case SpiritOfNature.Autumn:
      return t('Autumn Spirit')
  }
}