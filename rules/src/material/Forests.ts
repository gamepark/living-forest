import SpiritOfNature from "../SpiritOfNature"

export enum Space {
    Empty, ProtectiveTree, FragmentBonus, SunBonus, DropBonus
}

const _ = Space.Empty
const T = Space.ProtectiveTree
const F = Space.FragmentBonus
const S = Space.SunBonus
const D = Space.DropBonus


const forests: { [key in SpiritOfNature]: Space[][] } = {
    [SpiritOfNature.Winter]: [
        [S, _, _, _, F],
        [_, _, T, _, _],
        [F, _, _, _, D]
    ],
    [SpiritOfNature.Spring]: [
        [S, _, _, _, F],
        [_, _, T, _, _],
        [F, _, _, _, D]
    ],
    [SpiritOfNature.Summer]: [
        [S, _, _, _, F],
        [_, _, T, _, _],
        [F, _, _, _, D]
    ],
    [SpiritOfNature.Autumn]: [
        [S, _, _, _, F],
        [_, _, T, _, _],
        [F, _, _, _, D]
    ]
}

export default forests