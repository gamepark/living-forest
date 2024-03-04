import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { RuleId } from '@gamepark/living-forest/rules/RuleId'
import { MaterialGameAnimations } from '@gamepark/react-game'
import { isMoveItemType, isShuffleItemType } from '@gamepark/rules-api'

export const livingForestAnimations = new MaterialGameAnimations()

livingForestAnimations
  .when()
  .rule(RuleId.ReturnOfGuardianAnimals)
  .move((move, context) =>
    isMoveItemType(MaterialType.GuardianAnimalCard)(move)
    && move.location?.type === LocationType.PlayerDiscardStack
    && context.rules.game.items[move.itemType]![move.itemIndex].location.type === LocationType.HelpLine
  )
  .duration(0.3)

livingForestAnimations
  .when()
  .move((move, context) => isMoveItemType(MaterialType.GuardianAnimalCard)(move)
    && move.location?.type === LocationType.PlayerDeckStack
    && context.rules.game.items[move.itemType]![move.itemIndex].location.type === LocationType.PlayerDiscardStack
  )
  .duration(0.2)

livingForestAnimations
  .when()
  .move((move, context) => isMoveItemType(MaterialType.GuardianAnimalCard)(move)
    && move.location?.type === LocationType.HelpLine
    && context.rules.game.items[move.itemType]![move.itemIndex].location.type === LocationType.PlayerDeckStack
  )
  .duration(0.4)

livingForestAnimations
  .when()
  .move((move) => isMoveItemType(MaterialType.FireTile)(move) && move.location.type === LocationType.CircleOfSpiritBoardFire)
  .duration(0.4)

livingForestAnimations
  .when()
  .move((move) => isMoveItemType(MaterialType.GuardianAnimalCard)(move) && move.location.type === LocationType.ReserveRow)
  .duration(0.4)

livingForestAnimations
  .when()
  .move((move) => isMoveItemType(MaterialType.FireTile)(move) && move.location.type === LocationType.PlayerFireTileStack)
  .duration(0.8)


livingForestAnimations
  .when()
  .move((move, context) => isMoveItemType(MaterialType.FireTile)(move)
    && move.location?.type === LocationType.ReserveRow
    && context.rules.game.items[move.itemType]![move.itemIndex].location.type === LocationType.PlayerDeckStack
  )
  .duration(0.8)


livingForestAnimations
  .when()
  .move((move) => isMoveItemType(MaterialType.FragmentTile)(move)
    && move.location?.type === LocationType.FragmentStack
  )
  .duration(0.7)

livingForestAnimations
  .when()
  .move(isShuffleItemType(MaterialType.GuardianAnimalCard))
  .none()