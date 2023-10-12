/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next'

export const PickVictoryTileHeader = () => {
  const { t } = useTranslation()

  return <>{t('header.take-victory')} </>
}
