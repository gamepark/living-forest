import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { MaterialRulesProps, PlayMoveButton, useLegalMove } from '@gamepark/react-game'
import { MaterialMove, isMoveItemType } from '@gamepark/rules-api'
import { Trans, useTranslation } from 'react-i18next'

export const FragmentTileRules = ({ item, itemIndex, closeDialog }: MaterialRulesProps) => {

  const { t } = useTranslation()
  const takeFragment = useLegalMove((move: MaterialMove) =>
    isMoveItemType(MaterialType.FragmentTile, itemIndex)(move) && item.location?.type === LocationType.FragmentStack
  )
  const spendFragment = useLegalMove((move: MaterialMove) =>
    isMoveItemType(MaterialType.FragmentTile, itemIndex)(move) && item.location?.type === LocationType.PlayerFragmentTileStack
  )

  return <>
    <h2>{t('rules.fragment.title')}</h2>
    <p>{t('rules.fragment.description')}</p>
    <p>{t('rules.fragment.get')}</p>
    {(takeFragment || spendFragment) && <hr />}
    {takeFragment && <Trans defaults="rules.take-fragment">
      <PlayMoveButton move={takeFragment} onPlay={closeDialog} />
    </Trans>}
    {spendFragment && <Trans defaults="rules.spend-fragment">
      <PlayMoveButton move={spendFragment} onPlay={closeDialog} />
    </Trans>}
  </>
}
