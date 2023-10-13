/** @jsxImportSource @emotion/react */
import { Trans, useTranslation } from 'react-i18next'
import { ResourceImage, alignIconText, resourceStyle } from './GuardianAnimalCardRules'


export const CircleOfSpiritBoardRules = () => {
  const { t } = useTranslation()
  return <>
    <h2>{t('rules.circle-spirit.title')}</h2>
    <p css={alignIconText}>
      <Trans defaults="rules.circle-spirit.description">
        <span css={resourceStyle(ResourceImage[4])} />
        <span css={resourceStyle(ResourceImage[4])} />
      </Trans>
    </p>
    <p>{t('rules.circle-spirit.end')}</p>
  </>
}