import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { ProtectiveTreeDetail } from '@gamepark/living-forest/material/ProtectivesTrees'
import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree'
import { MaterialHelpProps, PlayMoveButton, useLegalMove, useRules } from '@gamepark/react-game'
import { Resource } from '@gamepark/living-forest/material/Resource'
import { isMoveItemType, MaterialMove, MoveItem } from '@gamepark/rules-api'
import { Trans, useTranslation } from 'react-i18next'
import { alignIcon, alignIconText, ResourceImage, resourceStyle } from './GuardianAnimalCardHelp'

export const ProtectiveTreeTileHelp = ({ item, itemIndex, closeDialog }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const rules = useRules<LivingForestRules>()!
  const takeProtectiveTree = useLegalMove<MoveItem>((move: MaterialMove) =>
    isMoveItemType(MaterialType.ProtectiveTreeTiles)(move) && item.location?.type === LocationType.TreeDispenser && move.itemIndex === itemIndex
  )

  const detail = ProtectiveTreeDetail[item.id as ProtectiveTree]

  return <>
    <h2>{t('rules.protected-tree.title')}</h2>
    <p css={alignIconText}>
      <Trans i18nKey="rules.protected-tree.get">
        <span css={resourceStyle(ResourceImage[3])}/>
      </Trans>
    </p>
    <p css={alignIconText}>
      <Trans i18nKey="rules.protected-tree.victory">
        <span css={resourceStyle(ResourceImage[3])}/>
      </Trans>
    </p>
    <hr/>
    <p css={alignIconText}>
      <Trans i18nKey="rules.cost" values={{ cost: detail.cost }}>
        <span css={resourceStyle(ResourceImage[3])}/>
      </Trans>
    </p>
    {detail.resources && (
      <p css={alignIcon}>{t('rules.resources')} :
        {Object.entries(detail.resources).map(([element, value], index) => {
          const resource = Number(element) as Resource
          return <span key={index}>{value > 0 && value}
            {value > 0 && <span css={resourceStyle(ResourceImage[resource])}/>}
        </span>
        })}
      </p>
    )}
    {item.id === ProtectiveTree.Tree11 && (
      <p>
        <Trans i18nKey="rules.protected-tree.special">
          <strong/>
        </Trans>
      </p>
    )}
    {takeProtectiveTree && !item.selected && (
      <>
        <hr/>
        <Trans i18nKey="rules.take-tree">
          <PlayMoveButton move={rules.material(MaterialType.ProtectiveTreeTiles).index(takeProtectiveTree.itemIndex).selectItem()} local onPlay={closeDialog}/>
        </Trans>
      </>
    )}
    {item.location?.type === LocationType.TreeDispenser && (
      <>
        <hr/>
        <p>
          {t('rules.protected-tree.count', { number: rules.material(MaterialType.ProtectiveTreeTiles).location(LocationType.TreeDispenser).id(item.id).getItem()?.quantity ?? 0})}
        </p>
      </>
    )}
  </>
}
