import { CustomMove, isCustomMoveType, MaterialMove, PlayerTurnRule, RuleMove, RuleStep } from '@gamepark/rules-api'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import SpiritOfNature from '../../SpiritOfNature'
import { CustomMoveType } from '../CustomMoveType'
import { PlayerState } from '../helper/PlayerState'
import { rockRules } from '../helper/RockRule'
import { Memory } from '../Memory'
import { RuleId } from '../RuleId'
import { AttractAnimalsRule } from './AttractAnimalsRule'
import { ExtinguishFireRule } from './ExtinguishFireRule'
import { PlantProtectiveTreeRule } from './PlantProtectiveTreeRule'
import { TakeFragmentRule } from './TakeFragmentRule'
import { CallKodamaRule } from './CallKodamaRule'

export class MoveOnCircleOfSpiritRule extends PlayerTurnRule {

  onRuleStart(_move: RuleMove, previous?: RuleStep) {
    // If there is any remaining move, trigger MoveOnCircleOfSpirit to the position
    if (this.remainingMoves) {
      const moves = this.getStandeeDestinations(this.remainingMoves)
      return moves.slice(-1)
    } else if (previous?.id === RuleId.PickVictoryTile) {
      const space = this.standee.getItem()!.location.x!
      return this.applyAction(space)
    }

    return []
  }

  private applyAction(space: number) {
    const ruleId = rockRules[space]
    const hasAction = this.canDoAction(ruleId)
    if (!hasAction) this.memorize(Memory.Actions, (action) => action - 1)
    this.forget(Memory.RemainingMoves)
    return [this.rules().startRule(!hasAction ? RuleId.Action : ruleId)]
  }

  getPlayerMoves(): MaterialMove<number, number, number>[] {
    const resources = this.playerState.windResources
    return this.getStandeeDestinations(resources)
  }

  getStandeeDestinations(maxMoves: number) {
    const standee = this.standee
    const position = standee.getItem()!.location.x!
    const moves: MaterialMove[] = []
    const rocks = rockRules

    let max = maxMoves
    for (let i = 1; i <= max; i++) {
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

      // Ignore path with greater distance
      if (!moves.some((m) => isCustomMoveType(CustomMoveType.MoveOnCircleOfSpirit)(m) && m.data.target === newPosition)) {
        moves.push(this.rules().customMove(CustomMoveType.MoveOnCircleOfSpirit, { target: newPosition, distance: i }))
      }
    }

    return moves
  }

  onCustomMove(move: CustomMove) {
    if (!isCustomMoveType(CustomMoveType.MoveOnCircleOfSpirit)(move)) return []
    delete this.game.droppedItem
    const standee = this.standee
    const position = standee.getItem()!.location.x!
    const { distance } = move.data
    const rocks = rockRules

    const moves: MaterialMove[] = []
    const passedPlayers: SpiritOfNature[] = []
    for (let i = 1; i <= distance; i++) {
      let newPosition = position + i
      if (newPosition >= rocks.length) {
        newPosition = newPosition % (rocks.length)
      }

      const standeeOnPosition = this
        .material(MaterialType.SpiritOfNatureStandee)
        .location((location) => LocationType.CircleOfSpiritBoardSpace === location.type && location.x === newPosition)
      if (standeeOnPosition.length) {
        const player = standeeOnPosition.getItem()!.id
        if (!passedPlayers.includes(player) && this.material(MaterialType.VictoryTile).player(player).length) {
          passedPlayers.push(player)
        }
      } else {
        moves.push(standee.moveItem({ type: LocationType.CircleOfSpiritBoardSpace, x: newPosition }))
        if (passedPlayers.length > 0 && this.material(MaterialType.VictoryTile).player((p: SpiritOfNature | undefined) => !!p && passedPlayers.includes(p)).length) {
          this.memorize(Memory.PassedPlayers, passedPlayers)
          this.memorize(Memory.RemainingMoves, (remaining) => remaining === undefined ? distance - i : remaining - i)
          moves.push(this.rules().startRule(RuleId.PickVictoryTile))
          return moves
        }

      }
    }


    // Only decrease action count if there is no bonus action
    const space = move.data.target
    moves.push(...this.applyAction(space))
    return moves
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
      case RuleId.CallKodama:
        return new CallKodamaRule(this.game).getPlayerMoves().length
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
}