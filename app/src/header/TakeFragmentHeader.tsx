/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next'

export const TakeFragmentHeader = () => {
  const { t } = useTranslation()

  return <>{t('header.take-fragment')} </>
}
