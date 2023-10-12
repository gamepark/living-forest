/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next'

export const OnibiAttacksSacredTreeHeader = () => {
  const { t } = useTranslation()

  return <>{t('header.onibi-attacks-tree')} </>
}
