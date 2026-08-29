import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { RuleId } from '@gamepark/living-forest/rules/RuleId'
import { and, isRule, MaterialGameAnimations } from '@gamepark/react-game'
import { isMoveItemType, isShuffleItemType } from '@gamepark/rules-api'

export const livingForestAnimations = new MaterialGameAnimations()

livingForestAnimations
  .configure(and(
    isRule(RuleId.ReturnOfGuardianAnimals),
    (move, context) =>
      isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      && move.location?.type === LocationType.PlayerDiscardStack
      && context.rules.game.items[move.itemType]![move.itemIndex].location.type === LocationType.HelpLine
  ))
  .duration(200)

livingForestAnimations
  .configure((move, context) => isMoveItemType(MaterialType.GuardianAnimalCard)(move)
    && move.location?.type === LocationType.PlayerDeckStack
    && context.rules.game.items[move.itemType]![move.itemIndex].location.type === LocationType.PlayerDiscardStack
  )
  .duration(100)

livingForestAnimations
  .configure((move, context) => isMoveItemType(MaterialType.GuardianAnimalCard)(move)
    && move.location?.type === LocationType.HelpLine
    && context.rules.game.items[move.itemType]![move.itemIndex].location.type === LocationType.PlayerDeckStack
  )
  .duration(400)

livingForestAnimations
  .configure((move) => isMoveItemType(MaterialType.FireTile)(move) && move.location.type === LocationType.CircleOfSpiritBoardFire)
  .duration(400)

livingForestAnimations
  .configure((move) => isMoveItemType(MaterialType.GuardianAnimalCard)(move) && move.location.type === LocationType.ReserveRow)
  .duration(400)

livingForestAnimations
  .configure((move) => isMoveItemType(MaterialType.FireTile)(move) && move.location.type === LocationType.PlayerFireTileStack)
  .duration(800)


livingForestAnimations
  .configure((move, context) => isMoveItemType(MaterialType.FireTile)(move)
    && move.location?.type === LocationType.ReserveRow
    && context.rules.game.items[move.itemType]![move.itemIndex].location.type === LocationType.PlayerDeckStack
  )
  .duration(800)


livingForestAnimations
  .configure((move) => isMoveItemType(MaterialType.FragmentTile)(move)
    && move.location?.type === LocationType.FragmentStack
  )
  .duration(700)

livingForestAnimations
  .configure(isShuffleItemType(MaterialType.GuardianAnimalCard))
  .skip()