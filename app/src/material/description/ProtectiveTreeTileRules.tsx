import { MaterialRulesProps } from '@gamepark/react-game'
import Images from '../../images/Images'
import { Trans, useTranslation } from 'react-i18next'
import Resource from '@gamepark/living-forest/material/Resource'
import { css } from '@emotion/react'
import { ProtectiveTreeDetail } from '@gamepark/living-forest/material/ProtectivesTrees'

export const ProtectiveTreeTileRules = ({ item }: MaterialRulesProps) => {
  const { t } = useTranslation()
  console.log(ProtectiveTreeDetail[item.id]);


  return <>
    <h2>{t('rules.protected-tree.title')}</h2>
    <p>
      <Trans defaults="rules.protected-tree.get">
        <span css={resourceStyle(ResourceImage[3])} />
      </Trans>
    </p>
    <p>
      <Trans defaults="rules.protected-tree.victory">
        <span css={resourceStyle(ResourceImage[3])} />
      </Trans>
    </p>
    <hr />
    <p>{t('rules.cost')} : {ProtectiveTreeDetail[item.id].cost} <div css={resourceStyle(ResourceImage[1])} /></p>
    <div>{t('rules.resources')} :
      {Object.keys(ProtectiveTreeDetail[item.id].resources).map((element, index) => {
        return <>{ProtectiveTreeDetail[item.id].resources[element]}
          <span key={index} css={resourceStyle(ResourceImage[element])} />
        </>
      })}
    </div>
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
