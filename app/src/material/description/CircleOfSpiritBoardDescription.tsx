import { BoardDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { Trans, useTranslation } from 'react-i18next'
import Resource from '@gamepark/living-forest/material/Resource'
import { css } from '@emotion/react'

export class CircleOfSpiritBoardDescription extends BoardDescription {
  ratio = 1
  width = 31.5

  locations = Array.from(Array(12)).map((_, id) => ({ type: LocationType.CircleOfSpiritBoardSpace, x: id }))

  staticItem = { location: { type: LocationType.Table } }
  image = Images.circleOfSpirits

  rules = () => {
    const { t } = useTranslation()
    return <>
      <h2>{t('rules.circle-spirit.title')}</h2>
      <p>
        <Trans defaults="rules.circle-spirit.description">
          <span css={resourceStyle(ResourceImage[4])} />
          <span css={resourceStyle(ResourceImage[4])} />
        </Trans>
      </p>
      <p>{t('rules.circle-spirit.end')}</p>
    </>
  }
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

export const circleOfSpiritBoardDescription = new CircleOfSpiritBoardDescription()