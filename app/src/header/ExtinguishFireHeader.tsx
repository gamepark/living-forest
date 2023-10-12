/** @jsxImportSource @emotion/react */
import { Trans, useTranslation } from 'react-i18next'
import { PlayMoveButton, useLegalMoves } from '@gamepark/react-game'
import { MaterialMove, isStartRule } from '@gamepark/rules-api'
import { RuleId } from '@gamepark/living-forest/rules/RuleId'

export const ExtinguishFireHeader = () => {
  const { t } = useTranslation()
  const legalMoves = useLegalMoves<MaterialMove>()
  const pass = legalMoves.find((move) => isStartRule(move) && move.id === RuleId.Action)

  if (pass) {
    return <>
      <Trans defaults="header.extinguish-fire-pass">
        <PlayMoveButton move={pass} />
      </Trans>
    </>

  } else {
    return <>{t('header.extinguish-fire')} </>
  }
}
