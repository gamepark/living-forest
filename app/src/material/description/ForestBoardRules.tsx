/** @jsxImportSource @emotion/react */
import { Trans, useTranslation } from 'react-i18next'
import { ResourceImage, alignIconText, resourceStyle } from './GuardianAnimalCardRules'

export const ForestBoardRules = () => {
  const { t } = useTranslation()
  return <>
    <h2>{t('rules.forest.title')}</h2>
    <p>{t('rules.forest.description')}</p>
    <p>{t('rules.forest.victory')}</p>
    <hr />
    <p css={alignIconText}>
      <Trans defaults="rules.forest.resources">
        <span css={resourceStyle(ResourceImage[2])} />
        <span css={resourceStyle(ResourceImage[1])} />
        <span css={resourceStyle(ResourceImage[4])} />
        <span css={resourceStyle(ResourceImage[5])} />
      </Trans>
    </p>
    <p css={alignIconText}>
      <Trans defaults="rules.forest.bonus.tl">
        <span css={resourceStyle(ResourceImage[1])} />
      </Trans>
    </p>
    <p>{t('rules.forest.bonus.tr')}</p>
    <p>{t('rules.forest.bonus.bl')}</p>
    <p css={alignIconText}>
      <Trans defaults="rules.forest.bonus.br">
        <span css={resourceStyle(ResourceImage[2])} />
      </Trans>
    </p>
  </>
}
