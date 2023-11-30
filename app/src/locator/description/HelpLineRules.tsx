import { useTranslation } from 'react-i18next'

export const HelpLineRules = () => {
  const { t } = useTranslation()


  return <>
    <h2>{t('rules.help-line.title')}</h2>
    <p>{t('rules.help-line.description')}</p>
  </>
}
