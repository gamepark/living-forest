/** @jsxImportSource @emotion/react */
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { ProtectiveTreeDetail } from '@gamepark/living-forest/material/ProtectivesTrees'
import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree'
import { MaterialHelpProps, PlayMoveButton, useLegalMove, useRules } from '@gamepark/react-game'
import { isMoveItemType, MaterialMove, MoveItem } from '@gamepark/rules-api'
import { Trans, useTranslation } from 'react-i18next'
import { alignIcon, alignIconText, ResourceImage, resourceStyle } from './GuardianAnimalCardHelp'

export const ProtectiveTreeTileHelp = ({ item, itemIndex, closeDialog }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const rules = useRules<LivingForestRules>()!
  const takeProtectiveTree = useLegalMove<MoveItem>((move: MaterialMove) => {
      return isMoveItemType(MaterialType.ProtectiveTreeTiles, itemIndex)(move)
        && item.location?.type === LocationType.TreeDispenser
        && itemIndex === move.itemIndex
    }
  )

  const detail = ProtectiveTreeDetail[item.id]

  return <>
    <h2>{t('rules.protected-tree.title')}</h2>
    <p css={alignIconText}>
      <Trans defaults="rules.protected-tree.get">
        <span css={resourceStyle(ResourceImage[3])}/>
      </Trans>
    </p>
    <p css={alignIconText}>
      <Trans defaults="rules.protected-tree.victory">
        <span css={resourceStyle(ResourceImage[3])}/>
      </Trans>
    </p>
    <hr/>
    <p css={alignIconText}>
      <Trans defaults="rules.cost" values={{ cost: detail.cost }}>
        <span css={resourceStyle(ResourceImage[3])}/>
      </Trans>
    </p>
    {detail.resources && (
      <p css={alignIcon}>{t('rules.resources')} :
        {Object.keys(detail.resources).map((element, index) => {
          return <span key={index}>{detail.resources[element] > 0 && detail.resources[element]}
            {detail.resources[element] > 0 && <span css={resourceStyle(ResourceImage[element])}/>}
        </span>
        })}
      </p>
    )}
    {item.id === ProtectiveTree.Tree11 && (
      <p>
        <Trans defaults="rules.protected-tree.special">
          <strong/>
        </Trans>
      </p>
    )}
    {takeProtectiveTree && !item.selected && (
      <>
        <hr/>
        <Trans defaults="rules.take-tree">
          <PlayMoveButton move={rules.material(MaterialType.ProtectiveTreeTiles).index(takeProtectiveTree.itemIndex).selectItem()} local onPlay={closeDialog}/>
        </Trans>
      </>
    )}
  </>
}
