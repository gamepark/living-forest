/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LocationHelpProps } from '@gamepark/react-game'
import { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { ResourceImage, resourceStyle } from '../../material/description/help/GuardianAnimalCardHelp'

export const TreeSpaceHelp: FC<LocationHelpProps> = ({ location }) => {
  const { t } = useTranslation()
  return <div css={bottomMargin}>
    <h2>{t('rules.forest-space.title')}</h2>
    <p>{t('rules.forest-space.plant')}</p>
    {((location.x == 4 && location.y == 0) || (location.x == 0 && location.y == 2)) &&
      <p>{t('rules.forest-space.fragments')}</p>
    }
    {((location.x === 4 && location.y === 2)) &&
      <Trans defaults="rules.forest-space.extinguish">
        <span css={resourceStyle(ResourceImage[2])} />
      </Trans>
    }
    {((location.x === 0 && location.y === 0)) &&
      <Trans defaults="rules.forest-space.attract">
        <span css={resourceStyle(ResourceImage[1])} />
      </Trans>
    }
  </div>
}

const bottomMargin = css`
  margin-bottom: 1em;
`