/** @jsxImportSource @emotion/react */
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { PlayerState } from '@gamepark/living-forest/rules/helper/PlayerState'
import { HistoryEntry, MaterialHistoryProps, PlayMoveButton, usePlayerName } from '@gamepark/react-game'
import { displayMaterialHelp, isEndPlayerTurn, isMoveItemType } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { getAnimalTranslation } from '../../utils/AnimalName'
import { getColor } from '../../utils/ColorUtils'
import { rulesLinkButton } from '../LivingForestHistory'

type GuardianAnimalRuleHistoryProps = {} & MaterialHistoryProps

export const GuardianAnimalRuleHistory: FC<GuardianAnimalRuleHistoryProps> = (props) => {
  const { move, context } = props
  const { t } = useTranslation()
  const actionPlayer = context.action.playerId
  const name = usePlayerName(actionPlayer)
  const game = context.game

  if (isMoveItemType(MaterialType.FragmentTile)(move) && move.location?.type === LocationType.FragmentStack) {
    return (
      <HistoryEntry player={actionPlayer} backgroundColor={`${getColor(actionPlayer)}40`}>
        <Trans defaults="history.guardian.fragment" values={{
          player: name
        }}>
          <strong/>
        </Trans>
      </HistoryEntry>
    )
  }

  if (isMoveItemType(MaterialType.GuardianAnimalCard)(move)) {
    const itemId = move.reveal?.id ?? game.items[move.itemType][move.itemIndex]?.id

    if (move.location?.type === LocationType.HelpLine) {
      return (
        <HistoryEntry player={actionPlayer} backgroundColor={`${getColor(actionPlayer)}40`}>
          <Trans defaults="history.guardian.draw" values={{
            player: name,
            card: getAnimalTranslation(t, itemId)
          }}>
            <strong/>
              <PlayMoveButton css={rulesLinkButton} move={displayMaterialHelp(MaterialType.GuardianAnimalCard, { id: itemId })} local/>
          </Trans>
        </HistoryEntry>
      )
    }

    if (move.location?.type === LocationType.PlayerDiscardStack) {
      return (
        <HistoryEntry depth={1} backgroundColor={`${getColor(actionPlayer)}40`}>
          <Trans defaults="history.guardian.discard" values={{
            player: name,
            card: getAnimalTranslation(t, itemId)
          }}>
            <strong/>
            <PlayMoveButton css={rulesLinkButton} move={displayMaterialHelp(MaterialType.GuardianAnimalCard, { id: itemId })} local/>
          </Trans>
        </HistoryEntry>
      )
    }

    if (move.location?.type === LocationType.VaranDeck) {
      return (
        <HistoryEntry player={actionPlayer} backgroundColor={`${getColor(actionPlayer)}40`}>
          <Trans defaults="history.guardian.varan" values={{
            player: name
          }}>
            <strong/>
            <PlayMoveButton css={rulesLinkButton} move={displayMaterialHelp(MaterialType.GuardianAnimalCard, { id: GuardianAnimal.FireVaran })} local/>
          </Trans>
        </HistoryEntry>
      )
    }
  }

  if (isEndPlayerTurn(move)) {
    const rules = new LivingForestRules(JSON.parse(JSON.stringify(context.game)))
    rules.play(move)
    const playerState = new PlayerState(rules.game, actionPlayer)
    const actionCount = playerState.solidarityGregariousDifference === 3 ? 1 : 2
    return (
      <HistoryEntry player={actionPlayer} backgroundColor={`${getColor(actionPlayer)}40`}>
        <Trans defaults={actionCount === 2 ? 'history.guardian.pass' : 'history.guardian.stop'} values={{
          player: name
        }}>
          <strong/>
        </Trans>
      </HistoryEntry>
    )
  }

  return null
}