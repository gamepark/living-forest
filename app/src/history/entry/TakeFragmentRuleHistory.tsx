/** @jsxImportSource @emotion/react */
import { MaterialHistoryProps, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { ActionHistory } from './ActionHistory'

type TakeFragmentRuleHistoryProps = {} &  MaterialHistoryProps

export const TakeFragmentRuleHistory: FC<TakeFragmentRuleHistoryProps> = (props) => {
  const { context } = props
  const playerId = usePlayerId()
  const actionPlayer = context.action.playerId
  const itsMe = playerId && actionPlayer === playerId
  const name = usePlayerName(actionPlayer)
  return (
    <ActionHistory consequence depth={2} context={context}>
      <Trans defaults={itsMe ? 'history.fragment.me' : 'history.fragment'} values={{
        player: name
      }}>
        <strong/>
      </Trans>
    </ActionHistory>
  )

}