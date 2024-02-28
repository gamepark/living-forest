import { forestBoardDescription } from '../material/description/ForestBoardDescription'
import { MaterialItem, MaterialRules } from '@gamepark/rules-api'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'

export const getPlayerBoardPositionOnTable = (rules: MaterialRules, item: MaterialItem, player?: SpiritOfNature) => {
  const index = getIndexForPlayers(item, rules, player)
  return getPositionForIndex(index, rules.players)
}

export const getIndexForPlayers = (item: MaterialItem, rules: MaterialRules, player?: SpiritOfNature) => {
  return [0, 2, 3, 5][getBoardIndex(item, rules, player)]
}

export const getBoardIndex = (item: MaterialItem, rules: MaterialRules, player?: SpiritOfNature) => {
  if (!player) return rules.players.indexOf(item.location.player!)
  if (player && player === item.location.player) return 0
  const remainingPlayers = rules.players.filter((p) => p !== player)
  if (remainingPlayers.length === 1) return 1
  return remainingPlayers.indexOf(item.location.player!) + 1
}

const getPositionForIndex = (index: number, players: SpiritOfNature[]) => {
  const twoPlayers = players.length === 2
  const baseX = -8
  const baseY = twoPlayers? 2: 0
  const rightMargin = 13
  const playerIndex = index
  const playerX = (forestBoardDescription.width + rightMargin) * (playerIndex > 2? (playerIndex - 3): playerIndex )
  return { x: baseX + playerX, y: baseY + (index < 3 ? 18 : -20), z: 0.05 }
}