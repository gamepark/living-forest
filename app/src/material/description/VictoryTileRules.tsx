import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { MaterialRulesProps, PlayMoveButton, useLegalMove } from '@gamepark/react-game'
import { MaterialMove, isMoveItemType } from '@gamepark/rules-api'
import { Trans, useTranslation } from 'react-i18next'

export const VictoryTileRules = ({ item, itemIndex, closeDialog }: MaterialRulesProps) => {
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
