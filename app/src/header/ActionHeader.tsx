/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next'
import { useRules } from '@gamepark/react-game'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { Memory } from '@gamepark/living-forest/refacto/rules/Memory'

export const ActionHeader = () => {
  const { t } = useTranslation()
  const rules = useRules<LivingForestRules>()!
  return <>{ t('You can perform {action} action(s)', { action: rules.remind(Memory.Actions)})} </>
}
