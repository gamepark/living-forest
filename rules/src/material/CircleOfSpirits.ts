import SpiritOfNature from '../SpiritOfNature';
import Fire from './Fire';
import { LivingForestOptions } from '../LivingForestOptions';
import ActionMove from '../moves/ActionMove';

type CircleOfSpirits = {
    fire: (Fire | null)[]
    position: Partial<Record<SpiritOfNature, number>>
}

export default CircleOfSpirits

export const circleOfSpiritsRocks = [ActionMove.ExtinguishFire, ActionMove.TakeFragmentTile, ActionMove.PlantTree, ActionMove.TakeFragmentTile, ActionMove.AttractGuardianAnimal, ActionMove.TakeFragmentTile, ActionMove.ExtinguishFire, ActionMove.TakeFragmentTile, ActionMove.PlantTree, ActionMove.TakeFragmentTile, ActionMove.AttractGuardianAnimal, ActionMove.TakeFragmentTile]

export function getTwoPlayersRocks(game: LivingForestOptions): Partial<Record<SpiritOfNature, number>> {
    return {
        [game.players[0].id]: 2,
        [game.players[1].id]: 8
    }
}

export function getThreePlayersRocks(game: LivingForestOptions): Partial<Record<SpiritOfNature, number>> {
    return {
        [game.players[0].id]: 4,
        [game.players[1].id]: 8,
        [game.players[2].id]: 0

    }
}

export function getFourPlayersRocks(game: LivingForestOptions): Partial<Record<SpiritOfNature, number>> {
    return {
        [game.players[0].id]: 2,
        [game.players[1].id]: 8,
        [game.players[2].id]: 11,
        [game.players[2].id]: 5
    }
}

export function getInitializationPlayersRocks(game: LivingForestOptions) {
    if (game.players.length === 2) return getTwoPlayersRocks(game)
    if (game.players.length === 3) return getThreePlayersRocks(game)
    if (game.players.length === 4) return getFourPlayersRocks(game)
    return
}