/** @jsxImportSource @emotion/react */
import { HistoryEntry, MaterialHistoryProps, usePlayerName } from '@gamepark/react-game'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { getColor } from '../../utils/ColorUtils'

type TakeFragmentRuleHistoryProps = {} & MaterialHistoryProps

export const TakeFragmentRuleHistory: FC<TakeFragmentRuleHistoryProps> = (props) => {
  const { context } = props
  const actionPlayer = context.action.playerId
  const name = usePlayerName(actionPlayer)
  return (
    <HistoryEntry depth={2} backgroundColor={`${getColor(actionPlayer)}40`}>
      <Trans defaults="history.fragment" values={{
        player: name
      }}>
        <strong/>
      </Trans>
    </HistoryEntry>
  )

}