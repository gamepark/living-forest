/** @jsxImportSource @emotion/react */
import { MaterialRulesProps, PlayMoveButton, useLegalMove } from '@gamepark/react-game'
import Images from '../../images/Images'
import Resource from '@gamepark/living-forest/material/Resource'
import { css } from '@emotion/react'
import { Trans, useTranslation } from 'react-i18next'
import { MaterialMove, isMoveItemType } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/material/LocationType'

export const FileTileRules = ({ item, itemIndex, closeDialog }: MaterialRulesProps) => {
  const { t } = useTranslation()
  const extinguish = useLegalMove((move: MaterialMove) =>
    isMoveItemType(MaterialType.FireTile, itemIndex)(move) && item.location?.type === LocationType.CircleOfSpiritBoardFire
  )
  console.log(item);
  console.log(extinguish);

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
    {extinguish && <hr />}
    {extinguish && <Trans defaults="rules.extinguish-fire">
      <PlayMoveButton move={extinguish} onPlay={closeDialog} />
    </Trans>}
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
