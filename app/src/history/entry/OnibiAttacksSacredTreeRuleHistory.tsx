/** @jsxImportSource @emotion/react */
import { Fire } from '@gamepark/living-forest/material/Fire'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { ActionHistoryEntry, HistoryEntry, MaterialHistoryProps } from '@gamepark/react-game'
import { MaterialGame } from '@gamepark/rules-api/dist/material/MaterialGame'
import { isMoveItemType, MoveItem } from '@gamepark/rules-api/dist/material/moves/items/MoveItem'
import { StartRule } from '@gamepark/rules-api/dist/material/moves/rules/StartRule'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { fireTileDescription } from '../../material/description/FireTileDescription'
import { allBorders, bold, noBorder } from '../LivingForestHistory'

type OnibiAttacksSacredTreeRuleHistoryProps = { move: StartRule } & Omit<MaterialHistoryProps, 'move'>

export const OnibiAttacksSacredTreeRuleHistory: FC<OnibiAttacksSacredTreeRuleHistoryProps> = (props) => {
  const { t } = useTranslation()
  const { move, context } = props
  const { action } = context
  const fireTiles = action.consequences.filter((move) =>
    isMoveItemType(MaterialType.FireTile)(move)
    && move.location.type === LocationType.CircleOfSpiritBoardFire
  ).length

  return (
    <>
      <HistoryEntry border={allBorders} css={bold}>{t('history.onibi-attack-tree')}</HistoryEntry>
      {!fireTiles && <HistoryEntry context={context}>{t('history.no-fire')}</HistoryEntry>}
      {!!fireTiles && <NewFireTileHistory move={move} context={context}/>}

    </>
  )
}

type NewFireTileHistoryProps = OnibiAttacksSacredTreeRuleHistoryProps

export const NewFireTileHistory: FC<NewFireTileHistoryProps> = (props) => {
  const { context } = props
  const { t } = useTranslation()
  const action = context.action
  const fireTileMoves: MoveItem[] = action.consequences.filter((move) =>
    isMoveItemType(MaterialType.FireTile)(move)
    && move.location.type === LocationType.CircleOfSpiritBoardFire
  )

  if (!fireTileMoves.length) return null

  const tileByValue = getCountByFireTile(context.game, fireTileMoves)

  return (
    <>
      {
        Object.entries(tileByValue).map(([fire, count]) => (
          <ActionHistoryEntry consequence key={fire} context={context} pictureCss={noBorder} picture={fireTileDescription.images[fire]}>
            {t('history.onibi.fire', {
              count: count,
              value: fire
            })}
          </ActionHistoryEntry>
        ))
      }
    </>
  )
}

const getCountByFireTile = (game: MaterialGame, moves: MoveItem[]): Partial<Record<Fire, number>> => {
  const counts: Partial<Record<Fire, number>> = {}
  for (const move of moves) {
    const tile = game.items[move.itemType]![move.itemIndex]?.id
    if (!(tile in counts)) counts[tile] = 1
    else counts[tile]++
  }

  return counts
}