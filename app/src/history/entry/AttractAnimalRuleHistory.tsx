/** @jsxImportSource @emotion/react */
import { GuardianAnimalDescriptions } from '@gamepark/living-forest/material/GuardianAnimalDescriptions'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import Resource from '@gamepark/living-forest/material/Resource'
import { MaterialHistoryProps, Picture, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { isMoveItemType } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { ResourceImage } from '../../material/description/GuardianAnimalCardRules'
import { noBorder, pictureCss } from '../LivingForestHistory'
import { ActionHistory } from './ActionHistory'

type AttractAnimalRuleHistoryProps = {} & MaterialHistoryProps

export const AttractAnimalRuleHistory: FC<AttractAnimalRuleHistoryProps> = (props) => {
  const { move, context } = props
  const playerId = usePlayerId()
  const actionPlayer = context.action.playerId
  const itsMe = playerId && actionPlayer === playerId
  const name = usePlayerName(actionPlayer)
  if (!isMoveItemType(MaterialType.GuardianAnimalCard)(move) || move.location?.type !== LocationType.PlayerDeckStack) return null
  const itemId = context.game.items[move.itemType][move.itemIndex]?.id

  return (
    <ActionHistory consequence depth={2} context={context} pictureCss={noBorder} picture={ResourceImage[Resource.Sun]}>
      <div css={pictureCss}>
        <Trans defaults={itsMe ? 'history.attract.me' : 'history.attract'} values={{
          player: name,
          cost: GuardianAnimalDescriptions[itemId]?.cost ?? 0
        }}>
          <strong/>
          <Picture src={ResourceImage[Resource.Sun]}/>
          <u />
        </Trans>
      </div>
    </ActionHistory>
  )

}