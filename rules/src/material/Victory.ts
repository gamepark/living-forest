import ActionMove from "../moves/ActionMove"
import GuardianAnimal from "./GuardianAnimal"
import { getAnimalsResource } from "./GuardianAnimalDetails"
import ProtectiveTree from "./ProtectiveTree"
import { getForestResourceBonus, getTreesResourcesCount } from "./ProtectiveTreeDetails"
import Resource from "./Resource"
import VictoryTile, { getVictoryTilesCount } from "./VictoryTile"

enum Victory {
    Fire = 1, Tree, SacredFlower
}

export default Victory

export function getResourcesCount(victoryTiles: VictoryTile[], line: GuardianAnimal[], bonus: ActionMove | null, forest: (ProtectiveTree | number | null)[][], resource: Resource): number {
    const victoryTilesCount = resource === Resource.SacredFlower ? getVictoryTilesCount(victoryTiles, Victory.SacredFlower) : 0
    const helpLineCount = getAnimalsResource(line, resource)
    const forestCount = getTreesResourcesCount(forest, resource)
    const bonusForestCount = resource !== Resource.Seed ? getForestResourceBonus(forest, resource) : 0
    const tempBonusSun = resource === Resource.Sun && bonus === ActionMove.AttractGuardianAnimal3 ? 3 : 0
    const tempBonusDrop = resource === Resource.Drop && bonus === ActionMove.ExtinguishFire2 ? 2 : 0

    return helpLineCount + victoryTilesCount + forestCount + bonusForestCount + tempBonusSun + tempBonusDrop
}