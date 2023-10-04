import { BoardDescription, ItemContext, MaterialContext } from '@gamepark/react-game'
import Images from '../../images/Images'
import { MaterialItem } from '@gamepark/rules-api'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { forestTreeSpaces } from '@gamepark/living-forest/material/ForestTreeSpaces'
import { useTranslation } from 'react-i18next'

export class ForestBoardDescription extends BoardDescription {
  height = 16.5
  width = 27

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

  rules = () => {
    const { t } = useTranslation()
    return <>
      <h2>{t('rules.forest.title')}</h2>
      <p>{t('rules.forest.description')}</p>
      <p>{t('rules.forest.resources')}</p>
      <p>{t('rules.forest.victory')}</p>
    </>
  }
}

export const forestBoardDescription = new ForestBoardDescription()