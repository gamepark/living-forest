/** @jsxImportSource @emotion/react */
import { LivingForestSetup } from '@gamepark/living-forest/LivingForestSetup'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialTutorial, TutorialStep } from '@gamepark/react-game'
import { Trans } from 'react-i18next'


export class Tutorial extends MaterialTutorial<SpiritOfNature, MaterialType, LocationType> {
  version = 4
  options = { players: [{ id: SpiritOfNature.Spring }, {
      id: SpiritOfNature.Autumn
    }]}
  setup = new LivingForestSetup()

  players = [{ id: SpiritOfNature.Spring }, {
    id: SpiritOfNature.Autumn
  }]

  steps: TutorialStep[] = [
    {
      popup: {
        text: () => <Trans defaults="tuto.start"><strong/><em/></Trans>
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.intro"><strong/><em/></Trans>
      }
    },
    {
      popup: {
        position: { x: 0, y: 30 },
        text: () => <Trans defaults="tuto.tresor"><strong/><em/></Trans>
      },
      move: {
        player: SpiritOfNature.Spring
      },
      focus: (game) => [
        this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
        this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
      ]
    }, {
      move: {
        player: SpiritOfNature.Autumn
      },
    }
  ]
}
