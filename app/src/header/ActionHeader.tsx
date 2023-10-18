/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next'
import { usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { Memory } from '@gamepark/living-forest/rules/Memory'

export const ActionHeader = () => {
  const { t } = useTranslation()
  const rules = useRules<LivingForestRules>()!
  const activePlayer = rules.getActivePlayer()
  const player = usePlayerId()
  const name = usePlayerName(activePlayer)
  if (player === rules.getActivePlayer()) {
    return <>{t('header.actions.me', { action: rules.remind(Memory.Actions) })} </>
  }

  return <>{t('header.actions', { action: rules.remind(Memory.Actions), player: name })} </>
}
