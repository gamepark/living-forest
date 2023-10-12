/** @jsxImportSource @emotion/react */
import { RuleId } from '@gamepark/living-forest/rules/RuleId'
import { PlayMoveButton, useLegalMoves } from '@gamepark/react-game'
import { MaterialMove, isStartRule } from '@gamepark/rules-api'
import { Trans, useTranslation } from 'react-i18next'

export const AttractAnimalsHeader = () => {
  const legalMoves = useLegalMoves<MaterialMove>()
  const pass = legalMoves.find((move) => isStartRule(move) && move.id === RuleId.Action)
  const { t } = useTranslation()
  if (pass) {
    return <>
      <Trans defaults="header.attract-animal-pass">
        <PlayMoveButton move={pass} />
      </Trans>
    </>
  } else {
    return <>{t('header.attract-animal')} </>
  }

}
