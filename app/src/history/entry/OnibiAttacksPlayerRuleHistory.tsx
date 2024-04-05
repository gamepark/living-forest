/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { HistoryEntry, MaterialHistoryProps, usePlayerName } from '@gamepark/react-game'
import { isMoveItemType, StartRule } from '@gamepark/rules-api'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { getColor } from '../../utils/ColorUtils'

type OnibiAttacksPlayerRuleHistoryProps = { move: StartRule } & Omit<MaterialHistoryProps, 'move'>

export const OnibiAttacksPlayerRuleHistory: FC<OnibiAttacksPlayerRuleHistoryProps> = (props) => {
  const { t } = useTranslation()
  const { move, context } = props
  const { game, action } = context
  const varans = action.consequences.filter((move) =>
    isMoveItemType(MaterialType.GuardianAnimalCard)(move)
    && move.location.type === LocationType.PlayerDiscardStack
    && context.game.items[move.itemType][move.itemIndex].id === GuardianAnimal.FireVaran
    && context.game.items[move.itemType][move.itemIndex].location.type === LocationType.VaranDeck
  ).length

  return (
    <>
      <HistoryEntry borderTop borderBottom css={bold}>{t('history.onibi-attack-players')}</HistoryEntry>
      {!varans && <HistoryEntry>{t('history.no-varan')}</HistoryEntry>}
      {!!varans && game.players.map((p: number) => (
        <PlayerVaranHistory key={p} player={p} move={move} context={context}/>
      ))}
    </>
  )

}

type PlayerVaranHistoryProps = { player: number } & OnibiAttacksPlayerRuleHistoryProps

export const PlayerVaranHistory: FC<PlayerVaranHistoryProps> = (props) => {
  const { player, context } = props
  const { t } = useTranslation()
  const action = context.action
  const varans = action.consequences.filter((move) =>
    isMoveItemType(MaterialType.GuardianAnimalCard)(move)
    && move.location.type === LocationType.PlayerDiscardStack
    && move.location.player === player
    && context.game.items[move.itemType][move.itemIndex].id === GuardianAnimal.FireVaran
    && context.game.items[move.itemType][move.itemIndex].location.type === LocationType.VaranDeck
  ).length
  const name = usePlayerName(player)

  if (!varans) return null

  return <HistoryEntry player={player} backgroundColor={`${getColor(player)}40`}>
    {t('history.varan', {
      player: name,
      varan: varans
    })}
  </HistoryEntry>

}

const bold = css`
  font-weight: bold;
`