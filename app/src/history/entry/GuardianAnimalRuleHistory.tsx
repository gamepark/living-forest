/** @jsxImportSource @emotion/react */
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { PlayerState } from '@gamepark/living-forest/rules/helper/PlayerState'
import { MaterialHistoryProps, PlayMoveButton, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { displayMaterialHelp, isEndPlayerTurn, isMoveItemType } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { getAnimalTranslation } from '../../utils/AnimalName'
import { rulesLinkButton } from '../LivingForestHistory'
import { ActionHistory } from './ActionHistory'

type GuardianAnimalRuleHistoryProps = {} & MaterialHistoryProps

export const GuardianAnimalRuleHistory: FC<GuardianAnimalRuleHistoryProps> = (props) => {
  const { move, context } = props
  const { t } = useTranslation()
  const playerId = usePlayerId()
  const actionPlayer = context.action.playerId
  const itsMe = playerId && actionPlayer === playerId
  const name = usePlayerName(actionPlayer)
  const game = context.game

  if (isMoveItemType(MaterialType.FragmentTile)(move) && move.location?.type === LocationType.FragmentStack) {
      return (
        <ActionHistory context={context}>
          <Trans defaults={itsMe ? 'history.guardian.fragment.me' : 'history.guardian.fragment'} values={{
            player: name,
          }}>
            <strong/>
          </Trans>
        </ActionHistory>
      )
  }

  if (isMoveItemType(MaterialType.GuardianAnimalCard)(move) ) {
    const itemId = game.items[move.itemType][move.itemIndex]?.id ?? move.reveal?.id

    if (move.location?.type === LocationType.HelpLine) {
      return (
        <ActionHistory context={context}>
          <Trans defaults={itsMe ? 'history.guardian.draw.me' : 'history.guardian.draw'} values={{
            player: name,
            card: getAnimalTranslation(t, itemId)
          }}>
            <strong/>
            <PlayMoveButton css={rulesLinkButton} move={displayMaterialHelp(MaterialType.GuardianAnimalCard, { id: itemId})} local/>
          </Trans>
        </ActionHistory>
      )
    }

    if (move.location?.type === LocationType.PlayerDiscardStack) {
      return (
        <ActionHistory consequence context={context}>
          <Trans defaults={itsMe ? 'history.guardian.discard.me' : 'history.guardian.discard'} values={{
            player: name,
            card: getAnimalTranslation(t, itemId)
          }}>
            <strong/>
            <PlayMoveButton css={rulesLinkButton} move={displayMaterialHelp(MaterialType.GuardianAnimalCard, { id: itemId})} local/>
          </Trans>
        </ActionHistory>
      )
    }

    if (move.location?.type === LocationType.VaranDeck) {
      return (
        <ActionHistory context={context}>
          <Trans defaults={itsMe ? 'history.guardian.varan.me' : 'history.guardian.varan'} values={{
            player: name
          }}>
            <strong/>
            <PlayMoveButton css={rulesLinkButton} move={displayMaterialHelp(MaterialType.GuardianAnimalCard, { id: GuardianAnimal.Varan })} local/>
          </Trans>
        </ActionHistory>
      )
    }
  }

  if (isEndPlayerTurn(move)) {
    const rules = new LivingForestRules(JSON.parse(JSON.stringify(context.game)))
    rules.play(move)
    const playerState = new PlayerState(rules.game, actionPlayer)
    const actionCount = playerState.solidarityGregariousDifference === 3? 1: 2
    return (
      <ActionHistory context={context}>
        <Trans defaults={itsMe ? 'history.guardian.pass.me' : 'history.guardian.pass'} values={{
          player: name,
          actions: actionCount
        }}>
          <strong/>
        </Trans>
      </ActionHistory>
    )
  }

  return null
}