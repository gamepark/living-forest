/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { HistoryEntry, MaterialHistoryProps } from '@gamepark/react-game'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { getColor } from '../../utils/ColorUtils'

type SkipSecondActionHistoryProps = { player: number } & Omit<MaterialHistoryProps, 'move'>

export const SkipSecondActionHistory: FC<SkipSecondActionHistoryProps> = (props) => {
  const { t } = useTranslation()
  const { player } = props

  return (
    <HistoryEntry depth={1} backgroundColor={`${getColor(player)}40`}>
      <div css={alertStyle}>
        {t('history.action.impossible')}
      </div>
    </HistoryEntry>
  )
}

const alertStyle = css`
  color: red;
  font-style: italic;
`