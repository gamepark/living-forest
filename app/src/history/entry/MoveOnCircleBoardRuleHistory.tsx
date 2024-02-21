/** @jsxImportSource @emotion/react */
import Resource from '@gamepark/living-forest/material/Resource'
import { MaterialHistoryProps, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { CustomMove } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { ResourceImage } from '../../material/description/help/GuardianAnimalCardHelp'
import { noBorder } from '../LivingForestHistory'
import { ActionHistory } from './ActionHistory'

type MoveOnCircleBoardRuleHistoryProps = { move: CustomMove } & Omit<MaterialHistoryProps, 'move'>

export const MoveOnCircleBoardRuleHistory: FC<MoveOnCircleBoardRuleHistoryProps> = (props) => {
  const { move, context } = props
  const playerId = usePlayerId()
  const actionPlayer = context.action.playerId
  const itsMe = playerId && actionPlayer === playerId
  const name = usePlayerName(actionPlayer)
  return (
    <ActionHistory consequence depth={2} context={context} pictureCss={noBorder} picture={ResourceImage[Resource.Wind]}>
      <Trans defaults={itsMe ? 'history.move.me' : 'history.move'} values={{
        player: name,
        spaces: move.data.distance
      }}>
        <strong/>
      </Trans>
    </ActionHistory>
  )

}