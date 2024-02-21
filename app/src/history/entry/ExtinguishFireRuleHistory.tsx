/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import Resource from '@gamepark/living-forest/material/Resource'
import { MaterialHistoryProps, Picture, PlayMoveButton, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { displayMaterialHelp, isMoveItemType } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { ResourceImage } from '../../material/description/help/GuardianAnimalCardHelp'
import { noBorder, pictureCss, rulesLinkButton } from '../LivingForestHistory'
import { ActionHistory } from './ActionHistory'

type ExtinguishFireRuleHistoryProps = {} & MaterialHistoryProps

export const ExtinguishFireRuleHistory: FC<ExtinguishFireRuleHistoryProps> = (props) => {
  const { move, context } = props
  const playerId = usePlayerId()
  const actionPlayer = context.action.playerId
  const itsMe = playerId && actionPlayer === playerId
  const name = usePlayerName(actionPlayer)
  if (!isMoveItemType(MaterialType.FireTile)(move) || move.location?.type !== LocationType.PlayerFireTileStack) return null
  const itemId = context.game.items[move.itemType][move.itemIndex]?.id

  return (
    <ActionHistory consequence depth={2} context={context} pictureCss={noBorder} picture={ResourceImage[Resource.Drop]}>
      <div css={pictureCss}>
        <Trans defaults={itsMe ? 'history.extinct.me' : 'history.extinct'} values={{
          player: name,
          power: itemId,
          cost: itemId
        }}>
          <strong/>
          <PlayMoveButton css={rulesLinkButton} move={displayMaterialHelp(MaterialType.FireTile, { id: itemId })} local/>
          <Picture src={ResourceImage[Resource.Drop]}/>
          <u/>
        </Trans>
      </div>
    </ActionHistory>
  )

}