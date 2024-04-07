/** @jsxImportSource @emotion/react */
import { MaterialHelpProps } from '@gamepark/react-game'
import { useTranslation } from 'react-i18next'

export const ElementTileHelp = ({ }: MaterialHelpProps) => {
  const { t } = useTranslation()

  return <>
    <h2>{t('rules.element.title')}</h2>

  </>
}
