/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next'
import { usePlayerId, useRules } from '@gamepark/react-game'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { Memory } from '@gamepark/living-forest/rules/Memory'

export const ActionHeader = () => {
  const { t } = useTranslation()
  const rules = useRules<LivingForestRules>()!
  const player = usePlayerId()
  if (player === rules.getActivePlayer()) {
    return <>{t('header.actions', { action: rules.remind(Memory.Actions) })} </>
  }

  return <>{t('header.actions-opponent', { action: rules.remind(Memory.Actions) })} </>
}
