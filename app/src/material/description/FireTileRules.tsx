/** @jsxImportSource @emotion/react */
import { MaterialHelpProps, PlayMoveButton, useLegalMove } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'
import { MaterialMove, isMoveItemType } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { ResourceImage, alignIconText, resourceStyle } from './GuardianAnimalCardRules'

export const FileTileRules = ({ item, itemIndex, closeDialog }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const extinguish = useLegalMove((move: MaterialMove) =>
    isMoveItemType(MaterialType.FireTile, itemIndex)(move) && item.location?.type === LocationType.CircleOfSpiritBoardFire
  )

  return <>
    <h2>{t('rules.fire-tile.title')}</h2>
    <p>{t('rules.fire-tile.points')}</p>
    <p css={alignIconText}>
      <Trans defaults="rules.circle-spirit.end">
        <span css={resourceStyle(ResourceImage[2])} />
      </Trans>
    </p>
    <hr />

    <p css={alignIconText}>
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
