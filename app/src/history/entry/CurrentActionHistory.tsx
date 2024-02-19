import { PlayerState } from '@gamepark/living-forest/rules/helper/PlayerState'
import { Memory } from '@gamepark/living-forest/rules/Memory'
import { MaterialHistoryProps } from '@gamepark/react-game'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { ActionHistory } from './ActionHistory'

type CurrentActionHistoryProps = {} & MaterialHistoryProps

export const CurrentActionHistory: FC<CurrentActionHistoryProps> = (props) => {
  const { context } = props
  const player = context.game.rule?.player
  const playerState = new PlayerState(context.game, player)
  const actionCount = playerState.solidarityGregariousDifference === 3? 1: 2
  const current = !context.game.memory?.[Memory.Actions]? 1: (actionCount - context.game.memory[Memory.Actions] + 1)

  return <ActionHistory consequence context={context}>
    <Trans defaults="history.current-action" values={{ action: current}}>
      <strong />
    </Trans>
  </ActionHistory>
}