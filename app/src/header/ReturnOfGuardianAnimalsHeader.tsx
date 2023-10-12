/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next'

export const ReturnOfGuardianAnimalsHeader = () => {
  const { t } = useTranslation()

  return <>{t('header.return-guardian-animals')} </>
}
