/** @jsxImportSource @emotion/react */
import Resource from '@gamepark/living-forest/material/Resource'
import { MaterialHistoryProps, usePlayerName } from '@gamepark/react-game'
import { CustomMove } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { ResourceImage } from '../../material/description/help/GuardianAnimalCardHelp'
import { getColor } from '../../utils/ColorUtils'
import { noBorder } from '../LivingForestHistory'
import { PictureHistoryEntry } from './PictureHistoryEntry'

type MoveOnCircleBoardRuleHistoryProps = { move: CustomMove } & Omit<MaterialHistoryProps, 'move'>

export const MoveOnCircleBoardRuleHistory: FC<MoveOnCircleBoardRuleHistoryProps> = (props) => {
  const { move, context } = props
  const actionPlayer = context.action.playerId
  const name = usePlayerName(actionPlayer)
  return (
    <PictureHistoryEntry depth={2} backgroundColor={`${getColor(actionPlayer)}40`} pictureCss={noBorder} picture={ResourceImage[Resource.Wind]}>
      <Trans defaults="history.move" values={{
        player: name,
        spaces: move.data.distance
      }}>
        <strong/>
      </Trans>
    </PictureHistoryEntry>
  )

}