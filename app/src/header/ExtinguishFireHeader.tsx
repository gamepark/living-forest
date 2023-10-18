/** @jsxImportSource @emotion/react */
import { Trans, useTranslation } from 'react-i18next'
import { PlayMoveButton, useLegalMoves, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { MaterialMove, isStartRule } from '@gamepark/rules-api'
import { RuleId } from '@gamepark/living-forest/rules/RuleId'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'

export const ExtinguishFireHeader = () => {
  const { t } = useTranslation()
  const legalMoves = useLegalMoves<MaterialMove>()
  const pass = legalMoves.find((move) => isStartRule(move) && move.id === RuleId.Action)
  const rules = useRules<LivingForestRules>()!
  const player = usePlayerId()
  const activePlayer = rules.getActivePlayer()
  const name = usePlayerName(activePlayer)
  if (player === rules.getActivePlayer()) {
    if (pass) {
      return <>
        <Trans defaults="header.extinguish-fire-pass">
          <PlayMoveButton move={pass} />
        </Trans>
      </>

    } else {
      return <>{t('header.extinguish-fire.me')} </>
    }
  } else {
    return <>{t('header.extinguish-fire', { player: name })} </>
  }
}
