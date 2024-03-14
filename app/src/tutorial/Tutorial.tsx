/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import CardType from '@gamepark/living-forest/material/CardType'
import { forestTreeSpaces } from '@gamepark/living-forest/material/ForestTreeSpaces'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree'
import Resource from '@gamepark/living-forest/material/Resource'
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'
import { RuleId } from '@gamepark/living-forest/rules/RuleId'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { MaterialTutorial, TutorialStep } from '@gamepark/react-game'
import { isCustomMoveType, isEndPlayerTurn, isMoveItemType, isStartRule, MaterialGame } from '@gamepark/rules-api'
import { TFunction } from 'i18next'
import { Trans } from 'react-i18next'
import Images from '../images/Images'
import { ResourceImage, resourceStyle, TypeImage } from '../material/description/help/GuardianAnimalCardHelp'
import { TutorialSetup } from './TutorialSetup'

export class Tutorial extends MaterialTutorial<SpiritOfNature, MaterialType, LocationType> {
  version = 2
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
        position: { x: -5, y: 20 }
      },
      move: {
        player: SpiritOfNature.Spring
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
        ],
        locations: [this.location(LocationType.HelpLine).player(SpiritOfNature.Spring).location],
        margin: {
          top: 1,
          left: 1,
          bottom: 2
        }
      })
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
        </Trans>,
        position: { x: -5, y: 0 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring)
        ],
        locations: [this.location(LocationType.HelpLine).player(SpiritOfNature.Spring).location],
        margin: {
          top: 1,
          left: 1,
          bottom: 2
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.sun">
          <span css={resourceStyle(ResourceImage[Resource.Sun])}/>
        </Trans>,
        position: { x: -5, y: 0 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
        ],
        locations: [
          this.location(LocationType.HelpLine).player(SpiritOfNature.Spring).location
        ],
        margin: {
          top: 1,
          left: 1,
          bottom: 2
        }
      })

    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.draw'),
        position: { x: 0, y: 25 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
        ],
        locations: [
          this.location(LocationType.HelpLine).player(SpiritOfNature.Spring).location
        ],
        margin: {
          top: 1,
          left: 1,
          bottom: 2
        }
      }),
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) => isMoveItemType(MaterialType.GuardianAnimalCard)(move) && move.location.type === LocationType.HelpLine
      }
    },
    {
      focus: (game: MaterialGame) => this.steps[game.tutorialStep! - 1].focus!(game),
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) => isMoveItemType(MaterialType.GuardianAnimalCard)(move) && move.location.type === LocationType.HelpLine
      }
    },
    {
      focus: (game: MaterialGame) => this.steps[game.tutorialStep! - 2].focus!(game),
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) => isMoveItemType(MaterialType.GuardianAnimalCard)(move) && move.location.type === LocationType.HelpLine
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.solitary">
          <strong/>
          <span css={resourceStyle(TypeImage[CardType.Solitary])}/>
        </Trans>,
        position: { x: 10, y: 0 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).id(GuardianAnimal.Fox)
        ],
        margin: {
          right: 25,
          bottom: 1.5
        }
      })
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.draw'),
        position: { x: 0, y: 25 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
        ],
        locations: [
          this.location(LocationType.HelpLine).player(SpiritOfNature.Spring).location
        ],
        margin: {
          top: 1,
          left: 1,
          bottom: 2
        }
      }),
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) => isMoveItemType(MaterialType.GuardianAnimalCard)(move) && move.location.type === LocationType.HelpLine
      }
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.pass">
          <strong/>
          <span css={resourceStyle(TypeImage[CardType.Solitary])}/>
        </Trans>,
        position: { x: 10, y: 0 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
        ],
        margin: {
          right: 25,
          bottom: 1.5
        }
      }),
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
        filter: (move) => isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.actions'),
        position: { x: 0, y: 5 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.SacredTree)
        ],
        margin: {
          bottom: 12
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.solitary.malus">
          <strong/>
          <span css={resourceStyle(TypeImage[CardType.Solitary])}/>
        </Trans>
      }
    },
    {
      popup: {
        text: () => <>
          <Trans defaults="tuto.actions.list"/>
          <span css={actionItem}><span css={resourceStyle(Images.TakeFragment)}/> <Trans defaults="rules.take-fragment"><span/></Trans></span>
          <span css={actionItem}><span css={resourceStyle(Images.AttractGuardian)}/> <Trans defaults="tuto.actions.list.sun"/></span>
          <span css={actionItem}><span css={resourceStyle(Images.ExtinguishFire)}/> <Trans defaults="tuto.actions.list.water"/></span>
          <span css={actionItem}><span css={resourceStyle(Images.MoveCircle)}/> <Trans defaults="tuto.actions.list.wind"/></span>
          <span css={actionItem}><span css={resourceStyle(Images.PlantTree)}/> <Trans defaults="header.plant-tree.me"><span/></Trans></span>
        </>
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
        position: { x: -40, y: 3 }
      },
      focus: (game) => ({
        materials: [this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow)],
        margin: { left: 30, top: 1, bottom: 1 }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.action.sun.rule" values={{ number: '3' }}>
          <span css={resourceStyle(ResourceImage[Resource.Sun])}/>
        </Trans>,
        position: { x: 10, y: 0 }
      },

      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).id(GuardianAnimal.Weasel), // weasel
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).id(GuardianAnimal.Boar), // boar
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).id(GuardianAnimal.Tanuki) // tanu
        ]
      })
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.action.sun.take'),
        position: { x: 0, y: 25 }
      },
      focus: (game) => ({
        materials: [this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow).id(GuardianAnimal.Flamingo)],
        locations: [this.location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring).location],
        margin: {
          top: 1,
          bottom: 1,
          left: 1
        }
      }),
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
      focus: (game) => ({
        materials: [this.material(game, MaterialType.FireTile).location(LocationType.CircleOfSpiritBoardFire).id(2)]
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.action.water.rule" values={{ 'number': '2' }}>
          <span css={resourceStyle(ResourceImage[Resource.Drop])}/>
        </Trans>,
        position: { x: 10, y: 0 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).id(GuardianAnimal.Fox), // weasel
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).id(GuardianAnimal.Bear) // boar
        ],
        margin: {
          right: 25
        }
      })

    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.action.water.take'),
        position: { x: 0, y: 0 }
      },
      focus: (game) => ({
        materials: [this.material(game, MaterialType.FireTile).location(LocationType.CircleOfSpiritBoardFire).id(2)],
        locations: [this.location(LocationType.PlayerFireTileStack).player(SpiritOfNature.Spring).location],
        margin: {
          top: 1,
          bottom: 1
        }
      }),
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
        text: (t: TFunction) => t('tuto.solitary.opponent'),
        position: { x: 10, y: 2 }
      },
      focus: (game) => ({
        materials: [this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Winter)],
        margin: {
          right: 25
        }
      })
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
          && this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow).id(GuardianAnimal.Meerkat).getIndex() === move.itemIndex,
        interrupt: (move) => isStartRule(move) && move.id === RuleId.OnibiAttacksSacredTree
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.onibi.tree.attack')
      },
      move: {
        interrupt: (move) => isStartRule(move) && move.id === RuleId.GuardianAnimalsArrival
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.new.animals')
      },
      move: {
        interrupt: (move) => isStartRule(move) && move.id === RuleId.ReturnOfGuardianAnimals
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.discard.animals')
      },
      move: {
        interrupt: (move) => isStartRule(move) && move.id === RuleId.PassingSacredTree
      }
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.sacred.tree')
      },
      move: {}
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.turn.2'),
        position: { x: 0, y: 25 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
        ],
        locations: [
          this.location(LocationType.HelpLine).player(SpiritOfNature.Spring).location
        ],
        margin: {
          top: 1,
          left: 1,
          bottom: 2
        }
      }),
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      focus: (game: MaterialGame) => this.steps[game.tutorialStep! - 1].focus!(game),
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      focus: (game: MaterialGame) => this.steps[game.tutorialStep! - 2].focus!(game),
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      focus: (game: MaterialGame) => this.steps[game.tutorialStep! - 3].focus!(game),
      move: {
        player: SpiritOfNature.Spring,
        filter: (move) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
      }
    },
    {
      focus: (game: MaterialGame) => this.steps[game.tutorialStep! - 4].focus!(game),
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
          <span css={resourceStyle(TypeImage[CardType.Solitary])}/>
        </Trans>,
        position: { x: 25, y: 4 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).id(GuardianAnimal.Beetle),
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).id(GuardianAnimal.Owl)
        ],
        margin: {
          right: 20
        }
      }),
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
          isMoveItemType(MaterialType.ProtectiveTreeTiles)(move) && _game.items[move.itemType]![move.itemIndex].id === ProtectiveTree.Tree3B
      }
    },
    {
      move: {
        player: SpiritOfNature.Winter,
        filter: (move, game) => isMoveItemType(MaterialType.GuardianAnimalCard)(move) && game.items[move.itemType]![move.itemIndex].id === GuardianAnimal.Hedgehog
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
        </Trans>,
        position: { x: 35, y: 10 }
      },
      focus: (game) => ({
        materials: [this.material(game, MaterialType.ProtectiveTreeTiles).location(LocationType.TreeDispenser)]
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.trees.bonus">
          <strong/>
        </Trans>,
        position: { x: 0, y: 25 }
      },
      focus: () => ({
        locations: forestTreeSpaces.map((coordinates) => this.location(LocationType.TreeSpace).player(SpiritOfNature.Spring).x(coordinates.x).y(coordinates.y).location)
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.lines.bonus">
          <span css={resourceStyle(ResourceImage[Resource.Seed])}/>
        </Trans>,
        position: { x: 0, y: -27 }
      },
      focus: () => ({
        staticItems: [
          {
            type: MaterialType.ForestBoard,
            item: { id: SpiritOfNature.Spring, location: { id: SpiritOfNature.Spring, type: LocationType.Table, player: SpiritOfNature.Spring } }
          }
        ]
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.tree.plant">
          <span css={resourceStyle(ResourceImage[Resource.Sun])}/>
        </Trans>
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.ProtectiveTreeTiles).location(LocationType.TreeDispenser).id(ProtectiveTree.Tree3A)
        ],
        locations: [
          this.location(LocationType.TreeSpace).player(SpiritOfNature.Spring).x(2).y(0).location
        ],
        margin: {
          bottom: 2,
          top: 2,
          left: 1
        }
      }),
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
        position: { x: -45, y: 0 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.SpiritOfNatureStandee).id(SpiritOfNature.Spring)
        ],
        locations: [
          this.location(LocationType.CircleOfSpiritBoardFire).location
        ]
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.wind.move">
          <span css={resourceStyle(ResourceImage[Resource.Wind])}/>
        </Trans>,
        position: { x: -40, y: 0 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.SpiritOfNatureStandee).id(SpiritOfNature.Spring)
        ],
        locations: [
          this.location(LocationType.CircleOfSpiritBoardSpace).x(2).location
        ],
        margin: {
          bottom: 1,
          top: 1,
          left: 10
        }
      }),
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
      focus: () => ({
        locations: [
          this.location(LocationType.CircleOfSpiritBoardFire).location
        ]
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.wind.steal">
          <strong/>
        </Trans>,
        position: { x: 10, y: -5 }
      },
      focus: (game) => ({
        materials: [this.material(game, MaterialType.VictoryTile).location(LocationType.VictoryTileArea).player(SpiritOfNature.Winter)]
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.wind.action">
          <span css={resourceStyle(ResourceImage[Resource.Sun])}/>
        </Trans>,
        position: { x: -45, y: 0 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.SpiritOfNatureStandee).id(SpiritOfNature.Spring)
        ],
        locations: [
          this.location(LocationType.CircleOfSpiritBoardSpace).x(2).location
        ],
        margin: {
          bottom: 1,
          top: 1,
          left: 10
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.sun.tree.bonus" values={{ 'number': '5' }}>
          <span css={resourceStyle(ResourceImage[Resource.Sun])}/>
        </Trans>,
        position: { x: -15, y: 5 }
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.SpiritOfNatureStandee).id(SpiritOfNature.Spring),
          this.material(game, MaterialType.ProtectiveTreeTiles).player(SpiritOfNature.Spring),
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring)
        ],
        locations: [
          this.location(LocationType.CircleOfSpiritBoardSpace).x(2).location
        ],
        margin: {
          bottom: 1,
          top: 1,
          left: 10
        }
      })
    },
    {
      popup: {
        text: () => <Trans defaults="tuto.gregarious">
          <strong/>
          <span css={resourceStyle(TypeImage[CardType.Gregarious])}/>
          <span css={resourceStyle(TypeImage[CardType.Solitary])}/>
        </Trans>,
        position: { x: 0, y: 5 }
      },
      focus: (game) => ({
        materials: [this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow).id(GuardianAnimal.Butterfly)],
        locations: [{ type: LocationType.PlayerDeckStack, player: SpiritOfNature.Spring }]
      }),
      move: {
        player: SpiritOfNature.Spring,
        filter: (move, game) =>
          isMoveItemType(MaterialType.GuardianAnimalCard)(move)
          && this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow).id(GuardianAnimal.Butterfly).getIndex() === move.itemIndex,
        interrupt: (move) => isStartRule(move) && move.id === RuleId.OnibiAttacksPlayer
      }
    },
    {
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.FireTile).location(LocationType.CircleOfSpiritBoardFire),
          this.material(game, MaterialType.ProtectiveTreeTiles).player(SpiritOfNature.Winter),
          this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine)
        ],
        margin: { top: 10, right: 10 }
      }),
      popup: {
        text: () => <Trans defaults="tuto.varan.rule">
          <strong/>
          <span css={resourceStyle(ResourceImage[Resource.Drop])}/>,
        </Trans>,
        position: { x: -20, y: 20 }
      }
    },
    {
      focus: (game: MaterialGame) => this.steps[game.tutorialStep! - 1].focus!(game),
      popup: {
        text: () => <Trans defaults="tuto.varan">
          <strong/>
          <span css={resourceStyle(ResourceImage[Resource.Drop])}/>
        </Trans>,
        position: { x: -20, y: 20 }
      },
      move: {}
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.fragment.varan')
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.FragmentTile).location(LocationType.FragmentStack)
        ],
        locations: [
          this.location(LocationType.FragmentStack).location
        ]
      })
    },
    {
      popup: {
        text: (t: TFunction) => t('tuto.fragment.other')
      },
      focus: (game) => ({
        materials: [
          this.material(game, MaterialType.FragmentTile).location(LocationType.FragmentStack)
        ],
        locations: [
          this.location(LocationType.FragmentStack).location
        ]
      })
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

const actionItem = css`
  display: block;
  margin: 0.2em 0;

  > span {
    vertical-align: middle;
    width: 1.5em;
    height: 1.5em;
  }
`
