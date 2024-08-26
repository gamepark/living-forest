/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { Resource } from '@gamepark/living-forest/material/Resource'
import { HistoryEntry, MaterialHistoryProps, Picture, PlayMoveButton, usePlayerName } from '@gamepark/react-game'
import { isMoveItemType, MaterialMoveBuilder } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { ResourceImage } from '../../material/description/help/GuardianAnimalCardHelp'
import { getColor } from '../../utils/ColorUtils'
import { pictureCss, rulesLinkButton } from '../LivingForestHistory'
import displayMaterialHelp = MaterialMoveBuilder.displayMaterialHelp

type ExtinguishFireRuleHistoryProps = {} & MaterialHistoryProps

export const ExtinguishFireRuleHistory: FC<ExtinguishFireRuleHistoryProps> = (props) => {
  const { move, context } = props
  const actionPlayer = context.action.playerId
  const name = usePlayerName(actionPlayer)
  if (!isMoveItemType(MaterialType.FireTile)(move) || move.location?.type !== LocationType.PlayerFireTileStack) return null
  const itemId = context.game.items[move.itemType][move.itemIndex]?.id

  return (
    <HistoryEntry depth={2} backgroundColor={`${getColor(actionPlayer)}40`}>
      <div css={pictureCss}>
        <Trans defaults="history.extinct" values={{
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
    </HistoryEntry>
  )

}