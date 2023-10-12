/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next'

export const PlantTreeHeader = () => {
  const { t } = useTranslation()

  return <>{t('header.plant-tree')} </>
}
