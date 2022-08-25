import Resource from "./Resource"
import ProtectiveTree from './ProtectiveTree';
import { Tree3A, Tree3B, Tree4A, Tree4B, Tree5A, Tree5B, Tree6, Tree7, Tree8, Tree9, Tree10, Tree11 } from './ProtectivesTrees';

type ProtectiveTreeDetails = {
    resource: { [key in Resource]?: number }
    cost?: number
}

export default ProtectiveTreeDetails

export function getProtectiveTreeDetails(protectiveTree: ProtectiveTree): ProtectiveTreeDetails {
    switch (protectiveTree) {
        case ProtectiveTree.Tree3A:
            return Tree3A
        case ProtectiveTree.Tree3B:
            return Tree3B
        case ProtectiveTree.Tree4A:
            return Tree4A
        case ProtectiveTree.Tree4B:
            return Tree4B
        case ProtectiveTree.Tree5A:
            return Tree5A
        case ProtectiveTree.Tree5B:
            return Tree5B
        case ProtectiveTree.Tree6:
            return Tree6
        case ProtectiveTree.Tree7:
            return Tree7
        case ProtectiveTree.Tree8:
            return Tree8
        case ProtectiveTree.Tree9:
            return Tree9
        case ProtectiveTree.Tree10:
            return Tree10
        case ProtectiveTree.Tree11:
            return Tree11
    }
}

export function getTreesResourcesCount(forest: (ProtectiveTree | number | null)[][], resource: Resource) {
    var total = 0
    forest.map(function (row, _indexRow) {
        row.forEach(function (tree, _indexCol) {
            if (tree !== null && tree !== 0) {
                if (typeof getProtectiveTreeDetails(tree!).resource[resource] !== 'undefined') {
                    total += getProtectiveTreeDetails(tree!).resource[resource]!
                }
            }
        })
    })
    return total
}

export function getForestResourceBonus(forest: (ProtectiveTree | number | null)[][], resource: Resource): number {
    if (resource === Resource.Wind && forest[0][3] && forest[1][3] && forest[2][3]) return 1
    if (resource === Resource.Sun && forest[0][2] && forest[2][2]) return 1
    if (resource === Resource.Drop && forest[0][1] && forest[1][1] && forest[2][1]) return 1
    if (resource === Resource.SacredFlower && forest[1][0] && forest[1][1] && forest[1][3] && forest[1][4]) return 2
    return 0
}