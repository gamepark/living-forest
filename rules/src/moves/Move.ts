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
import NextPlayer from './NextPlayer';
import ReturnGuardianAnimals from './ReturnGuardianAnimals';
import ValidateMove from './ValidateMove';
import TakeVictoryTile from './TakeVictoryTile';
import CancelMove from './CancelMove';
import OnibiAttackingPlayers from './OnibiAttackingPlayers';
import OnibiAttackingSacredTree from './OnibiAttackingSacredTree';

/**
 * A "Move" is the combination of all the types of moves that exists in you game
 */
type Move = DrawCard | ShuffleDiscard | FillReserve | TellYouAreReady | StartPhase | TakeFragmentTile | AttractGuardianAnimal | ExtinguishFire | MoveCircleOfSpirits | PlantTree | EndTurn | TakeProtectiveTree | NextPlayer | ReturnGuardianAnimals | ValidateMove | TakeVictoryTile | CancelMove | OnibiAttackingPlayers | OnibiAttackingSacredTree

export default Move