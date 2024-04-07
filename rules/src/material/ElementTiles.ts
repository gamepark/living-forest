import ElementTile from './ElementTile'
import Resource from './Resource'

const { Sun = 1, Drop, Seed, Wind, SacredFlower } = Resource

type ElementTileDetails = {
    resources: Partial<Record<Resource, number>>
}


export const Recto: ElementTileDetails = {
    resources: {
        [Sun]: 2,
        [Drop]: 2,
        [Seed]: 2,
    },
}

export const Verso: ElementTileDetails = {
    resources: {
        [Wind]: 1,
        [SacredFlower]: 1,
    },
}


export const ProtectiveTreeDetail = {
    [ElementTile.Recto]: Recto,
    [ElementTile.Verso]: Verso,
}