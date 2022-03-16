import SpiritOfNature from './SpiritOfNature'

export default interface PlayerState {
  spirit: SpiritOfNature
  ready: boolean
  deck: number[] // Personal Guardian Animal draw stack
  line: number[] // Guardian Animal Help Line
  discard: number[] // Guardian Animal discard
}