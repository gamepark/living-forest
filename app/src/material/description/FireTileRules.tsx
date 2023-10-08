/** @jsxImportSource @emotion/react */
import { MaterialRulesProps } from '@gamepark/react-game'
import Images from '../../images/Images'
import Resource from '@gamepark/living-forest/material/Resource'
import { css } from '@emotion/react'
import { Trans, useTranslation } from 'react-i18next'

export const FileTileRules = ({ item }: MaterialRulesProps) => {
  const { t } = useTranslation()
  return <>
    <h2>{t('rules.fire-tile.title')}</h2>
    <p>{t('rules.fire-tile.points')}</p>
    <p>
      <Trans defaults="rules.circle-spirit.description">
        <span css={resourceStyle(ResourceImage[2])} />
      </Trans>
    </p>
    <p>
      <Trans defaults="rules.circle-spirit.end">
        <span css={resourceStyle(ResourceImage[2])} />
      </Trans>
    </p>
    <hr />

    <p>
      <Trans defaults="rules.circle-spirit.extinguish" values={{ number: item.id }}>
        <span css={resourceStyle(ResourceImage[2])} />
      </Trans>
    </p>
    <p>{t('rules.fire-tile.victory')}</p>

  </>
}


const ResourceImage: Record<Resource, string> = {
  [Resource.Sun]: Images.sun,
  [Resource.Drop]: Images.drop,
  [Resource.Seed]: Images.seed,
  [Resource.Wind]: Images.wind,
  [Resource.SacredFlower]: Images.sacredFlower,
}

const resourceStyle = (image: string) => css`
  flex: 1;
  align-self: center;
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 1.2em;
  height: 1.2em;
  filter: drop-shadow(0.1em 0.1em 0.2em gray);
  display:inline-block;
`
