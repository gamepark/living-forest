import DrawCard from './DrawCard'
import ShuffleDiscard from './ShuffleDiscard'
import FillReserve from './FillReserve';
import TellYouAreReady from './TellYouAreReady';
import StartPhase from './StartPhase';
import TakeFragmentTile from './TakeFragmentTile';
import AttractGuardianAnimal from './AttractGuardianAnimal';
import ExtinguishFire from './ExtinguishFire';
import MoveCircleOfSpirits from './MoveCircleOfSpirits';
import PlantTree from './PlantTree';
import EndTurn from './EndTurn';
import TakeProtectiveTree from './TakeProtectiveTree';

/**
 * A "Move" is the combination of all the types of moves that exists in you game
 */
type Move = DrawCard | ShuffleDiscard | FillReserve | TellYouAreReady | StartPhase | TakeFragmentTile | AttractGuardianAnimal | ExtinguishFire | MoveCircleOfSpirits | PlantTree | EndTurn | TakeProtectiveTree

export default Move