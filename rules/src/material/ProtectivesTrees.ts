import Resource from './Resource';
import ProtectiveTreeDetails from './ProtectiveTreeDetails';

const { Sun = 1, Drop, Seed, Wind, SacredFlower } = Resource

export const Tree3A: ProtectiveTreeDetails = {
    resource: { [Sun]: 1 },
    cost: 3
}

export const Tree3B: ProtectiveTreeDetails = {
    resource: { [Drop]: 1 },
    cost: 3
}

export const Tree4A: ProtectiveTreeDetails = {
    resource: { [Wind]: 1 },
    cost: 4
}

export const Tree4B: ProtectiveTreeDetails = {
    resource: { [SacredFlower]: 1 },
    cost: 4
}

export const Tree5A: ProtectiveTreeDetails = {
    resource: { [Sun]: 2 },
    cost: 5
}

export const Tree5B: ProtectiveTreeDetails = {
    resource: { [Seed]: 1 },
    cost: 5
}

export const Tree6: ProtectiveTreeDetails = {
    resource: { [Drop]: 2 },
    cost: 6
}

export const Tree7: ProtectiveTreeDetails = {
    resource: { [Wind]: 2 },
    cost: 7
}

export const Tree8: ProtectiveTreeDetails = {
    resource: { [Drop]: 3 },
    cost: 8
}

export const Tree9: ProtectiveTreeDetails = {
    resource: { [SacredFlower]: 2 },
    cost: 9
}

export const Tree10: ProtectiveTreeDetails = {
    resource: { [Sun]: 4 },
    cost: 10
}

export const Tree11: ProtectiveTreeDetails = {
    resource: {},
    cost: 11
}