/** @jsxImportSource @emotion/react */
import CardType from '@gamepark/living-forest/material/CardType'
import { forestTreeSpaces } from '@gamepark/living-forest/material/ForestTreeSpaces'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree'
import Resource from '@gamepark/living-forest/material/Resource'
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialTutorial, TutorialStep } from '@gamepark/react-game'
import { isCustomMoveType, isEndPlayerTurn, isMoveItemType } from '@gamepark/rules-api'
import { TFunction } from 'i18next'
import { Trans } from 'react-i18next'
import Images from '../images/Images'
import { ResourceImage, resourceStyle, TypeImage } from '../material/description/GuardianAnimalCardRules'
import { TutorialSetup } from './TutorialSetup'

export class Tutorial extends MaterialTutorial<SpiritOfNature, MaterialType, LocationType> {
  version = 1
  options = { players: [{ id: SpiritOfNature.Spring }, { id: SpiritOfNature.Winter }] }
  setup = new TutorialSetup()

  players = [
    { id: SpiritOfNature.Spring },
    {
      id: SpiritOfNature.Winter
    }
  ]

  steps: TutorialStep[] = [
    {
      popup: {
        text: () => <Trans defaults="tuto.welcome"><strong/></Trans>
      }
    },
    {
      popup: { text: (t: TFunction) => t('tuto.pitch') }
    },
    {
      popup: { text: (t: TFunction) => t('tuto.goal') }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.start"><strong/></Trans>,
        position: { x: -10, y: 20 }
      },
      move: {
        player: SpiritOfNature.Spring
      },
      focus: (game) => [
        this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
        this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
      ]
    },
    {
      move: {
        player: SpiritOfNature.Winter
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.animals">
          <span css={resourceStyle(ResourceImage[Resource.Sun])}/>
          <span css={resourceStyle(ResourceImage[Resource.Drop])}/>
          <span css={resourceStyle(ResourceImage[Resource.Seed])}/>
          <span css={resourceStyle(ResourceImage[Resource.Wind])}/>
          <span css={resourceStyle(ResourceImage[Resource.SacredFlower])}/>
        </Trans>
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.sun">
          <span css={resourceStyle(ResourceImage[Resource.Sun])}/>
        </Trans>,
        position: { x: -15, y: 0 }
      },
      focus: (game) => [
        this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
        this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
      ]

    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.draw')
      },
      focus: (game) => [
        this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
        this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
      ],
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) => isMoveItemType(MaterialType.GuardianAnimalCard)(move) && move.location.type === LocationType.HelpLine
      }
    },
    {
      focus: (game) => [
        this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
        this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
      ],
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) => isMoveItemType(MaterialType.GuardianAnimalCard)(move) && move.location.type === LocationType.HelpLine
      }
    },
    {
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) => isMoveItemType(MaterialType.GuardianAnimalCard)(move) && move.location.type === LocationType.HelpLine
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.solitary">
          <strong/>
          <span css={resourceStyle(TypeImage[CardType.Gregarious])}/>
        </Trans>,
        position: { x: 10, y: 0 }
      },
      focus: (game) => [
        this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
        this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).id(GuardianAnimal.Fox)
      ]
    },
    {
      focus: (game) => [
        this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
        this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
      ],
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) => isMoveItemType(MaterialType.GuardianAnimalCard)(move) && move.location.type === LocationType.HelpLine
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.pass">
          <strong/>
          <span css={resourceStyle(TypeImage[CardType.Gregarious])}/>
        </Trans>,
        position: { x: 10, y: 0 }
      },
      focus: (game) => [
        this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
        this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
      ],
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) => isEndPlayerTurn(move) && move.player === SpiritOfNature.Spring
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.simultaneous')
      }
    },
    {
      move: {
        player: SpiritOfNature.Winter,
        filter: (move) => isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      move: {
        player: SpiritOfNature.Winter,
        filter: (move) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.actions')
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.solitary.malus">
          <strong/>
          <span css={resourceStyle(TypeImage[CardType.Gregarious])}/>
        </Trans>
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.actions.list">
          <span css={resourceStyle(Images.TakeFragment)}/>
          <span css={resourceStyle(Images.AttractGuardian)}/>
          <span css={resourceStyle(Images.ExtinguishFire)}/>
          <span css={resourceStyle(Images.MoveCircle)}/>
          <span css={resourceStyle(Images.PlantTree)}/>
        </Trans>
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.actions.unique')
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.action.sun'),
        position: { x: -5, y: 2 }
      },
      focus: (game) => this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow)

    },
    {
      popup: {
        text: () => <Trans defaults="tuto.action.sun.rule" values={{ 'number': '4' }}>
          <span css={resourceStyle(ResourceImage[Resource.Sun])}/>
        </Trans>,
        position: { x: -5, y: 2 }
      },
      focus: (game) => this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow)
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.action.sun.take'),
        position: { x: 0, y: 25 }
      },
      focus: (game) => this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow).id(GuardianAnimal.Flamingo),
      move: {
        player: SpiritOfNature.Spring,
        filter: (move, game) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
          && this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow).id(GuardianAnimal.Flamingo).getIndex() === move.itemIndex
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.action.water'),
        position: { x: 0, y: 30 }
      },
      focus: (game) => this.material(game, MaterialType.FireTile).location(LocationType.CircleOfSpiritBoardFire).id(2)
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.action.water.rule" values={{ 'number': '3' }}>
          <span css={resourceStyle(ResourceImage[Resource.Drop])}/>
        </Trans>,
        position: { x: 0, y: 30 }
      },
      focus: (game) => this.material(game, MaterialType.FireTile).location(LocationType.CircleOfSpiritBoardFire).id(2)

    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.action.water.take'),
        position: { x: 0, y: 30 }
      },
      focus: (game) => this.material(game, MaterialType.FireTile).location(LocationType.CircleOfSpiritBoardFire).id(2),
      move: {
        player: SpiritOfNature.Spring,
        filter: (move, game) =>
          isMoveItemType(MaterialType.FireTile)(move)
          && this.material(game, MaterialType.FireTile).location(LocationType.CircleOfSpiritBoardFire).id(2).getIndex() === move.itemIndex
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.actions.opponent')
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.solitary.opponent')
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.opponent.sun')
      }
    },
    {
      move: {
        player: SpiritOfNature.Winter,
        filter: (move, game) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
          && this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow).id(GuardianAnimal.Meerkat).getIndex() === move.itemIndex
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.onibi.tree.attack')
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.new.animals')
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.discard.animals')
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.sacred.tree')
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.turn.2')
      },
      focus: (game) => [
        this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
        this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
      ],
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.solitary.2">
          <strong/>
          <span css={resourceStyle(TypeImage[CardType.Gregarious])}/>
        </Trans>
      },
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) => isEndPlayerTurn(move) && move.player === SpiritOfNature.Spring
      }
    },
    {
      move: {
        player: SpiritOfNature.Winter,
        filter: (move) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      move: {
        player: SpiritOfNature.Winter,
        filter: (move) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      move: {
        player: SpiritOfNature.Winter,
        filter: (move) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      move: {
        player: SpiritOfNature.Winter,
        filter: (move) => isEndPlayerTurn(move) && move.player === SpiritOfNature.Winter
      }
    },
    {
      move: {
        player: SpiritOfNature.Winter,
        filter: (move, _game) =>
          isMoveItemType(MaterialType.ProtectiveTreeTiles)(move)
      }
    },
    {
      move: {
        player: SpiritOfNature.Winter,
        filter: (move, _game) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.opponent.played')
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.trees">
          <span css={resourceStyle(ResourceImage[Resource.Seed])}/>
        </Trans>
      },
      focus: (game) => this.material(game, MaterialType.ProtectiveTreeTiles).location(LocationType.TreeDispenser)
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.trees.bonus">
          <strong/>
        </Trans>,
        position: { x: 0, y: 25 }
      },
      focus: () => [
        ...forestTreeSpaces.map((coordinates) => this.location(LocationType.TreeSpace).player(SpiritOfNature.Spring).x(coordinates.x).y(coordinates.y))
      ]
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.lines.bonus">
          <span css={resourceStyle(ResourceImage[Resource.Seed])}/>
        </Trans>,
        position: { x: 0, y: -27 }
      },
      focus: () => [
        {
          type: MaterialType.ForestBoard,
          item: { id: SpiritOfNature.Spring, location: { id: SpiritOfNature.Spring, type: LocationType.Table, player: SpiritOfNature.Spring } }
        }
      ]
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.tree.plant">
          <span css={resourceStyle(ResourceImage[Resource.Sun])}/>
        </Trans>
      },
      focus: (game) => [
        this.material(game, MaterialType.ProtectiveTreeTiles).location(LocationType.TreeDispenser).id(ProtectiveTree.Tree3A),
        this.location(LocationType.TreeSpace).player(SpiritOfNature.Spring).x(2).y(0)
      ],
      move: {
        player: SpiritOfNature.Spring,
        filter: (move, game) =>
          isMoveItemType(MaterialType.ProtectiveTreeTiles)(move)
          && move.location.x === 2 && move.location.y === 0
          && this.material(game, MaterialType.ProtectiveTreeTiles).location(LocationType.TreeDispenser).id(ProtectiveTree.Tree3A).getIndex() === move.itemIndex
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.wind">
          <strong/>
        </Trans>,
        position: { x: 50, y: 0 }
      },
      focus: () => this.location(LocationType.CircleOfSpiritBoardFire)
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.wind.move">
          <span css={resourceStyle(ResourceImage[Resource.Wind])}/>
        </Trans>,
        position: { x: -45, y: 0 }
      },
      focus: () => this.location(LocationType.CircleOfSpiritBoardFire),
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) => isCustomMoveType(CustomMoveType.MoveOnCircleOfSpirit)(move)
          && move.data.target === 2 && move.data.distance === 2
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.wind.rules'),
        position: { x: -45, y: 0 }
      },
      focus: () => this.location(LocationType.CircleOfSpiritBoardFire)
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.wind.steal">
          <strong/>
        </Trans>,
        position: { x: 10, y: -5 }
      },
      focus: (game) => this.material(game, MaterialType.VictoryTile).location(LocationType.VictoryTileArea).player(SpiritOfNature.Winter)
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.wind.action">
          <span css={resourceStyle(ResourceImage[Resource.Sun])}/>
        </Trans>,
        position: { x: -45, y: 0 }
      },
      focus: () => this.location(LocationType.CircleOfSpiritBoardFire)
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.sun.tree.bonus" values={{ 'number': '5' }}>
          <span css={resourceStyle(ResourceImage[Resource.Sun])}/>
        </Trans>,
        position: { x: -45, y: 0 }
      },
      focus: () => [
        this.location(LocationType.CircleOfSpiritBoardFire),
      ]
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.gregarious">
          <strong/>
          <span css={resourceStyle(TypeImage[CardType.Solitary])}/>
          <span css={resourceStyle(TypeImage[CardType.Gregarious])}/>
        </Trans>,
        position: { x: 0, y: 29 }
      },
      focus: (game) => this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow).id(GuardianAnimal.Butterfly),
      move: {
        player: SpiritOfNature.Spring,
        filter: (move, game) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
          && this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow).id(GuardianAnimal.Butterfly).getIndex() === move.itemIndex
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.varan')
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.varan.rule">
          <strong/>
          <span css={resourceStyle(ResourceImage[Resource.Drop])}/>,
        </Trans>
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.fragment.varan')
      },
      focus: (game) => [
        this.location(LocationType.FragmentStack),
        this.material(game, MaterialType.FragmentTile).location(LocationType.FragmentStack)
      ]
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.fragment.other')
      },
      focus: (game) => [
        this.location(LocationType.FragmentStack),
        this.material(game, MaterialType.FragmentTile).location(LocationType.FragmentStack)
      ]
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.game.over">
          <strong/>
          <span css={resourceStyle(ResourceImage[Resource.Sun])}/>
          <span css={resourceStyle(ResourceImage[Resource.Seed])}/>
          <span css={resourceStyle(ResourceImage[Resource.SacredFlower])}/>
        </Trans>
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.complete')
      }
    }
  ]
}