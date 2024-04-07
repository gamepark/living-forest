/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next'

export const ForestBoardExtensionHelp = () => {
  const { t } = useTranslation()
  return <>
    <h2>{t('rules.forest.extension.title')}</h2>

  </>
}
