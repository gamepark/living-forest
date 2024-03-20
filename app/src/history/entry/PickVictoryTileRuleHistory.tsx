/** @jsxImportSource @emotion/react */
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { HistoryEntry, MaterialHistoryProps, PlayMoveButton, usePlayerName } from '@gamepark/react-game'
import { displayMaterialHelp, isMoveItemType, MoveItem } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { getColor } from '../../utils/ColorUtils'
import { rulesLinkButton } from '../LivingForestHistory'

type PickVictoryTileRuleHistoryProps = { move: MoveItem } & Omit<MaterialHistoryProps, 'move'>

export const PickVictoryTileRuleHistory: FC<PickVictoryTileRuleHistoryProps> = (props) => {
  const { move, context } = props
  const actionPlayer = context.action.playerId
  const name = usePlayerName(actionPlayer)
  const target = context.game.items[move.itemType][move.itemIndex]?.location?.player
  const targetName = usePlayerName(target)
  if (!isMoveItemType(MaterialType.VictoryTile)(move)) return null
  const itemId = context.game.items[move.itemType][move.itemIndex]?.id

  return (
    <HistoryEntry depth={3} backgroundColor={`${getColor(actionPlayer)}40`}>
      <Trans defaults="history.victory-tile" values={{
        player: name,
        target: targetName
      }}>
        <strong/>
        <PlayMoveButton css={rulesLinkButton} move={displayMaterialHelp(MaterialType.VictoryTile, { id: itemId })} local/>
      </Trans>
    </HistoryEntry>
  )

}