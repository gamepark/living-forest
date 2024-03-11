/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { LocationHelpProps, PlayMoveButton, useLegalMoves } from '@gamepark/react-game'
import { Trans, useTranslation } from 'react-i18next'
import { MaterialMove, isCustomMoveType } from '@gamepark/rules-api'
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'

export const CircleOfSpiritSpaceHelp: FC<LocationHelpProps> = (({ location, closeDialog }) => {
  const { t } = useTranslation()
  const legalMoves = useLegalMoves<MaterialMove>()
  const move = legalMoves.find((move) => isCustomMoveType(CustomMoveType.MoveOnCircleOfSpirit)(move))
  return <>
    <h2>{t('rules.circle-spirit-space.title')}</h2>
    {(location.x == 1 || location.x == 3 || location.x == 5 || location.x == 7 || location.x == 9 || location.x == 11) &&
      <p>{t('rules.circle-spirit-space.fragment')}</p>
    }
    {(location.x == 4 || location.x == 10) &&
      <p>{t('rules.circle-spirit-space.extinguish')}</p>
    }
    {(location.x == 2 || location.x == 8) &&
      <p>{t('rules.circle-spirit-space.attract')}</p>
    }
    {(location.x == 0 || location.x == 6) &&
      <p>{t('rules.circle-spirit-space.plant')}</p>
    }
    {move && <hr />}
    {move && <Trans defaults="rules.circle-spirit-space.button">
      <PlayMoveButton move={move} onPlay={closeDialog} />
    </Trans>}
  </>
})