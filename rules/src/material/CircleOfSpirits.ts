import SpiritOfNature from '../SpiritOfNature';
import Fire from './Fire';
import GameState from '../GameState';
import GameView from '../GameView';
import { LivingForestOptions } from '../LivingForestOptions';

type CircleOfSpirits = {
    fire: (Fire | null)[]
    position: Partial<Record<SpiritOfNature, number>>
}

export default CircleOfSpirits

export const circleOfSpiritsRocks = ['D', 'F', 'S', 'F', 'S', 'F', 'D', 'F', 'S', 'F', 'S', 'F',]

export function getTwoPlayersRocks(game: LivingForestOptions): Partial<Record<SpiritOfNature, number>> {
    return {
        [game.players[0].id]: 2,
        [game.players[1].id]: 8
    }
}

export function getThreePlayersRocks(game: GameState | GameView): Partial<Record<SpiritOfNature, number>> {
    return {
        [game.players[0].spirit]: 4,
        [game.players[1].spirit]: 8,
        [game.players[2].spirit]: 0

    }
}

export function getFourPlayersRocks(game: GameState | GameView): Partial<Record<SpiritOfNature, number>> {
    return {
        [game.players[0].spirit]: 2,
        [game.players[1].spirit]: 8,
        [game.players[2].spirit]: 11,
        [game.players[2].spirit]: 5
    }
}

// export function isPlace(game: GameState | GameView){
//     for(const spirit in game.circle.position) {
//         if(game.circle.position.spirit == )return
//     }
// }