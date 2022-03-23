import GuardianAnimal from './material/GuardianAnimal'
import SpiritOfNature from './SpiritOfNature'

export default interface PlayerState {
  spirit: SpiritOfNature
  ready: boolean
  deck: GuardianAnimal[]
  line: GuardianAnimal[]
  discard: GuardianAnimal[]
  shuffle?: boolean
}