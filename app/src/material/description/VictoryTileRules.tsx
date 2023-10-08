import { useTranslation } from 'react-i18next'

export const VictoryTileRules = () => {
  const { t } = useTranslation()
  return <>
    <h2>{t('rules.victory-tile.title')}</h2>
    <p>{t('rules.victory-tile.description')}</p>
  </>
}
