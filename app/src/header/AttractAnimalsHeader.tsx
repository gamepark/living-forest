/** @jsxImportSource @emotion/react */
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { RuleId } from '@gamepark/living-forest/rules/RuleId'
import { PlayMoveButton, useLegalMoves, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { MaterialMove, isStartRule } from '@gamepark/rules-api'
import { Trans, useTranslation } from 'react-i18next'

export const AttractAnimalsHeader = () => {
  const legalMoves = useLegalMoves<MaterialMove>()
  const pass = legalMoves.find((move) => isStartRule(move) && move.id === RuleId.Action)
  const { t } = useTranslation()
  const rules = useRules<LivingForestRules>()!
  const player = usePlayerId()
  const activePlayer = rules.getActivePlayer()
  const name = usePlayerName(activePlayer)
  if (player === rules.getActivePlayer()) {
    if (pass) {
      return <>
        <Trans defaults="header.attract-animal-pass">
          <PlayMoveButton move={pass} />
        </Trans>
      </>
    } else {
      return <>{t('header.attract-animal.me')} </>
    }
  } else {
    return <>{t('header.attract-animal', { player: name })} </>
  }

}
