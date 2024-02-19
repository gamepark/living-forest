/** @jsxImportSource @emotion/react */
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'
import { Memory } from '@gamepark/living-forest/rules/Memory'
import { MaterialHistoryProps } from '@gamepark/react-game'
import { isCustomMoveType, isMoveItemType } from '@gamepark/rules-api'
import { FC } from 'react'
import { AttractAnimalRuleHistory } from './AttractAnimalRuleHistory'
import { CurrentActionHistory } from './CurrentActionHistory'
import { ExtinguishFireRuleHistory } from './ExtinguishFireRuleHistory'
import { MoveOnCircleBoardRuleHistory } from './MoveOnCircleBoardRuleHistory'
import { PlantTreeRuleHistory } from './PlantTreeRuleHistory'
import { SkipSecondActionHistory } from './SkipSecondActionHistory'
import { TakeFragmentRuleHistory } from './TakeFragmentRuleHistory'

type ActionRuleHistoryProps = {} & MaterialHistoryProps

export const ActionRuleHistory: FC<ActionRuleHistoryProps> = (props) => {
  const { move, context } = props
  //const playerId = usePlayerId()
  //const actionPlayer = context.action.playerId
  //const itsMe = playerId && actionPlayer === playerId
  //const name = usePlayerName(actionPlayer)
  const rules = new LivingForestRules(JSON.parse(JSON.stringify(context.game)))
  const remainingActionBefore = rules.remind(Memory.Actions)
  const player = rules.getActivePlayer()
  rules.play(move)
  const remainingActionAfter = rules.remind(Memory.Actions)
  const hasSkippedAction = remainingActionBefore === 2 && !remainingActionAfter
  if (isMoveItemType(MaterialType.FragmentTile)(move) && move.location.type === LocationType.PlayerFragmentTileStack) {
    return (
      <>
        <CurrentActionHistory move={move} context={context} />
        <TakeFragmentRuleHistory move={move} context={context} />
        { hasSkippedAction && <SkipSecondActionHistory player={player!} context={context} />}
      </>
    )
  }

  if (isCustomMoveType(CustomMoveType.MoveOnCircleOfSpirit)(move)) {
    return (
      <>
        <CurrentActionHistory move={move} context={context} />
        <MoveOnCircleBoardRuleHistory move={move} context={context} />
        { hasSkippedAction && <SkipSecondActionHistory player={player!} context={context} />}
      </>
    )
  }

  if (isMoveItemType(MaterialType.ProtectiveTreeTiles)(move) && move.location.type === LocationType.TreeSpace) {
    return (
      <>
        <CurrentActionHistory move={move} context={context} />
        <PlantTreeRuleHistory move={move} context={context} />
        { hasSkippedAction && <SkipSecondActionHistory player={player!} context={context} />}
      </>
    )
  }

  if (isMoveItemType(MaterialType.GuardianAnimalCard)(move) && move.location.type === LocationType.PlayerDeckStack) {
    return (
      <>
        <CurrentActionHistory move={move} context={context} />
        <AttractAnimalRuleHistory move={move} context={context} />
        { hasSkippedAction && <SkipSecondActionHistory player={player!} context={context} />}
      </>
    )
  }

  if (isMoveItemType(MaterialType.FireTile)(move) && move.location.type === LocationType.PlayerFireTileStack) {
    return (
      <>
        <CurrentActionHistory move={move} context={context} />
        <ExtinguishFireRuleHistory move={move} context={context} />
        { hasSkippedAction && <SkipSecondActionHistory player={player!} context={context} />}
      </>
    )
  }

  return null

}