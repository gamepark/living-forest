import { isMoveItemType, ItemMove, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { Memory } from './Memory'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import { HelpLine } from './helper/HelpLine'
import { RuleId } from './RuleId'
import { AttractAnimalsRule } from './actions/AttractAnimalsRule'
import { ExtinguishFireRule } from './actions/ExtinguishFireRule'
import { TakeFragmentRule } from './actions/TakeFragmentRule'
import { MoveOnCircleOfSpiritRule } from './actions/MoveOnCircleOfSpiritRule'
import { PlantProtectiveTreeRule } from './actions/PlantProtectiveTreeRule'
import { TurnOrder } from './helper/TurnOrder'


export class ActionRule extends PlayerTurnRule {

  onRuleStart() {
    const end = this.mayGoToEndOfTurn
    if (end.length) return end

    if (this.actionCount !== undefined) return []

    const helpLine = new HelpLine(this.game, this.player)
    const actionCount = helpLine.solidarityGregariousDifference === 3? 1: 2
    this.memorize(Memory.Actions, actionCount)
    return []
  }

  getPlayerMoves(): MaterialMove<number, number, number>[] {
    const moves = []

    moves.push(...new TakeFragmentRule(this.game).getPlayerMoves())
    moves.push(...new AttractAnimalsRule(this.game).getPlayerMoves())
    moves.push(...new ExtinguishFireRule(this.game).getPlayerMoves())
    moves.push(...new MoveOnCircleOfSpiritRule(this.game).getPlayerMoves())
    moves.push(...new PlantProtectiveTreeRule(this.game).getPlayerMoves())
    return moves;
  }

  afterItemMove(move: ItemMove): MaterialMove[] {
    // Take fragment: nothing happen here, only forgot later
    if (this.isMoveMaterialOnLocation(MaterialType.FragmentTile, LocationType.ForestBoard)(move)) {
      // Here, we don't care about consequences
      new TakeFragmentRule(this.game).afterItemMove(move)
    }

    // Attract animals
    if (this.isMoveMaterialOnLocation(MaterialType.GuardianAnimalCard, LocationType.PlayerDeckStack)(move)) {
      const attractRule = new AttractAnimalsRule(this.game)
      // Here, we don't care about consequences
      attractRule.afterItemMove(move)
      if (attractRule.possible) {
        return [this.rules().startRule(RuleId.AttractAnimals)]
      }
    }

    // Stop fire
    if (isMoveItemType(MaterialType.FireTile, LocationType.ForestBoard)(move)) {
      const estinguishFire = new ExtinguishFireRule(this.game)
      // Here, we don't care about consequences
      estinguishFire.afterItemMove(move)
      if (estinguishFire.possible) {
        return [this.rules().startRule(RuleId.ExtinguishFire)]
      }
    }

    // Move spirit of nature (may trigger a new rule change)
    if (this.isMoveMaterialOnLocation(MaterialType.SpiritOfNatureStandee, LocationType.ForestBoard)(move)) {
      const moves = new MoveOnCircleOfSpiritRule(this.game).afterItemMove(move)
      if (moves) {
        return moves;
      }
    }

    // Plant tree
    if (this.isMoveMaterialOnLocation(MaterialType.ProtectiveTreeTiles, LocationType.ForestBoard)(move)) {
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
    if (this.actionCount === undefined || this.actionCount > 0) return []
    const turnOrder = new TurnOrder(this.game)
    if (turnOrder.isLastPlayer(this.player)) {
      return [this.rules().startRule(RuleId.EndOfTurn)]
    }

    return [this.rules().startPlayerTurn(RuleId.Action, turnOrder.getNextPlayer(this.player))]
  }

  get actionCount() {
    return this.remind(Memory.Actions)
  }

  onRuleEnd() {
    this.forget(Memory.Actions)
    this.forget(Memory.SpentPoints)
    return []
  }
}