import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'
import { forestBoardDescription } from '../material/description/ForestBoardDescription'
import { MaterialItem, MaterialRules } from '@gamepark/rules-api'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'

export const getPositionOnTable = (type: number, rules: MaterialRules, item: MaterialItem, player?: SpiritOfNature) => {
  switch (type) {
    case MaterialType.CircleOfSpiritBoard:
      const { players } = rules
      return {
        x: players.length < 4 ? 9 : 30,
        y: players.length < 4 ? -15 : 15,
        z: 0,
      }
    case MaterialType.ForestBoard: {
      const index = getBoardIndex(item, rules, player)
      if (rules.players.length < 4) {
        return getPositionForIndex(index)
      }
      return getPositionForIndex([0, 2, 3, 5][index])
    }
    default:
      return { x: 0, y: 0, z: 0 }
  }
}

const getBoardIndex = (item: MaterialItem, rules: MaterialRules, player?: SpiritOfNature) => {
  if (!player) return rules.players.indexOf(item.location.player!)
  if (player && player === item.location.player) return 0
  const remainingPlayers = rules.players.filter((p) => p !== player)
  if (remainingPlayers.length === 1) return 2
  return remainingPlayers.indexOf(item.location.player!) + 1
}

const getPositionForIndex = (index: number) => {
  const baseX = -8
  const rightMargin = 13
  const playerIndex = index
  const playerX = (forestBoardDescription.width + rightMargin) * (playerIndex > 2? (playerIndex - 3): playerIndex )
  return { x: baseX + playerX, y: index < 3 ? 21.9 : -22.5, z: 0.1 }
}