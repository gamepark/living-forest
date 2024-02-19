/** @jsxImportSource @emotion/react */
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { ProtectiveTreeDetail } from '@gamepark/living-forest/material/ProtectivesTrees'
import Resource from '@gamepark/living-forest/material/Resource'
import { MaterialHistoryProps, Picture, PlayMoveButton, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { displayMaterialHelp, isMoveItemType } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { ResourceImage } from '../../material/description/GuardianAnimalCardRules'
import { noBorder, pictureCss, rulesLinkButton } from '../LivingForestHistory'
import { ActionHistory } from './ActionHistory'

type PlantTreeRuleHistoryProps = {} &  MaterialHistoryProps

export const PlantTreeRuleHistory: FC<PlantTreeRuleHistoryProps> = (props) => {
  const { move, context } = props
  const playerId = usePlayerId()
  const actionPlayer = context.action.playerId
  const itsMe = playerId && actionPlayer === playerId
  const name = usePlayerName(actionPlayer)
  if (!isMoveItemType(MaterialType.ProtectiveTreeTiles)(move)) return null;
  const itemId = context.game.items[move.itemType][move.itemIndex]?.id

  return (
    <ActionHistory consequence depth={2} context={context} pictureCss={noBorder} picture={ResourceImage[Resource.Seed]}>
      <div css={pictureCss}>
        <Trans defaults={itsMe ? 'history.plant.me' : 'history.plant'} values={{
          player: name,
          cost: ProtectiveTreeDetail[itemId].cost
        }}>
          <strong/>
          <PlayMoveButton css={rulesLinkButton} move={displayMaterialHelp(MaterialType.ProtectiveTreeTiles, { id: itemId })} local/>
          <Picture src={ResourceImage[Resource.Seed]}/>
          <u/>
        </Trans>
      </div>
    </ActionHistory>
)

}