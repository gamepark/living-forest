/** @jsxImportSource @emotion/react */
import { HistoryEntry, MaterialHistoryProps, usePlayerName } from '@gamepark/react-game'
import { CustomMove } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { getColor } from '../../utils/ColorUtils'

type MoveOnCircleBoardRuleHistoryProps = { move: CustomMove } & Omit<MaterialHistoryProps, 'move'>

export const MoveOnCircleBoardRuleHistory: FC<MoveOnCircleBoardRuleHistoryProps> = (props) => {
  const { move, context } = props
  const actionPlayer = context.action.playerId
  const name = usePlayerName(actionPlayer)
  return (
    <HistoryEntry depth={2} backgroundColor={`${getColor(actionPlayer)}40`}>
      <Trans defaults="history.move" values={{
        player: name,
        spaces: move.data.distance
      }}>
        <strong/>
      </Trans>
    </HistoryEntry>
  )

}