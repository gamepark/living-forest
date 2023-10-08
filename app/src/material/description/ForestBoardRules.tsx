import { useTranslation } from 'react-i18next'

export const ForestBoardRules = () => {
  const { t } = useTranslation()
  return <>
    <h2>{t('rules.forest.title')}</h2>
    <p>{t('rules.forest.description')}</p>
    <p>{t('rules.forest.resources')}</p>
    <p>{t('rules.forest.victory')}</p>
  </>
}
