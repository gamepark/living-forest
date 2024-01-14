import {isMoveItemType, isShuffleItemType} from '@gamepark/rules-api'
import {MaterialGameAnimations} from '@gamepark/react-game'
import {LocationType} from '@gamepark/living-forest/material/LocationType'
import {MaterialType} from '@gamepark/living-forest/material/MaterialType'
import {RuleId} from '@gamepark/living-forest/rules/RuleId'

export const livingForestAnimations = new MaterialGameAnimations()

livingForestAnimations
  .when()
  .rule(RuleId.ReturnOfGuardianAnimals)
  .move((move, context) =>
    isMoveItemType(MaterialType.GuardianAnimalCard)(move)
    && move.location?.type === LocationType.PlayerDiscardStack
    && context.rules.game.items[move.itemType]![move.itemIndex].location.type === LocationType.HelpLine
  )
  .duration(0.4)

livingForestAnimations
  .when()
  .move((move, context) => isMoveItemType(MaterialType.GuardianAnimalCard)(move)
    && move.location?.type === LocationType.PlayerDeckStack
    && context.rules.game.items[move.itemType]![move.itemIndex].location.type === LocationType.PlayerDiscardStack
  )
  .duration(0.4)

livingForestAnimations
  .when()
  .move((move, context) => isMoveItemType(MaterialType.GuardianAnimalCard)(move)
    && move.location?.type === LocationType.HelpLine
    && context.rules.game.items[move.itemType]![move.itemIndex].location.type === LocationType.PlayerDeckStack
  )
  .duration(0.4)

livingForestAnimations
  .when()
  .move(isShuffleItemType(MaterialType.GuardianAnimalCard))
  .none()