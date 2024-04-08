import { MaterialMove, PlayerTurnRule } from '@gamepark/rules-api'
import { GuardianAnimalDescriptions } from '../../material/GuardianAnimalDescriptions'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import Resource from '../../material/Resource'
import { Memory, SpentPoint } from '../Memory'
import { RuleId } from '../RuleId'
import { PlayerState } from '../helper/PlayerState'

export class CallKodamaRule extends PlayerTurnRule {

  getPlayerMoves(): MaterialMove<number, number, number>[] {
    const moves: MaterialMove[] = this.callKodamaMoves
    if (this.playerState.getSpent(Resource.SacredFlower)) {
      moves.push(this.rules().startRule(RuleId.Action))
    }

    return moves
  }

  get playerState() {
    return new PlayerState(this.game, this.player)
  }

  get callKodamaMoves() {
    const resources = this.resources
    const kodamaStack = this.material(MaterialType.GuardianAnimalCard).location(LocationType.KodamaStack)
    return kodamaStack
      .filter((item) => GuardianAnimalDescriptions[item.id]!.cost <= resources)
      .moveItems({ type: LocationType.PlayerDeckStack, player: this.player })
  }

  get resources() {
    return this.playerState.flowers
  }

  onRuleEnd() {
    this.memorize<number>(Memory.Actions, (action) => action - 1)
    this.forget(Memory.Bonus)
    this.memorize<SpentPoint>(Memory.SpentPoints, (s) => {
      if (Resource.SacredFlower in s) delete s[Resource.SacredFlower]
      return s
    })
    return []
  }
}