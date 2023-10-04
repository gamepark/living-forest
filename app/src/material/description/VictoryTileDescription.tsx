import { BoardDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import VictoryTiles from '@gamepark/living-forest/material/VictoryTiles'
import { useTranslation } from 'react-i18next'

export class VictoryTileDescription extends BoardDescription {
  width = 4.6
  ratio = 301 / 207

  images = {
    [VictoryTiles.SpringTree]: Images.springVictoryTree,
    [VictoryTiles.SpringFire]: Images.springVictoryFire,
    [VictoryTiles.SpringFlower]: Images.springVictorySacredFlower,
    [VictoryTiles.SummerTree]: Images.summerVictoryTree,
    [VictoryTiles.SummerFire]: Images.summerVictoryFire,
    [VictoryTiles.SummerFlower]: Images.summerVictorySacredFlower,
    [VictoryTiles.AutumnTree]: Images.autumnVictoryTree,
    [VictoryTiles.AutumnFire]: Images.autumnVictoryFire,
    [VictoryTiles.AutumnFlower]: Images.autumnVictorySacredFlower,
    [VictoryTiles.WinterTree]: Images.winterVictoryTree,
    [VictoryTiles.WinterFire]: Images.winterVictoryFire,
    [VictoryTiles.WinterFlower]: Images.winterVictorySacredFlower,
  }

  rules = () => {
    const { t } = useTranslation()
    return <>
      <h2>{t('rules.victory-tile.title')}</h2>
      <p>{t('rules.victory-tile.description')}</p>
    </>
  }
}

export const victoryTileDescription = new VictoryTileDescription()