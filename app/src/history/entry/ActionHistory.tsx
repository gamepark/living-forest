/** @jsxImportSource @emotion/react */
import { ActionHistoryEntry, ActionHistoryEntryProps } from '@gamepark/react-game'
import { FC } from 'react'
import { getColor } from '../../utils/ColorUtils'


export const ActionHistory: FC<ActionHistoryEntryProps> = (props) => {
  const { context, children, ...rest } = props
  return (
    <ActionHistoryEntry context={context} getColor={(player) => `${getColor(player)}40`} {...rest}>
      {children}
    </ActionHistoryEntry>
  )
}