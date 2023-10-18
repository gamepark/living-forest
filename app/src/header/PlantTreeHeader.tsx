/** @jsxImportSource @emotion/react */
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { useTranslation } from 'react-i18next'

export const PlantTreeHeader = () => {
  const { t } = useTranslation()
  const rules = useRules<LivingForestRules>()!
  const player = usePlayerId()
  const activePlayer = rules.getActivePlayer()
  const name = usePlayerName(activePlayer)
  if (player === rules.getActivePlayer()) {
    return <>{t('header.plant-tree.me')} </>
  } else {
    return <>{t('header.plant-tree', { player: name })} </>
  }
}
