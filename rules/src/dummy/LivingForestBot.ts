import { isEndPlayerTurn, isMoveItemType, MaterialGame, MaterialMove, RandomBot } from '@gamepark/rules-api'
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

      if (lastHelpCard && isVaran(lastHelpCard.id)) {
        const moves = legalMoves.filter((move) => isMoveItemType<SpiritOfNature, MaterialType, LocationType>(MaterialType.FragmentTile)(move) && move.location.type === LocationType.FragmentStack)
        if (moves.length) return moves
      }

      const remainingMoves = legalMoves.filter((move) => !isMoveItemType<SpiritOfNature, MaterialType, LocationType>(MaterialType.FragmentTile)(move))
      const diff = playerState.solidarityGregariousDifference
      if (diff < 3) {
        if (diff === 2) {
          return remainingMoves.filter((move) => isEndPlayerTurn(move))
        }
        const moves = remainingMoves.filter((move) => isMoveItemType<SpiritOfNature, MaterialType, LocationType>(MaterialType.GuardianAnimalCard)(move) && move.location.type === LocationType.HelpLine)
        if (moves.length) return moves
      }
    }

    if (game.rule?.id === RuleId.Action && game.rule.player === this.player) {
      const moves = legalMoves.filter((move) => !isMoveItemType<SpiritOfNature, MaterialType, LocationType>(MaterialType.FragmentTile)(move))
      if (moves.length) return moves
    }

    return legalMoves
  }
}
