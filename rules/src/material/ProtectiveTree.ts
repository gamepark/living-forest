import { isEnumValue } from "@gamepark/rules-api"

enum ProtectiveTree {
    Tree3A = 1, Tree3B, Tree4A, Tree4B, Tree5A, Tree5B, Tree6, Tree7, Tree8, Tree9, Tree10, Tree11
}

export default ProtectiveTree

export const dispenserTwoPlayers: Record<ProtectiveTree, number> = {
    [ProtectiveTree.Tree3A]: 2,
    [ProtectiveTree.Tree3B]: 2,
    [ProtectiveTree.Tree4A]: 2,
    [ProtectiveTree.Tree4B]: 2,
    [ProtectiveTree.Tree5A]: 2,
    [ProtectiveTree.Tree5B]: 2,
    [ProtectiveTree.Tree6]: 2,
    [ProtectiveTree.Tree7]: 2,
    [ProtectiveTree.Tree8]: 2,
    [ProtectiveTree.Tree9]: 2,
    [ProtectiveTree.Tree10]: 2,
    [ProtectiveTree.Tree11]: 2,
}

export const dispenserThreePlayers: Record<ProtectiveTree, number> = {
    [ProtectiveTree.Tree3A]: 3,
    [ProtectiveTree.Tree3B]: 3,
    [ProtectiveTree.Tree4A]: 3,
    [ProtectiveTree.Tree4B]: 3,
    [ProtectiveTree.Tree5A]: 3,
    [ProtectiveTree.Tree5B]: 3,
    [ProtectiveTree.Tree6]: 3,
    [ProtectiveTree.Tree7]: 3,
    [ProtectiveTree.Tree8]: 3,
    [ProtectiveTree.Tree9]: 2,
    [ProtectiveTree.Tree10]: 2,
    [ProtectiveTree.Tree11]: 2,

}

export const dispenserFourPlayers: Record<ProtectiveTree, number> = {
    [ProtectiveTree.Tree3A]: 4,
    [ProtectiveTree.Tree3B]: 4,
    [ProtectiveTree.Tree4A]: 4,
    [ProtectiveTree.Tree4B]: 4,
    [ProtectiveTree.Tree5A]: 4,
    [ProtectiveTree.Tree5B]: 4,
    [ProtectiveTree.Tree6]: 3,
    [ProtectiveTree.Tree7]: 3,
    [ProtectiveTree.Tree8]: 3,
    [ProtectiveTree.Tree9]: 2,
    [ProtectiveTree.Tree10]: 2,
    [ProtectiveTree.Tree11]: 2,

}

export const protectiveTrees = Object.values(ProtectiveTree).filter(isEnumValue)
