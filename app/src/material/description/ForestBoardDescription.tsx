import { BoardDescription, MaterialContext } from '@gamepark/react-game'
import Images from '../../images/Images'
import { MaterialItem } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/living-forest/refacto/material/LocationType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'

export class ForestBoardDescription extends BoardDescription {
  height =  16.5
  width = 27

  getStaticItems({ rules: { players } }: MaterialContext): MaterialItem<number, number>[] {
    return players.map((p) => ({ id: p, location: { id: p, type: LocationType.Table, player: p }}))
  }

  images = {
    [SpiritOfNature.Autumn]: Images.AutumnPlayerBoard,
    [SpiritOfNature.Winter]: Images.WinterPlayerBoard,
    [SpiritOfNature.Spring]: Images.SpringPlayerBoard,
    [SpiritOfNature.Summer]: Images.SummerPlayerBoard,
  }

  rules = () => <p></p>
}

export const forestBoardDescription = new ForestBoardDescription()