import { isMoveItemType, isShuffleItemType, MaterialMove } from '@gamepark/rules-api'
import { AnimationStep } from '@gamepark/react-client'
import { MaterialAnimationContext, MaterialGameAnimations } from '@gamepark/react-game'
import { LocationType } from '@gamepark/living-forest/refacto/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { RuleId } from '@gamepark/living-forest/refacto/rules/RuleId'

export class LivingForestAnimations extends MaterialGameAnimations {

  override getDuration(move: MaterialMove, context: MaterialAnimationContext): number {
    if (isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      && move.position.location?.type === LocationType.PlayerDiscardStack
      && context.game.items[move.itemType]![move.itemIndex].location.type === LocationType.HelpLine
      && context.step === AnimationStep.BEFORE_MOVE
      && context.game.rule?.id === RuleId.ReturnOfGuardianAnimals
    ) return 0.4

    if (isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      && move.position.location?.type === LocationType.PlayerDeckStack
      && context.game.items[move.itemType]![move.itemIndex].location.type === LocationType.PlayerDiscardStack
      && context.step === AnimationStep.BEFORE_MOVE
    ) return 0.4

    if (isShuffleItemType(MaterialType.GuardianAnimalCard)(move)) return 0
    return super.getDuration(move, context);
  }
}