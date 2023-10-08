import { useTranslation } from 'react-i18next'

export const SacredTreeRules = () => {
  const { t } = useTranslation()
  return <>
    <h2>{t('rules.sacred-tree.title')}</h2>
    <p>{t('rules.sacred-tree.description')}</p>
  </>
}
