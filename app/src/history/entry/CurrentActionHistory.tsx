import { PlayerState } from '@gamepark/living-forest/rules/helper/PlayerState'
import { Memory } from '@gamepark/living-forest/rules/Memory'
import { HistoryEntry, MaterialHistoryProps } from '@gamepark/react-game'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { getColor } from '../../utils/ColorUtils'

type CurrentActionHistoryProps = {} & MaterialHistoryProps

export const CurrentActionHistory: FC<CurrentActionHistoryProps> = (props) => {
  const { context } = props
  const player = context.game.rule?.player
  const playerState = new PlayerState(context.game, player)
  const actionCount = playerState.solidarityGregariousDifference === 3? 1: 2
  const current = !context.game.memory?.[Memory.Actions]? 1: (actionCount - context.game.memory[Memory.Actions] + 1)

  return <HistoryEntry depth={1} backgroundColor={`${getColor(context.action.playerId)}40`}>
    <Trans defaults="history.current-action" values={{ action: current}}>
      <strong />
    </Trans>
  </HistoryEntry>
}