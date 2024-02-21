import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { MaterialHelpProps, PlayMoveButton, useLegalMove } from '@gamepark/react-game'
import { isMoveItemType, MaterialMove } from '@gamepark/rules-api'
import { Trans, useTranslation } from 'react-i18next'

export const FragmentTileHelp = ({ item, itemIndex, closeDialog }: MaterialHelpProps) => {

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
