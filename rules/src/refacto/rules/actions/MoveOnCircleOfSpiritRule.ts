import { CustomMove, isCustomMoveType, MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { PlayerState } from '../helper/PlayerState'
import { LocationType } from '../../material/LocationType'
import { RuleId } from '../RuleId'
import { PlantProtectiveTreeRule } from './PlantProtectiveTreeRule'
import { TakeFragmentRule } from './TakeFragmentRule'
import { ExtinguishFireRule } from './ExtinguishFireRule'
import { AttractAnimalsRule } from './AttractAnimalsRule'
import { Memory } from '../Memory'
import { CustomMoveType } from '../CustomMoveType'
import SpiritOfNature from '../../../SpiritOfNature'

export class MoveOnCircleOfSpiritRule extends PlayerTurnRule {

  onRuleStart() {
    // If there is any remaining move, trigger MoveOnCircleOfSpiri to the position
    if (this.remainingMoves) {
      const moves = this.getStandeeDestinations(this.remainingMoves)
      return moves.slice(-1)
    }

    return []
  }


  getPlayerMoves(): MaterialMove<number, number, number>[] {
    const resources = this.playerState.windResources
    return this.getStandeeDestinations(resources)

  }

  getStandeeDestinations(maxMoves: number) {
    const standee = this.standee
    const position = standee.getItem()!.location.x!
    const moves: MaterialMove[] = []
    const rocks = this.rockRules

    let max = maxMoves
    for (let  i = 1; i <= max; i++) {
      let newPosition = position + i
      if (newPosition >= rocks.length) {
        newPosition = newPosition % (rocks.length)
      }

      const isStandeeOnNewPosition = !!this
        .material(MaterialType.SpiritOfNatureStandee)
        .location((location) => LocationType.CircleOfSpiritBoardSpace === location.type && location.x === newPosition)
        .length
      if (isStandeeOnNewPosition) {
        max++
        continue
      }
      moves.push(this.rules().customMove(CustomMoveType.MoveOnCircleOfSpirit, { target: newPosition, distance: i }))
    }

    return moves;
  }

  onCustomMove(move: CustomMove) {
    if (!isCustomMoveType(CustomMoveType.MoveOnCircleOfSpirit)(move)) return []
    delete this.game.droppedItem
    const standee = this.standee
    const position = standee.getItem()!.location.x!
    const { distance } = move.data
    const rocks = this.rockRules
    let passedPlayer: undefined | SpiritOfNature = undefined

    const moves: MaterialMove[] = []
    for (let i = 1; i <= distance; i++) {
      let newPosition = position + i
      if (newPosition >= rocks.length) {
        newPosition = newPosition % (rocks.length)
      }

      const standeeOnPosition = this.material(MaterialType.SpiritOfNatureStandee).location((location) => LocationType.CircleOfSpiritBoardSpace === location.type && location.x === newPosition)

      if (!standeeOnPosition.length) moves.push(standee.moveItem({ location: { type: LocationType.CircleOfSpiritBoardSpace, x: newPosition}}))

      if (passedPlayer) {
        this.memorize(Memory.RemainingMoves, (remaining) => remaining === undefined? distance - i: remaining - i)
        moves.push(this.rules().startRule(RuleId.PickVictoryTile))
        return moves;
      }

      if (standeeOnPosition.length) passedPlayer = standeeOnPosition.getItem()!.id
    }


    // Only decrease action count if there is no bonus action
    const space = move.data
    const ruleId = this.rockRules[space]
    const hasAction = this.canDoAction(ruleId)
    if (!hasAction) this.memorize(Memory.Actions, (action) => action - 1)
    this.forget(Memory.RemainingMoves)
    moves.push(this.rules().startRule(!hasAction? RuleId.Action: ruleId))
    return moves;
  }

  canDoAction(ruleId: RuleId) {
    switch (ruleId) {
      case RuleId.PlantTree:
        return new PlantProtectiveTreeRule(this.game).getPlayerMoves().length
      case RuleId.TakeFragment:
        return new TakeFragmentRule(this.game).getPlayerMoves().length
      case RuleId.ExtinguishFire:
        return new ExtinguishFireRule(this.game).getPlayerMoves().length
      case RuleId.AttractAnimals:
        return new AttractAnimalsRule(this.game).getPlayerMoves().length
    }

    return false
  }

  get remainingMoves() {
    return this.remind<number | undefined>(Memory.RemainingMoves)
  }

  get standee() {
    return this.material(MaterialType.SpiritOfNatureStandee).id(this.player)
  }

  get playerState() {
    return new PlayerState(this.game, this.player)
  }

  get rockRules() {
    return [
      RuleId.PlantTree,
      RuleId.TakeFragment,
      RuleId.AttractAnimals,
      RuleId.TakeFragment,
      RuleId.ExtinguishFire,
      RuleId.TakeFragment,
      RuleId.PlantTree,
      RuleId.TakeFragment,
      RuleId.AttractAnimals,
      RuleId.TakeFragment,
      RuleId.ExtinguishFire,
      RuleId.TakeFragment,
    ]
  }
}