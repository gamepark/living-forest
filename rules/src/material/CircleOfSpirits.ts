import SpiritOfNature from '../SpiritOfNature'
import { Fire } from './Fire'
import ActionMove from '../moves/ActionMove'

type CircleOfSpirits = {
    fire: (Fire | null)[]
    position: Partial<Record<SpiritOfNature, number>>
}

export default CircleOfSpirits

export const circleOfSpiritsRocks = [ActionMove.ExtinguishFire, ActionMove.TakeFragmentTile, ActionMove.PlantTree, ActionMove.TakeFragmentTile, ActionMove.AttractGuardianAnimal, ActionMove.TakeFragmentTile, ActionMove.ExtinguishFire, ActionMove.TakeFragmentTile, ActionMove.PlantTree, ActionMove.TakeFragmentTile, ActionMove.AttractGuardianAnimal, ActionMove.TakeFragmentTile]
export function getTwoPlayersRocks(players: SpiritOfNature[]): Partial<Record<SpiritOfNature, number>> {
    return {
        [players[0]]: 2,
        [players[1]]: 8
    }
}

export function getThreePlayersRocks(players: SpiritOfNature[]): Partial<Record<SpiritOfNature, number>> {
    return {
        [players[0]]: 4,
        [players[1]]: 8,
        [players[2]]: 0

    }
}

export function getFourPlayersRocks(players: SpiritOfNature[]): Partial<Record<SpiritOfNature, number>> {
    return {
        [players[0]]: 2,
        [players[1]]: 8,
        [players[2]]: 11,
        [players[3]]: 5
    }
}

export function getInitializationPlayersRocks(players: SpiritOfNature[]) {
    if (players.length === 2) return getTwoPlayersRocks(players )
    if (players.length === 3) return getThreePlayersRocks(players)
    if (players.length === 4) return getFourPlayersRocks(players)
    return
}