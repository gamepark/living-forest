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
import DiscardCard from './DiscardCard';
import GivingSacredTree from './GivingSacredTree';
import ActionMove from './ActionMove';
import { getAnimalsResource, getGuardianAnimalDetails } from '../material/GuardianAnimalDetails';
import Resource from '../material/Resource';
import GuardianAnimal from '../material/GuardianAnimal';
import Fire from '../material/Fire';
import { getProtectiveTreeDetails } from '../material/ProtectiveTreeDetails';
import TreeDispenser from '../material/TreeDispenser';

/**
 * A "Move" is the combination of all the types of moves that exists in you game
 */
type Move = DrawCard | ShuffleDiscard | FillReserve | TellYouAreReady | StartPhase | TakeFragmentTile | AttractGuardianAnimal | ExtinguishFire | MoveCircleOfSpirits | PlantTree | EndTurn | TakeProtectiveTree | NextPlayer | ReturnGuardianAnimals | ValidateMove | TakeVictoryTile | CancelMove | OnibiAttackingPlayers | OnibiAttackingSacredTree | DiscardCard | GivingSacredTree

export default Move

export function getAvailableMoves(actionMoves: ActionMove[], bonus: ActionMove | null, line: GuardianAnimal[], reserveRows: (GuardianAnimal | null)[][], fire: (Fire | null)[], dispenser: TreeDispenser) {
    var availableMoves = []
    //FragmentTile
    if (!actionMoves.includes(ActionMove.TakeFragmentTile)) {
        availableMoves.push(ActionMove.TakeFragmentTile)
    }
    //Attract one or more Guardian Animals action  
    if (!actionMoves.includes(ActionMove.AttractGuardianAnimal)) {
        var takeCard = false
        for (const reserveRow of reserveRows) {
            for (const card of reserveRow) {
                if (card != null && getAnimalsResource(line, Resource.Sun) >= getGuardianAnimalDetails(card).cost) {
                    takeCard = true
                }
            }
        }
        if (takeCard) availableMoves.push(ActionMove.AttractGuardianAnimal)
    }
    //Extinguish fire
    if (!actionMoves.includes(ActionMove.ExtinguishFire)) {
        var extinguishFire = false
        fire.forEach(function (fire) {
            if (fire != null) {
                if (getAnimalsResource(line, Resource.Drop) >= fire + 1) {
                    extinguishFire = true
                }
            }
        })
        if (extinguishFire) availableMoves.push(ActionMove.ExtinguishFire)
    }
    //Move forward circle of spirits
    if (!actionMoves.includes(ActionMove.MoveCircleOfSpirits)) {
        if (getAnimalsResource(line, Resource.Wind) > 0) {
            availableMoves.push(ActionMove.MoveCircleOfSpirits)
        }
    }
    // Plant one and only one Protective Tree action 

    if (!actionMoves.includes(ActionMove.PlantTree) || bonus === ActionMove.PlantTree) {
        var plantTree = false
        Object.entries(dispenser).forEach(function (tree, index) {
            if (tree != null) {
                if (getAnimalsResource(line, Resource.Seed) >= getProtectiveTreeDetails(index + 1).cost!) {
                    plantTree = true
                }
            }
        })
        if (plantTree) availableMoves.push(ActionMove.PlantTree)
    }
    return availableMoves
}

export function isAvailableMove(move: ActionMove, ongoingMove: ActionMove | null, bonus: ActionMove | null, actionMoves: ActionMove[], ready: boolean): boolean {
    if (!ready) {
        return true
    }
    return false
    return (!ready && ((!actionMoves.includes(move) || bonus == move || bonus == ActionMove.AttractGuardianAnimal3) && (ongoingMove == null || ongoingMove == move))) ? true : false
}