import GuardianAnimal, { startingGuardianAnimals } from './material/GuardianAnimal'
import SpiritOfNature from './SpiritOfNature'
import shuffle from 'lodash.shuffle';
import ProtectiveTree from './material/ProtectiveTree';
// import Move from './moves/Move';
import ActionMove from './moves/ActionMove';
import Fire from './material/Fire';
import VictoryTile from './material/VictoryTile';

export default interface PlayerState {
  spirit: SpiritOfNature
  ready: boolean
  deck: GuardianAnimal[]
  line: GuardianAnimal[]
  discard: GuardianAnimal[]
  forest: (ProtectiveTree | number | null)[][]
  victory: number[]
  shuffled?: boolean
  fragment: number
  attractedGuardianAnimal: number
  extinguishedFires: (Fire | null)[]
  extinguishedFiresTotal: number
  actionMoves: ActionMove[]
  tree: ProtectiveTree | null
  ongoingMove: ActionMove | null
  bonus: ActionMove | null
  victoryTiles: VictoryTile[]
}

export function setupDeck(): number[] {
  return shuffle(Array.from(startingGuardianAnimals))
}
