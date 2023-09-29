import SpiritOfNature from '../SpiritOfNature'

export function getTwoPlayersRocks(players: SpiritOfNature[]): Partial<Record<SpiritOfNature, number>> {
    return {
        [players[0]]: 0,
        [players[1]]: 6
    }
}

export function getThreePlayersRocks(players: SpiritOfNature[]): Partial<Record<SpiritOfNature, number>> {
    return {
        [players[0]]: 2,
        [players[1]]: 6,
        [players[2]]: 10

    }
}

export function getFourPlayersRocks(players: SpiritOfNature[]): Partial<Record<SpiritOfNature, number>> {
    return {
        [players[0]]: 0,
        [players[1]]: 6,
        [players[2]]: 9,
        [players[3]]: 3
    }
}

export function getInitializationPlayersRocks(players: SpiritOfNature[]) {
    if (players.length === 2) return getTwoPlayersRocks(players )
    if (players.length === 3) return getThreePlayersRocks(players)
    if (players.length === 4) return getFourPlayersRocks(players)
    return
}