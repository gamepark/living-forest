/** @jsxImportSource @emotion/react */
import { Fire } from '@gamepark/living-forest/material/Fire'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { HistoryEntry, MaterialHistoryProps } from '@gamepark/react-game'
import { isMoveItemType, MaterialGame, MoveItem, StartRule } from '@gamepark/rules-api'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { fireTileDescription } from '../../material/description/FireTileDescription'
import { bold, noBorder } from '../LivingForestHistory'
import { PictureHistoryEntry } from './PictureHistoryEntry'

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
      <HistoryEntry borderTop borderBottom css={bold}>{t('history.onibi-attack-tree')}</HistoryEntry>
      {!fireTiles && <HistoryEntry>{t('history.no-fire')}</HistoryEntry>}
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
          <PictureHistoryEntry depth={1} key={fire} pictureCss={noBorder} picture={fireTileDescription.images[fire]}>
            {t('history.onibi.fire', {
              count: count,
              value: fire
            })}
          </PictureHistoryEntry>
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