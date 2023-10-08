/** @jsxImportSource @emotion/react */
import { MaterialRulesProps } from '@gamepark/react-game'
import Images from '../../images/Images'
import { GuardianAnimalDescriptions } from '@gamepark/living-forest/material/GuardianAnimalDescriptions';
import Resource from '@gamepark/living-forest/material/Resource'
import { css } from '@emotion/react'
import { Trans, useTranslation } from 'react-i18next'

export const GuardianAnimalCardRules = ({ item }: MaterialRulesProps) => {
  const { t } = useTranslation()
  if (item.id == undefined) {
    return <>
      <h2>{t('rules.guardian-animal.title')}</h2>
    </>
  }

  if (item.id == 66) {
    return <>
      <h2>{t('rules.varan.title')}</h2>
      <p>
        <Trans defaults="rules.varan.description">
          <span css={resourceStyle(ResourceImage[2])} />
        </Trans>
      </p>
      <p>{t('rules.varan.destroy')}</p>
    </>
  } else {
    return <>
      <h2>{t('rules.guardian-animal.title')}</h2>
      <p>{t('rules.guardian-animal.description')}</p>
      <p>
        <Trans defaults="rules.guardian-animal.get">
          <span css={resourceStyle(ResourceImage[1])} />
        </Trans>
      </p>
      <hr />
      <p>{t('rules.cost')} : {GuardianAnimalDescriptions[item.id].cost} <div css={resourceStyle(ResourceImage[1])} /></p>
      <div>{t('rules.resources')} :
        {Object.keys(GuardianAnimalDescriptions[item.id].resources).map((element, index) => {
          return <>{GuardianAnimalDescriptions[item.id].resources[element]}
            <span key={index} css={resourceStyle(ResourceImage[element])} />
          </>
        })}
      </div>
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
