import { BoardDescription, ItemContext, MaterialContext } from '@gamepark/react-game'
import Images from '../../images/Images'
import { MaterialItem } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { forestTreeSpaces } from '@gamepark/living-forest/material/ForestTreeSpaces'
import { ForestBoardRules } from './ForestBoardRules'

export class ForestBoardDescription extends BoardDescription {
  height = 17.72
  width = 29

  getLocations(item: MaterialItem, { player }: ItemContext) {
    if (!player || item.location.player !== player) return []
    return forestTreeSpaces.map((coordinates) => ({ type: LocationType.TreeSpace, ...coordinates, player }))
  }

  getStaticItems({ rules: { players } }: MaterialContext): MaterialItem<number, number>[] {
    return players.map((p) => ({ id: p, location: { id: p, type: LocationType.Table, player: p } }))
  }

  images = {
    [SpiritOfNature.Autumn]: Images.AutumnPlayerBoard,
    [SpiritOfNature.Winter]: Images.WinterPlayerBoard,
    [SpiritOfNature.Spring]: Images.SpringPlayerBoard,
    [SpiritOfNature.Summer]: Images.SummerPlayerBoard,
  }

  rules = ForestBoardRules
}

export const forestBoardDescription = new ForestBoardDescription()