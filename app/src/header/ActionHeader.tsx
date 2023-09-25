/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next'
import { usePlayerId, useRules } from '@gamepark/react-game'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { Memory } from '@gamepark/living-forest/refacto/rules/Memory'

export const ActionHeader = () => {
  const { t } = useTranslation()
  const rules = useRules<LivingForestRules>()!
  const player = usePlayerId()
  if (player === rules.getActivePlayer()) {
    return <>{ t('You can perform {action} action(s)', { action: rules.remind(Memory.Actions)})} </>
  }

  return <>{ t('Opponent can perform {action} action(s)', { action: rules.remind(Memory.Actions)})} </>
}
