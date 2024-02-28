/** @jsxImportSource @emotion/react */
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { MaterialHistoryProps, PlayMoveButton, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { displayMaterialHelp, isMoveItemType, MoveItem } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { rulesLinkButton } from '../LivingForestHistory'
import { ActionHistory } from './ActionHistory'

type PickVictoryTileRuleHistoryProps = { move: MoveItem } &  Omit<MaterialHistoryProps, 'move'>

export const PickVictoryTileRuleHistory: FC<PickVictoryTileRuleHistoryProps> = (props) => {
  const { move, context } = props
  const playerId = usePlayerId()
  const actionPlayer = context.action.playerId
  const itsMe = playerId && actionPlayer === playerId
  const name = usePlayerName(actionPlayer)
  const target = context.game.items[move.itemType][move.itemIndex]?.location?.player
  const targetName = usePlayerName(target)
  const imTheTarget = playerId && playerId === target
  if (!isMoveItemType(MaterialType.VictoryTile)(move)) return null;
  const itemId = context.game.items[move.itemType][move.itemIndex]?.id

  if (imTheTarget) {
    return (
      <ActionHistory consequence depth={3} context={context}>
        <Trans defaults={'history.victory-tile.target.me'} values={{
          player: name
        }}>
          <strong/>
          <PlayMoveButton css={rulesLinkButton} move={displayMaterialHelp(MaterialType.VictoryTile, { id: itemId })} local/>
        </Trans>
      </ActionHistory>
    )
  }

  return (
    <ActionHistory consequence depth={3} context={context}>
      <Trans defaults={itsMe ? 'history.victory-tile.me' : 'history.victory-tile'} values={{
        player: name,
        target: targetName
      }}>
        <strong/>
        <PlayMoveButton css={rulesLinkButton} move={displayMaterialHelp(MaterialType.VictoryTile, { id: itemId })} local/>
      </Trans>
    </ActionHistory>
  )

}