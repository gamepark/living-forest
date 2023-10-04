import { MaterialRulesProps, TokenDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree'
import { Trans, useTranslation } from 'react-i18next'
import Resource from '@gamepark/living-forest/material/Resource'
import { css } from '@emotion/react'

export class ProtectiveTreeTileDescription extends TokenDescription {
  ratio = 1
  width = 3.6
  borderRadius = 0.3

  images = {
    [ProtectiveTree.Tree3A]: Images.tree3A,
    [ProtectiveTree.Tree3B]: Images.tree3B,
    [ProtectiveTree.Tree4A]: Images.tree4A,
    [ProtectiveTree.Tree4B]: Images.tree4B,
    [ProtectiveTree.Tree5A]: Images.tree5A,
    [ProtectiveTree.Tree5B]: Images.tree5B,
    [ProtectiveTree.Tree6]: Images.tree6,
    [ProtectiveTree.Tree7]: Images.tree7,
    [ProtectiveTree.Tree8]: Images.tree8,
    [ProtectiveTree.Tree9]: Images.tree9,
    [ProtectiveTree.Tree10]: Images.tree10,
    [ProtectiveTree.Tree11]: Images.tree11
  }

  rules = (props: MaterialRulesProps) => {
    const { item } = props
    const { t } = useTranslation()
    console.log(ProtectiveTreeTileDescription[item.id]);

    return <>
      <h2>{t('rules.protected-tree.title')}</h2>
      <p>
        <Trans defaults="rules.circle-spirit.get">
          <span css={resourceStyle(ResourceImage[3])} />
        </Trans>
      </p>
      <p>
        <Trans defaults="rules.circle-spirit.victory">
          <span css={resourceStyle(ResourceImage[3])} />
        </Trans>
      </p>
      <hr />
      <p>{t('rules.cost')} : {ProtectiveTreeTileDescription[item.id].cost} <div css={resourceStyle(ResourceImage[1])} /></p>
      <div>{t('rules.resources')} :
        {Object.keys(ProtectiveTreeTileDescription[item.id].resources).map((element, index) => {
          return <>{ProtectiveTreeTileDescription[item.id].resources[element]}
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

export const protectiveTreeTileDescription = new ProtectiveTreeTileDescription()