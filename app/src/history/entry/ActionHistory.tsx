/** @jsxImportSource @emotion/react */
import { ActionHistoryEntry, ActionHistoryEntryProps } from '@gamepark/react-game'
import { FC } from 'react'
import { getColor } from '../../utils/ColorUtils'

type ActionHistoryProps = { noPlayer?: boolean } & ActionHistoryEntryProps
export const ActionHistory: FC<ActionHistoryProps> = (props) => {
  const { noPlayer, context, children, ...rest } = props
  return (
    <ActionHistoryEntry context={context} getColor={(player) => noPlayer? 'white': `${getColor(player)}40`} {...rest}>
      {children}
    </ActionHistoryEntry>
  )
}