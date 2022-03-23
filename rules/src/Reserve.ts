/**
 * In here, you describe what a GameState will look like at any time during a game.
 */
import GuardianAnimal from './material/GuardianAnimal'

type Reserve = {
  stacks: GuardianAnimal[][]
  rows: (GuardianAnimal | null)[][]
}

export default Reserve

export type ReserveView = Omit<Reserve, 'stacks'> & {
  stacks: number[]
}
