/** @jsxImportSource @emotion/react */
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { useTranslation } from 'react-i18next'


export const MoveOnCircleOfSpiritHeader = () => {
  const { t } = useTranslation()
  const playerId = usePlayerId()
  const rules = useRules<LivingForestRules>()!
  const activePlayer = rules.getActivePlayer()
  const name = usePlayerName(activePlayer)
  const itsMe = playerId && playerId === activePlayer


  return <>{t(itsMe? 'header.move-circle.me': 'header.move-circle', { player: name })} </>
}
