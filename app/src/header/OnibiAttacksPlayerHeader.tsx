/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next'

export const OnibiAttacksPlayerHeader = () => {
  const { t } = useTranslation()

  return <>{t('header.onibi-attacks-player')} </>
}
