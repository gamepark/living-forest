import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import { GuardianAnimalDescriptions } from '@gamepark/living-forest/material/GuardianAnimalDescriptions'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { Resource } from '@gamepark/living-forest/material/Resource'
import { HistoryEntry, MaterialLogProps, Picture, usePlayerName } from '@gamepark/react-game'
import { isMoveItemType } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { ResourceImage } from '../../material/description/help/GuardianAnimalCardHelp'
import { getColor } from '../../utils/ColorUtils'
import { pictureCss } from '../LivingForestHistory'

type AttractAnimalRuleHistoryProps = {} & MaterialLogProps

export const AttractAnimalRuleHistory: FC<AttractAnimalRuleHistoryProps> = (props) => {
  const { move, context } = props
  const actionPlayer = context.action.playerId
  const name = usePlayerName(actionPlayer)
  if (!isMoveItemType(MaterialType.GuardianAnimalCard)(move) || move.location?.type !== LocationType.PlayerDeckStack) return null
  const itemId = context.game.items[move.itemType]?.[move.itemIndex]?.id as GuardianAnimal | undefined

  return (
    <HistoryEntry depth={2} backgroundColor={`${getColor(actionPlayer)}40`}>
      <div css={pictureCss}>
        <Trans i18nKey="history.attract" values={{
          player: name,
          cost: itemId !== undefined ? GuardianAnimalDescriptions[itemId]?.cost ?? 0 : 0
        }}>
          <strong/>
          <Picture src={ResourceImage[Resource.Sun]}/>
          <u/>
        </Trans>
      </div>
    </HistoryEntry>
  )

}