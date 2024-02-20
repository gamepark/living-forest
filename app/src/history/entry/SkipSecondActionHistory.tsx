/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { MaterialHistoryProps } from '@gamepark/react-game'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { ActionHistory } from './ActionHistory'

type SkipSecondActionHistoryProps = { player: number } & Omit<MaterialHistoryProps, 'move'>

export const SkipSecondActionHistory: FC<SkipSecondActionHistoryProps> = (props) => {
  const { t } = useTranslation()
  const { player, context } = props

  return (
    <ActionHistory consequence playerId={player} context={context}>
        <div css={alertStyle}>
          {t('history.action.impossible')}
        </div>
    </ActionHistory>
  )
}

const alertStyle = css`
  color: red;
  font-style: italic;
`