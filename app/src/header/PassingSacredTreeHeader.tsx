/** @jsxImportSource @emotion/react */
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { TurnOrder } from '@gamepark/living-forest/rules/helper/TurnOrder'
import { usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { useTranslation } from 'react-i18next'

export const PassingSacredTreeHeader = () => {
  const { t } = useTranslation()
  const rules = useRules<LivingForestRules>()!
  const newPlayer = new TurnOrder(rules.game).nextFirstPlayer
  const playerName = usePlayerName(newPlayer)
  const playerId = usePlayerId()
  const itsMe = playerId && playerId === newPlayer

  return <>{t(itsMe? 'header.giving-sacred-tree.me': 'header.giving-sacred-tree', { player: playerName})} </>
}
