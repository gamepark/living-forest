import { useTranslation } from 'react-i18next'

export const SpiritOfNatureStandeeRules = () => {
  const { t } = useTranslation()
  return <>
    <h2>{t('rules.spirit-nature.title')}</h2>
    <p>{t('rules.spirit-nature.description')}</p>
  </>
}
