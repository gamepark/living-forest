import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { MaterialHelpProps, PlayMoveButton, useLegalMove } from '@gamepark/react-game'
import { isMoveItemType, MaterialMove } from '@gamepark/rules-api'
import { Trans, useTranslation } from 'react-i18next'

export const VictoryTileRules = ({ item, itemIndex, closeDialog }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const takeVictory = useLegalMove((move: MaterialMove) =>
    isMoveItemType(MaterialType.VictoryTile, itemIndex)(move) && item.location?.type === LocationType.VictoryTileArea
  )

  return <>
    <h2>{t('rules.victory-tile.title')}</h2>
    <p>{t('rules.victory-tile.description')}</p>
    {takeVictory && <Trans defaults="rules.take-victory">
      <PlayMoveButton move={takeVictory} onPlay={closeDialog} />
    </Trans>}
  </>
}
