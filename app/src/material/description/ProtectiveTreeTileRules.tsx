/** @jsxImportSource @emotion/react */
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { ProtectiveTreeDetail } from '@gamepark/living-forest/material/ProtectivesTrees'
import { MaterialHelpProps, PlayMoveButton, useLegalMove } from '@gamepark/react-game'
import { isMoveItemType, MaterialMove } from '@gamepark/rules-api'
import { Trans, useTranslation } from 'react-i18next'
import { alignIcon, alignIconText, ResourceImage, resourceStyle } from './GuardianAnimalCardRules'

export const ProtectiveTreeTileRules = ({ item, itemIndex }: MaterialHelpProps) => {
  const { t } = useTranslation()
  const takeProtectiveTree = useLegalMove((move: MaterialMove) =>
    isMoveItemType(MaterialType.ProtectiveTreeTiles, itemIndex)(move) && item.location?.type === LocationType.TreeDispenser
  )
  return <>
    <h2>{t('rules.protected-tree.title')}</h2>
    <p css={alignIconText}>
      <Trans defaults="rules.protected-tree.get">
        <span css={resourceStyle(ResourceImage[3])} />
      </Trans>
    </p>
    <p css={alignIconText}>
      <Trans defaults="rules.protected-tree.victory">
        <span css={resourceStyle(ResourceImage[3])} />
      </Trans>
    </p>
    <hr />
    <p css={alignIcon}>{t('rules.cost')} :
      <span>{ProtectiveTreeDetail[item.id].cost} <span css={resourceStyle(ResourceImage[3])} /></span>
    </p>
    <p css={alignIcon}>{t('rules.resources')} :
      {Object.keys(ProtectiveTreeDetail[item.id].resources).map((element, index) => {
        return <span key={index}>{ProtectiveTreeDetail[item.id].resources[element] > 0 && ProtectiveTreeDetail[item.id].resources[element]}
          {ProtectiveTreeDetail[item.id].resources[element] > 0 && <span css={resourceStyle(ResourceImage[element])} />}
        </span>
      })}
    </p>
    {takeProtectiveTree && <hr />}
    {takeProtectiveTree && <Trans defaults="rules.take-tree">
      <PlayMoveButton move={takeProtectiveTree} />
    </Trans>}
  </>
}
