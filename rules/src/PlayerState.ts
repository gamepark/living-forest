import GuardianAnimal, { startingGuardianAnimals } from './material/GuardianAnimal'
import SpiritOfNature from './SpiritOfNature'
import shuffle from 'lodash.shuffle';

export default interface PlayerState {
  spirit: SpiritOfNature
  ready: boolean
  deck: GuardianAnimal[]
  line: GuardianAnimal[]
  discard: GuardianAnimal[]
  shuffle?: boolean
}

export function setupDeck(): number[] {
  return shuffle(Array.from(startingGuardianAnimals))
}
