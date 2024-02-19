/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { RuleId } from '@gamepark/living-forest/rules/RuleId'
import { HistoryEntry, MaterialHistoryProps, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { isMoveItemType } from '@gamepark/rules-api/dist/material/moves/items/MoveItem'
import { isStartRule } from '@gamepark/rules-api/dist/material/moves/rules/StartRule'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ActionHistory } from './ActionHistory'

type OnibiAttacksPlayerRuleHistoryProps = {} & MaterialHistoryProps

export const OnibiAttacksPlayerRuleHistory: FC<OnibiAttacksPlayerRuleHistoryProps> = (props) => {
  const { t } = useTranslation()
  const { move, context } = props
  const { game } = context

  if (isStartRule(move) && move.id === RuleId.OnibiAttacksPlayer) {
    return (
      <>
        <HistoryEntry border css={bold}>{t('history.onibi-attack')}</HistoryEntry>
        {game.players.map((p: number) => (
          <PlayerVaranHistory key={p} player={p} move={move} context={context} />
        ))}
      </>
    )
  }

  return null

}

type PlayerVaranHistoryProps = { player: number } & OnibiAttacksPlayerRuleHistoryProps

export const PlayerVaranHistory: FC<PlayerVaranHistoryProps> = (props) => {
  const { player, context } = props
  const playerId = usePlayerId()
  const { t } = useTranslation()
  const itsMe = playerId && playerId === player
  const action = context.action
  const varans = action.consequences.filter((move) =>
    isMoveItemType(MaterialType.GuardianAnimalCard)(move)
    && move.location.type === LocationType.PlayerDiscardStack
    && move.location.player === player
  ).length
  const name = usePlayerName(player)

  if (!varans) return null

  return <ActionHistory playerId={player} context={context}>
    {t(itsMe? "history.varan.me": "history.varan", {
      player: name,
      varan: varans
    })}
  </ActionHistory>

}

const bold = css`
  font-weight: bold;
`