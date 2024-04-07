import { useTranslation } from 'react-i18next'

export const OnibiHelp = () => {
  const { t } = useTranslation()
  return <>
    <h2>{t('rules.onibi.title')}</h2>
    <p>{t('rules.onibi.description')}</p>
  </>
}
