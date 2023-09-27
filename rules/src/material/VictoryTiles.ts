enum VictoryTiles {
    WinterTree = 1,
    WinterFire,
    WinterFlower,
    SummerTree,
    SummerFire,
    SummerFlower,
    AutumnTree,
    AutumnFire,
    AutumnFlower,
    SpringTree,
    SpringFire,
    SpringFlower,
}

export enum VictoryTileType {
    Fire = 1,
    Tree,
    Flower
}

export const VictoryTileTypes: Record<VictoryTiles, VictoryTileType> = {
    [VictoryTiles.WinterTree]: VictoryTileType.Tree,
    [VictoryTiles.WinterFire]: VictoryTileType.Fire, 
    [VictoryTiles.WinterFlower]: VictoryTileType.Flower,
    [VictoryTiles.SummerTree]: VictoryTileType.Tree, 
    [VictoryTiles.SummerFire]: VictoryTileType.Fire,
    [VictoryTiles.SummerFlower]: VictoryTileType.Flower,
    [VictoryTiles.AutumnTree]: VictoryTileType.Tree, 
    [VictoryTiles.AutumnFire]: VictoryTileType.Fire,
    [VictoryTiles.AutumnFlower]: VictoryTileType.Flower,
    [VictoryTiles.SpringTree]: VictoryTileType.Tree, 
    [VictoryTiles.SpringFire]: VictoryTileType.Fire,
    [VictoryTiles.SpringFlower]: VictoryTileType.Flower 
} 

export default VictoryTiles

/*export function getResourcesCount(victoryTiles: VictoryTile[], line: GuardianAnimal[], bonus: ActionMove | null, forest: (ProtectiveTree | number | null)[][], resource: Resource): number {
    const victoryTilesCount = resource === Resource.SacredFlower ? getVictoryTilesCount(victoryTiles, VictoryTiles.SacredFlower) : 0
    const helpLineCount = getAnimalsResource(line, resource)
    const forestCount = getTreesResourcesCount(forest, resource)
    const bonusForestCount = resource !== Resource.Seed ? getForestResourceBonus(forest, resource) : 0
    const tempBonusSun = resource === Resource.Sun && bonus === ActionMove.AttractGuardianAnimal3 ? 3 : 0
    const tempBonusDrop = resource === Resource.Drop && bonus === ActionMove.ExtinguishFire2 ? 2 : 0

    return helpLineCount + victoryTilesCount + forestCount + bonusForestCount + tempBonusSun + tempBonusDrop
}*//*

export function getvictoryCount(victoryTiles: VictoryTile[], line: GuardianAnimal[], forest: (ProtectiveTree | number | null)[][], victory: VictoryTiles, fires: number): number {
    if (victory === VictoryTiles.Fire) {

        return fires + getVictoryTilesCount(victoryTiles, VictoryTiles.Fire)
    } else if (victory === VictoryTiles.Tree) {
        var uniqueTree: (number | null)[] = []
        forest.forEach((row, _) => {
            row.forEach((tree, _) => {
                if (!uniqueTree.includes(tree)) {
                    uniqueTree.push(tree)
                }
            })
        })
        return getVictoryTilesCount(victoryTiles, victory) + uniqueTree.length - 1
    } else {
        return getVictoryTilesCount(victoryTiles, victory) + getForestResourceBonus(forest, Resource.SacredFlower) + getAnimalsResource(line, Resource.SacredFlower) + getTreesResourcesCount(forest, Resource.SacredFlower)
    }
}*/