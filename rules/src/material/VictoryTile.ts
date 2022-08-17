
import SpiritOfNature from "../SpiritOfNature"

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