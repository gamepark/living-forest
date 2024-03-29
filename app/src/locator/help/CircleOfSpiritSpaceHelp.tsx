/** @jsxImportSource @emotion/react */
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'
import { rockRules } from '@gamepark/living-forest/rules/helper/RockRule'
import { RuleId } from '@gamepark/living-forest/rules/RuleId'
import { LocationHelpProps, PlayMoveButton, useLegalMoves } from '@gamepark/react-game'
import { isCustomMoveType, MaterialMove } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'

export const CircleOfSpiritSpaceHelp: FC<LocationHelpProps> = (({ location, closeDialog }) => {
  const { t } = useTranslation()
  const legalMoves = useLegalMoves<MaterialMove>()
  const move = legalMoves.find((move) => isCustomMoveType(CustomMoveType.MoveOnCircleOfSpirit)(move) && move.data.target === location.x)
  const effect = rockRules[location.x!]
  return <>
    <h2>{t('rules.circle-spirit-space.title')}</h2>
    <p><Trans defaults="rules.circle-spirit-space.desc"><strong /></Trans></p>
    {RuleId.TakeFragment === effect &&
      <p>
        <Trans defaults="rules.circle-spirit-space.fragment"><strong /></Trans>
      </p>
    }
    {RuleId.ExtinguishFire === effect &&
      <p>
        <Trans defaults="rules.circle-spirit-space.extinguish"><strong /></Trans>
      </p>
    }
    {RuleId.AttractAnimals === effect &&
      <p>
        <Trans defaults="rules.circle-spirit-space.attract"><strong /></Trans>
      </p>
    }
    {RuleId.PlantTree === effect &&
      <p>
        <Trans defaults="rules.circle-spirit-space.plant"><strong /></Trans>
      </p>
    }
    {move && <Trans defaults="rules.circle-spirit-space.button">
      <PlayMoveButton move={move} onPlay={closeDialog} />
    </Trans>}
  </>
})