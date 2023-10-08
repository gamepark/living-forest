import { useTranslation } from 'react-i18next'

export const FragmentTileRules = () => {
  const { t } = useTranslation()
  return <>
    <h2>{t('rules.fragment.title')}</h2>
    <p>{t('rules.fragment.description')}</p>
    <p>{t('rules.fragment.get')}</p>
  </>
}
