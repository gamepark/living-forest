/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next'

export const GuardianAnimalsArrivalHeader = () => {
  const { t } = useTranslation()

  return <>{t('header.guardian-animals-arrival')} </>
}
