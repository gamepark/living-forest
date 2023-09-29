import { CustomMove, isCustomMoveType, isMoveItemType, ItemMove, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { Memory } from './Memory'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import { PlayerState } from './helper/PlayerState'
import { RuleId } from './RuleId'
import { AttractAnimalsRule } from './actions/AttractAnimalsRule'
import { ExtinguishFireRule } from './actions/ExtinguishFireRule'
import { TakeFragmentRule } from './actions/TakeFragmentRule'
import { MoveOnCircleOfSpiritRule } from './actions/MoveOnCircleOfSpiritRule'
import { PlantProtectiveTreeRule } from './actions/PlantProtectiveTreeRule'
import { TurnOrder } from './helper/TurnOrder'
import ProtectiveTree from '../../material/ProtectiveTree'
import { CustomMoveType } from './CustomMoveType'


export class ActionRule extends PlayerTurnRule {

  onRuleStart() {
    const end = this.mayGoToEndOfTurn

    if (end.length) return end
    if (this.actionCount !== undefined) return []

    const playerState = new PlayerState(this.game, this.player)
    const actionCount = playerState.solidarityGregariousDifference === 3? 1: 2
    this.memorize(Memory.Actions, actionCount)
    return []
  }

  getPlayerMoves(): MaterialMove<number, number, number>[] {
    const moves = []

    const lastAction = this.lastAction
    if (lastAction !== RuleId.TakeFragment) moves.push(...new TakeFragmentRule(this.game).getPlayerMoves())
    if (lastAction !== RuleId.AttractAnimals) moves.push(...new AttractAnimalsRule(this.game).getPlayerMoves())
    if (lastAction !== RuleId.ExtinguishFire) moves.push(...new ExtinguishFireRule(this.game).getPlayerMoves())
    if (lastAction !== RuleId.MoveOnCircleOfSpirit) moves.push(...new MoveOnCircleOfSpiritRule(this.game).getPlayerMoves())
    if (lastAction !== RuleId.PlantTree) moves.push(...new PlantProtectiveTreeRule(this.game).getPlayerMoves())
    return moves;
  }

  onCustomMove(move: CustomMove) {
    // Move spirit of nature (may trigger a new rule change)
    if (isCustomMoveType(CustomMoveType.MoveOnCircleOfSpirit)(move)) {
      this.memorizeLastAction(RuleId.MoveOnCircleOfSpirit)
      const moves = new MoveOnCircleOfSpiritRule(this.game).onCustomMove(move)
      if (moves) {
        return moves;
      }
    }

    return this.mayGoToEndOfTurn
  }

  afterItemMove(move: ItemMove): MaterialMove[] {

    // Ignore move of spirit
    if (this.isMoveMaterialOnLocation(MaterialType.SpiritOfNatureStandee, LocationType.CircleOfSpiritBoardSpace)(move)) return []

    // Take fragment: nothing happen here, only forgot later
    if (this.isMoveMaterialOnLocation(MaterialType.FragmentTile, LocationType.PlayerFragmentTileStack)(move)) {
      this.memorizeLastAction(RuleId.TakeFragment)
      const takeFragment = new TakeFragmentRule(this.game)
      // Here, we don't care about consequences
      takeFragment.afterItemMove(move)
      takeFragment.onRuleEnd()
    }

    // Attract animals
    if (this.isMoveMaterialOnLocation(MaterialType.GuardianAnimalCard, LocationType.PlayerDeckStack)(move)) {
      this.memorizeLastAction(RuleId.AttractAnimals)
      const attractRule = new AttractAnimalsRule(this.game)
      // Here, we don't care about consequences
      attractRule.afterItemMove(move)
      if (attractRule.possible) {
        return [this.rules().startRule(RuleId.AttractAnimals)]
      } else {
        attractRule.onRuleEnd()
      }
    }

    // Stop fire
    if (this.isMoveMaterialOnLocation(MaterialType.FireTile, LocationType.PlayerFireTileStack)(move)) {
      this.memorizeLastAction(RuleId.ExtinguishFire)
      const estinguishFire = new ExtinguishFireRule(this.game)
      // Here, we don't care about consequences
      estinguishFire.afterItemMove(move)
      if (estinguishFire.possible) {
        return [this.rules().startRule(RuleId.ExtinguishFire)]
      } else {
        estinguishFire.onRuleEnd()
      }
    }

    // Plant tree
    if (this.isMoveMaterialOnLocation(MaterialType.ProtectiveTreeTiles, LocationType.TreeSpace)(move)) {
      this.memorizeLastAction(RuleId.PlantTree)
      const moves = new PlantProtectiveTreeRule(this.game).afterItemMove(move)
      if (moves) {
        return moves;
      }
    }
    return this.mayGoToEndOfTurn
  }

  isMoveMaterialOnLocation(type: MaterialType, location: LocationType) {
    return (move: ItemMove) => isMoveItemType(type)(move) && move.position.location?.type === location
  }

  get mayGoToEndOfTurn() {
    if (this.getPlayerMoves().length && (this.actionCount === undefined || this.actionCount > 0)) return []
    this.forget(Memory.Actions)
    this.forget(Memory.SpentPoints)
    this.forget(Memory.LastAction)
    const turnOrder = new TurnOrder(this.game)
    if (turnOrder.isLastPlayer(this.player)) {

      // If someone has triggered the end of game and all players played => end of the game
      if (this.game.players.some((player) => new PlayerState(this.game, player).hasEnded)) {
        return [this.rules().endGame()]
      }

      return [this.rules().startRule(RuleId.EndOfTurn)]
    }

    return [this.rules().startPlayerTurn(RuleId.Action, turnOrder.getNextPlayer(this.player))]
  }

  memorizeLastAction(ruleId: RuleId) {
    const specialTree = this.material(MaterialType.ProtectiveTreeTiles)
      .location(LocationType.TreeSpace)
      .player(this.player)
      .id(ProtectiveTree.Tree11)

    if (specialTree.length) return;
    this.memorize(Memory.LastAction, ruleId)
  }

  get lastAction() {
    return this.remind<RuleId>(Memory.LastAction)
  }

  get actionCount() {
    return this.remind(Memory.Actions)
  }
}