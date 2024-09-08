import { isEndPlayerTurn, isMoveItemType, MaterialGame, MaterialMove, RandomBot } from '@gamepark/rules-api'
import partition from 'lodash/partition'
import { LivingForestRules } from '../LivingForestRules'
import { isVaran } from '../material/GuardianAnimal'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import { PlayerState } from '../rules/helper/PlayerState'
import { RuleId } from '../rules/RuleId'
import SpiritOfNature from '../SpiritOfNature'

export class LivingForestBot extends RandomBot<MaterialGame<SpiritOfNature, MaterialType, LocationType>, MaterialMove<SpiritOfNature, MaterialType, LocationType>, SpiritOfNature> {

  constructor(player: SpiritOfNature) {
    super(LivingForestRules, player)
  }

  override getLegalMoves(game: MaterialGame<SpiritOfNature, MaterialType, LocationType>): MaterialMove<SpiritOfNature, MaterialType, LocationType>[] {
    const rules = new LivingForestRules(game)
    const legalMoves = super.getLegalMoves(game)
    if (game.rule?.id === RuleId.GuardianAnimals) {
      const playerState = new PlayerState(game, this.player)
      const lastHelpCard = rules
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.HelpLine)
        .player(this.player)
        .maxBy((item) => item.location.x!).getItem()

      const [spendFragment, drawOrPass] = partition(legalMoves, move =>
        isMoveItemType<SpiritOfNature, MaterialType, LocationType>(MaterialType.FragmentTile)(move) && move.location.type === LocationType.FragmentStack
      )
      if (lastHelpCard && isVaran(lastHelpCard.id)) {
        if (spendFragment.length) return spendFragment
      }

      const [pass, draw] = partition(drawOrPass, isEndPlayerTurn)
      const diff = playerState.solidarityGregariousDifference
      if (diff === 2 && pass.length) return pass
      return draw
    }

    if (game.rule?.id === RuleId.Action && game.rule.player === this.player) {
      const moves = legalMoves.filter((move) => !isMoveItemType<SpiritOfNature, MaterialType, LocationType>(MaterialType.FragmentTile)(move))
      if (moves.length) return moves
    }

    return legalMoves
  }
}
