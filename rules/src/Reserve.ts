/**
 * In here, you describe what a GameState will look like at any time during a game.
 */
import GuardianAnimal, { guardianAnimals } from './material/GuardianAnimal'

type Reserve = {
  stacks: GuardianAnimal[][]
  rows: (GuardianAnimal | null)[][]
}

export default Reserve

export type ReserveView = Omit<Reserve, 'stacks'> & {
  stacks: number[]
}

export const startingReserveStack1 = guardianAnimals.slice(14, 37)
export const startingReserveStack2 = guardianAnimals.slice(37, 53)
export const startingReserveStack3 =  guardianAnimals.slice(53, 70)