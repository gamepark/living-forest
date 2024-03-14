import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialRules } from '@gamepark/rules-api'
import { forestBoardDescription } from '../material/description/ForestBoardDescription'

export const getPlayerBoardPositionOnTable = (rules: MaterialRules, currentPlayer: SpiritOfNature,  player?: SpiritOfNature) => {
  const index = getIndexForPlayers(currentPlayer, rules, player)
  return getPositionForIndex(index, rules.players)
}

export const getIndexForPlayers = (currentPlayer: SpiritOfNature, rules: MaterialRules, player?: SpiritOfNature) => {
  if (rules.players.length === 2) return [0, 3][getBoardIndex(currentPlayer, rules, player)]
  if (rules.players.length === 3) return [0, 1, 3][getBoardIndex(currentPlayer, rules, player)]
  return getBoardIndex(currentPlayer, rules, player)
}

export const getBoardIndex = (currentPlayer: SpiritOfNature, rules: MaterialRules, player?: SpiritOfNature) => {
  if (!player) return rules.players.indexOf(currentPlayer)
  if (player && player === currentPlayer) return 0
  const remainingPlayers = rules.players.filter((p) => p !== player)
  if (remainingPlayers.length === 1) return 1
  return remainingPlayers.indexOf(currentPlayer) + 1
}

const getPositionForIndex = (index: number, players: SpiritOfNature[]) => {
  const twoPlayers = players.length === 2
  const top = index === 1 || index === 2
  const baseX = -8
  const baseY = twoPlayers? 2: 0
  const rightMargin = 13
  const playerX = (forestBoardDescription.width + rightMargin) * (index > 1? 2: 0 )
  return { x: baseX + playerX, y: baseY + (!top ? 18 : -20), z: 0.05 }
}