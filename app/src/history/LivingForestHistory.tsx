/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { RuleId } from '@gamepark/living-forest/rules/RuleId'
import { linkButtonCss, MaterialHistoryProps } from '@gamepark/react-game'
import { isEndGame, isMoveItemType, isStartPlayerTurn, isStartRule, isStartSimultaneousRule, MaterialGame } from '@gamepark/rules-api'
import { FC } from 'react'
import { ActionRuleHistory } from './entry/ActionRuleHistory'
import { AttractAnimalRuleHistory } from './entry/AttractAnimalRuleHistory'
import { EndGameHistory } from './entry/EndGameHistory'
import { ExtinguishFireRuleHistory } from './entry/ExtinguishFireRuleHistory'
import { GuardianAnimalRuleHistory } from './entry/GuardianAnimalRuleHistory'
import { NewRoundHistory } from './entry/NewRoundHistory'
import { OnibiAttacksPlayerRuleHistory } from './entry/OnibiAttacksPlayerRuleHistory'
import { OnibiAttacksSacredTreeRuleHistory } from './entry/OnibiAttacksSacredTreeRuleHistory'
import { PickVictoryTileRuleHistory } from './entry/PickVictoryTileRuleHistory'
import { PlayerTurnHistory } from './entry/PlayerTurnHistory'

export type LivingForestHistoryProps = {
  game: MaterialGame
} & MaterialHistoryProps

export const LivingForestHistoryHistory: FC<MaterialHistoryProps> = (props) => {
  const { move, context } = props
  const game = context.game

  if (game.rule?.id === RuleId.PassingSacredTree && isStartSimultaneousRule(move) && move.id === RuleId.GuardianAnimals) {
    return <NewRoundHistory/>
  }

  if (isStartPlayerTurn(move) && move.id === RuleId.Action) {
    return <PlayerTurnHistory move={move} context={context}/>
  }

  if (game.rule?.id === RuleId.Action) {
    return <ActionRuleHistory move={move} context={context}/>
  }

  if (game.rule?.id === RuleId.PickVictoryTile && isMoveItemType(MaterialType.VictoryTile)(move)) {
    return <PickVictoryTileRuleHistory move={move} context={context}/>
  }

  if (game.rule?.id === RuleId.GuardianAnimals) {
    return <GuardianAnimalRuleHistory move={move} context={context}/>
  }

  if (game.rule?.id === RuleId.AttractAnimals) {
    return <AttractAnimalRuleHistory move={move} context={context}/>
  }

  if (game.rule?.id === RuleId.ExtinguishFire) {
    return <ExtinguishFireRuleHistory move={move} context={context}/>
  }

  if (isStartRule(move) && move.id === RuleId.OnibiAttacksPlayer) {
    return <OnibiAttacksPlayerRuleHistory move={move} context={context}/>
  }

  if (isStartRule(move) && move.id === RuleId.OnibiAttacksSacredTree) {
    return <OnibiAttacksSacredTreeRuleHistory move={move} context={context}/>
  }

  if (isEndGame(move)) {
    return <EndGameHistory/>
  }

  return null

}

export const rulesLinkButton = [linkButtonCss, css`
  background-color: transparent;
  font-style: italic;
  font-weight: bold;
`]

export const noBorder = css`
  border: 0
`

export const pictureCss = css`
  white-space: break-spaces;

  > picture, img {
    height: 1.8em;
    width: 1.8em;
    vertical-align: sub;
  }
`

export const bold = css`
  font-weight: bold;
`
