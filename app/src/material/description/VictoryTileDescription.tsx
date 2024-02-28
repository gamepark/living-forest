import { css } from '@emotion/react'
import VictoryTiles from '@gamepark/living-forest/material/VictoryTiles'
import { BoardDescription } from '@gamepark/react-game'
import Images from '../../images/Images'
import { VictoryTileHelp } from './help/VictoryTileHelp'

export class VictoryTileDescription extends BoardDescription {
  width = 4.6
  ratio = 301 / 207
  height = 4.6 / this.ratio

  getFrontExtraCss() {
    return css`
      border-radius: 2em 5em 5em 2em;
    `
  }

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

  help = VictoryTileHelp
}

export const victoryTileDescription = new VictoryTileDescription()
