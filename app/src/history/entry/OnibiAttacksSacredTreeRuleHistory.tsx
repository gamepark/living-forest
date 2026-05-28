import { Fire } from '@gamepark/living-forest/material/Fire'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { HistoryEntry, MaterialLogProps } from '@gamepark/react-game'
import { isMoveItemType, MaterialGame, MaterialMove, MoveItem, StartRule } from '@gamepark/rules-api'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { bold } from '../LivingForestHistory'

type OnibiAttacksSacredTreeRuleHistoryProps = { move: StartRule } & Omit<MaterialLogProps, 'move'>

export const OnibiAttacksSacredTreeRuleHistory: FC<OnibiAttacksSacredTreeRuleHistoryProps> = (props) => {
  const { t } = useTranslation()
  const { move, context } = props
  const { action } = context
  const fireTiles = action.consequences.filter((move: MaterialMove) =>
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
  const fireTileMoves: MoveItem[] = action.consequences.filter((move: MaterialMove): move is MoveItem =>
    isMoveItemType(MaterialType.FireTile)(move)
    && move.location.type === LocationType.CircleOfSpiritBoardFire
  )

  if (!fireTileMoves.length) return null

  const tileByValue = getCountByFireTile(context.game, fireTileMoves)

  return (
    <>
      {
        Object.entries(tileByValue).map(([fire, count]) => (
          <HistoryEntry depth={1} key={fire}>
            {t('history.onibi.fire', {
              count: count,
              value: fire
            })}
          </HistoryEntry>
        ))
      }
    </>
  )
}

const getCountByFireTile = (game: MaterialGame, moves: MoveItem[]): Partial<Record<Fire, number>> => {
  const counts: Partial<Record<Fire, number>> = {}
  for (const move of moves) {
    const tile = game.items[move.itemType]?.[move.itemIndex]?.id as Fire | undefined
    if (tile === undefined) continue
    counts[tile] = (counts[tile] ?? 0) + 1
  }

  return counts
}