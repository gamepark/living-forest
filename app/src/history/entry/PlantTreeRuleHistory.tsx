/** @jsxImportSource @emotion/react */
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { ProtectiveTreeDetail } from '@gamepark/living-forest/material/ProtectivesTrees'
import Resource from '@gamepark/living-forest/material/Resource'
import { MaterialHistoryProps, Picture, PlayMoveButton, usePlayerName } from '@gamepark/react-game'
import { displayMaterialHelp, isMoveItemType } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { ResourceImage } from '../../material/description/help/GuardianAnimalCardHelp'
import { getColor } from '../../utils/ColorUtils'
import { noBorder, pictureCss, rulesLinkButton } from '../LivingForestHistory'
import { PictureHistoryEntry } from './PictureHistoryEntry'

type PlantTreeRuleHistoryProps = {} & MaterialHistoryProps

export const PlantTreeRuleHistory: FC<PlantTreeRuleHistoryProps> = (props) => {
  const { move, context } = props
  const actionPlayer = context.action.playerId
  const name = usePlayerName(actionPlayer)
  if (!isMoveItemType(MaterialType.ProtectiveTreeTiles)(move)) return null
  const itemId = context.game.items[move.itemType][move.itemIndex]?.id

  return (
    <PictureHistoryEntry depth={2} backgroundColor={`${getColor(actionPlayer)}40`} pictureCss={noBorder} picture={ResourceImage[Resource.Seed]}>
      <div css={pictureCss}>
        <Trans defaults="history.plant" values={{
          player: name,
          cost: ProtectiveTreeDetail[itemId].cost
        }}>
          <strong/>
          <PlayMoveButton css={rulesLinkButton} move={displayMaterialHelp(MaterialType.ProtectiveTreeTiles, { id: itemId })} local/>
          <Picture src={ResourceImage[Resource.Seed]}/>
          <u/>
        </Trans>
      </div>
    </PictureHistoryEntry>
  )

}