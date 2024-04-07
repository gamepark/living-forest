import Resource from './Resource'
import ProtectiveTree from './ProtectiveTree'

const { Sun = 1, Drop, Seed, Wind, SacredFlower } = Resource

type ProtectiveTreeDetails = {
    resources?: Partial<Record<Resource, number>>
    kodama?: Resource
    cost?: number
}


export const Tree3A: ProtectiveTreeDetails = {
    resources: {
        [Sun]: 1,
        [Drop]: 0,
        [Seed]: 0,
        [Wind]: 0,
        [SacredFlower]: 0,
    },

    cost: 3
}

export const Tree3B: ProtectiveTreeDetails = {
    resources: { [Drop]: 1 },
    cost: 3
}

export const Tree4A: ProtectiveTreeDetails = {
    resources: { [Wind]: 1 },
    cost: 4
}

export const Tree4B: ProtectiveTreeDetails = {
    resources: { [SacredFlower]: 1 },
    cost: 4
}

export const Tree5A: ProtectiveTreeDetails = {
    resources: { [Sun]: 2 },
    cost: 5
}

export const Tree5B: ProtectiveTreeDetails = {
    resources: { [Seed]: 1 },
    cost: 5
}

export const Tree6: ProtectiveTreeDetails = {
    resources: { [Drop]: 2 },
    cost: 6
}

export const Tree7: ProtectiveTreeDetails = {
    resources: { [Wind]: 2 },
    cost: 7
}

export const Tree8: ProtectiveTreeDetails = {
    resources: { [Drop]: 3 },
    cost: 8
}

export const Tree9: ProtectiveTreeDetails = {
    resources: { [SacredFlower]: 2 },
    cost: 9
}

export const Tree10: ProtectiveTreeDetails = {
    resources: { [Sun]: 4 },
    cost: 10
}

export const Tree11: ProtectiveTreeDetails = {
    resources: undefined,
    cost: 11
}

export const Tree6K: ProtectiveTreeDetails = {
    kodama: Resource.Wind,
    cost: 6,
}

export const Tree7K: ProtectiveTreeDetails = {
    kodama: Resource.Drop,
    cost: 7
}

export const Tree8K: ProtectiveTreeDetails = {
    kodama: Resource.Kodama,
    cost: 8
}

export const Tree9K: ProtectiveTreeDetails = {
    kodama: Resource.Seed,
    cost: 9
}

export const Tree10K: ProtectiveTreeDetails = {
    kodama: Resource.Wind,
    cost: 10
}

export const Tree11K: ProtectiveTreeDetails = {
    kodama: Resource.SacredFlower,
    cost: 11
}

export const ProtectiveTreeDetail = {
    [ProtectiveTree.Tree3A]: Tree3A,
    [ProtectiveTree.Tree3B]: Tree3B,
    [ProtectiveTree.Tree4A]: Tree4A,
    [ProtectiveTree.Tree4B]: Tree4B,
    [ProtectiveTree.Tree5A]: Tree5A,
    [ProtectiveTree.Tree5B]: Tree5B,
    [ProtectiveTree.Tree6]: Tree6,
    [ProtectiveTree.Tree7]: Tree7,
    [ProtectiveTree.Tree8]: Tree8,
    [ProtectiveTree.Tree9]: Tree9,
    [ProtectiveTree.Tree10]: Tree10,
    [ProtectiveTree.Tree11]: Tree11,
    [ProtectiveTree.Tree6K]: Tree6K,
    [ProtectiveTree.Tree7K]: Tree7K,
    [ProtectiveTree.Tree8K]: Tree9K,
    [ProtectiveTree.Tree9K]: Tree9K,
    [ProtectiveTree.Tree10K]: Tree10K,
    [ProtectiveTree.Tree11K]: Tree11K,
}