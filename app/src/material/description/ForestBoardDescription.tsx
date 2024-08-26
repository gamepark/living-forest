import { forestTreeSpaces } from '@gamepark/living-forest/material/ForestTreeSpaces'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { BoardDescription, ItemContext, MaterialContext } from '@gamepark/react-game'
import { MaterialItem } from '@gamepark/rules-api'
import Images from '../../images/Images'
import { ForestBoardHelp } from './help/ForestBoardHelp'

export class ForestBoardDescription extends BoardDescription {
  height = 17.72
  width = 29

  getLocations(item: MaterialItem, { player }: ItemContext) {
    if (item.location.player !== player) return []
    return forestTreeSpaces.map((coordinates) => ({ type: LocationType.TreeSpace, ...coordinates, player: item.id }))
  }

  getStaticItems({ rules: { players } }: MaterialContext): MaterialItem<number, number>[] {
    return players.map(player => this.getPlayerBoard(player))
  }

  getPlayerBoard(player: SpiritOfNature) {
    return { id: player, location: { type: LocationType.Table, player } }
  }

  images = {
    [SpiritOfNature.Autumn]: Images.AutumnPlayerBoard,
    [SpiritOfNature.Winter]: Images.WinterPlayerBoard,
    [SpiritOfNature.Spring]: Images.SpringPlayerBoard,
    [SpiritOfNature.Summer]: Images.SummerPlayerBoard
  }

  help = ForestBoardHelp
}

export const forestBoardDescription = new ForestBoardDescription()
