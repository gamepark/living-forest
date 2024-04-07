import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { BoardDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import { ForestBoardExtensionHelp } from './help/ForestBoardExtensionHelp'

export class ForestBoardExtensionDescription extends BoardDescription {
  // height = 17.72
  // width = 29

  // getLocations(item: MaterialItem) {
  //   return forestTreeSpaces.map((coordinates) => ({ type: LocationType.TreeSpace, ...coordinates, player: item.id }))
  // }

  // getStaticItems({ rules: { players } }: MaterialContext): MaterialItem<number, number>[] {
  //   return players.map((p) => ({ id: p, location: { type: LocationType.Table } }))
  // }

  images = {
    [SpiritOfNature.Autumn]: Images.AutumnPlayerBoardExtension,
    [SpiritOfNature.Winter]: Images.WinterPlayerBoardExtension,
    [SpiritOfNature.Spring]: Images.SpringPlayerBoardExtension,
    [SpiritOfNature.Summer]: Images.SummerPlayerBoardExtension,
  }

  help = ForestBoardExtensionHelp
}

export const forestBoardDescription = new ForestBoardExtensionDescription()
