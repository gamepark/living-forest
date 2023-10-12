/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next'

export const PassingSacredTreeHeader = () => {
  const { t } = useTranslation()

  return <>{t('header.giving-sacred-tree')} </>
}
