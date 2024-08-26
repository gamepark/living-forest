import { getEnumValues } from '@gamepark/rules-api'

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


export const victoryTileTypes = getEnumValues(VictoryTileType)

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