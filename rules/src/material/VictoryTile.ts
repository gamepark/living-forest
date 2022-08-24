
import SpiritOfNature from "../SpiritOfNature"
import Victory from './Victory';

enum VictoryTile {
    FireSpring = 1, TreeSpring, SacredFlowerSpring, FireSummer, TreeSummer, SacredFlowerSummer, FireAutumn, TreeAutumn, SacredFlowerAutumn, FireWinter, TreeWinter, SacredFlowerWinter
}

export default VictoryTile

export function getSpiritVictoryTiles(spirit: SpiritOfNature): VictoryTile[] {
    if (spirit === SpiritOfNature.Spring) {
        return [VictoryTile.FireSpring, VictoryTile.SacredFlowerSpring, VictoryTile.TreeSpring]
    }
    if (spirit === SpiritOfNature.Summer) {
        return [VictoryTile.FireSummer, VictoryTile.SacredFlowerSummer, VictoryTile.TreeSummer]
    }
    if (spirit === SpiritOfNature.Autumn) {
        return [VictoryTile.FireAutumn, VictoryTile.SacredFlowerAutumn, VictoryTile.TreeAutumn]
    }
    if (spirit === SpiritOfNature.Winter) {
        return [VictoryTile.FireWinter, VictoryTile.SacredFlowerWinter, VictoryTile.TreeWinter]
    }
    return []
}

export function getVictoryTilesNumber(victoryTiles: VictoryTile[], victory: Victory) {
    var number = 0
    victoryTiles.forEach((victoryTile, _) => {
        if (victory === Victory.SacredFlower) { if (victoryTile % 3 == 0) number++ }
        if (victory === Victory.Fire) { if (victoryTile % 3 == 1) number++ }
        if (victory === Victory.Tree) { if (victoryTile % 3 == 2) number++ }
    })
    return number
}