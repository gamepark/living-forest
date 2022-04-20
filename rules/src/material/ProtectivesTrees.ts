import Resource from './Resource';
import Details from './ProtectiveTreeDetails';

const { Sun = 1, Drop, Seed, Wind, SacredFlower, SameAction } = Resource

export const Tree3A: Details = {
    resource: { [Sun]: 1 },
    cost: 3
}

export const Tree3B: Details = {
    resource: { [Drop]: 1 },
    cost: 3
}

export const Tree4A: Details = {
    resource: { [Wind]: 1 },
    cost: 4
}

export const Tree4B: Details = {
    resource: { [SacredFlower]: 1 },
    cost: 4
}

export const Tree5A: Details = {
    resource: { [Sun]: 2 },
    cost: 5
}

export const Tree5B: Details = {
    resource: { [Seed]: 1 },
    cost: 5
}

export const Tree6: Details = {
    resource: { [Drop]: 2 },
    cost: 6
}

export const Tree7: Details = {
    resource: { [Wind]: 2 },
    cost: 7
}

export const Tree8: Details = {
    resource: { [Drop]: 3 },
    cost: 8
}

export const Tree9: Details = {
    resource: { [SacredFlower]: 2 },
    cost: 9
}

export const Tree10: Details = {
    resource: { [Sun]: 4 },
    cost: 10
}

export const Tree11: Details = {
    resource: { [SameAction]: 1 },
    cost: 11
}