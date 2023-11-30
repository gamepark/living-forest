/** @jsxImportSource @emotion/react */
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature"
import { LocationType } from "@gamepark/living-forest/material/LocationType"
import { MaterialType } from "@gamepark/living-forest/material/MaterialType"
import { MaterialTutorial, TutorialStep } from "@gamepark/react-game"
import { TFunction } from "i18next";
import { TutorialSetup } from "./TutorialSetup";
import { Trans } from "react-i18next";
import { resourceStyle, ResourceImage } from '../material/description/GuardianAnimalCardRules';

export class Tutorial extends MaterialTutorial<SpiritOfNature, MaterialType, LocationType> {
    version = 1
    options = { players: [{ id: SpiritOfNature.Spring }, { id: SpiritOfNature.Winter }] }
    setup = new TutorialSetup()

    players = [
        { id: SpiritOfNature.Spring },
        {
            id: SpiritOfNature.Winter,
        }
    ]

    steps: TutorialStep[] = [
        {
            popup: {
                text: () => <Trans defaults="tuto.welcome"><strong /></Trans>
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
                text: () => <Trans defaults="tuto.start"><strong /></Trans>,
                position: { x: -40, y: 0 }
            },
            focus: (game) => [
                this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
                this.location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring),
                this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring)
            ],

        },
        {
            move: {
                player: SpiritOfNature.Spring
            }
        },
        {
            move: {
                player: SpiritOfNature.Winter
            }
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.animals">
                    <span css={resourceStyle(ResourceImage[1])} />
                    <span css={resourceStyle(ResourceImage[2])} />
                    <span css={resourceStyle(ResourceImage[3])} />
                    <span css={resourceStyle(ResourceImage[4])} />
                    <span css={resourceStyle(ResourceImage[5])} />
                </Trans >
            },
            focus: () => this.location(LocationType.Table),
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.sun">
                    <span css={resourceStyle(ResourceImage[0])} />
                </Trans >
            },
            focus: (game) => [
                this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
                this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring)
            ]

        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.draw'),
            },
            // move: {
            //     player: SpiritOfNature.Spring,
            //     filter: (move: MaterialMove) => isMoveItem(move) && move.itemIndex === 0
            // },
        },
        {
            move: {
                player: SpiritOfNature.Spring
            }
        },
        { move: {} },
        { move: {} },
        { move: {} },
        {
            popup: {
                text: () => <Trans defaults="tuto.solitary">
                    <strong />
                    {/* <span css={resourceStyle(ResourceImage[0])} /> */}
                </Trans >
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.pass'),
            },
            move: {}
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.simultaneous'),
            },
            move: {}
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.actions'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.solitary.malus'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.actions.list'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.actions.unique'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.action.sun'),
            },
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.action.sun.rule">
                    <strong />
                    <span css={resourceStyle(ResourceImage[0])} />
                </Trans >
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.action.sun.take'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.action.water'),
            },
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.action.water.rule">
                    <strong />
                    <span css={resourceStyle(ResourceImage[0])} />
                </Trans >
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.action.water.take'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.actions.opponent'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.solitary.opponent'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.opponent.sun'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.onibi.tree.attack'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.new.animals'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.discard.animals'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.sacred.tree'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.turn.2'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.solitary.2'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.opponent.played'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.trees'),
            },
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.trees.bonus">
                    <strong />
                </Trans >
            },
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.lines.bonus">
                    <span css={resourceStyle(ResourceImage[0])} />
                </Trans >
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.tree.plant'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.wind'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.wind.move'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.wind.rules'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.wind.steal'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.wind.action'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.sun.tree.bonus'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.gregarious'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.varan'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.varan.rule'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.fragment.varan'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.fragment.other'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.game.over'),
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.complete'),
            },
        },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.place'),
        //         position: { x: 45, y: 0 }
        //     },
        //     focus: () => [
        //         { type: MaterialType.Board, item: boardDescription.staticItem },
        //         ...places.map(place => this.location(LocationType.Place).id(place))
        //     ]
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.circles'),
        //         position: { x: 45, y: 0 }
        //     },
        //     focus: (game: MaterialGame) => [
        //         { type: MaterialType.Board, item: boardDescription.staticItem },
        //         ...this.material(game, MaterialType.Card).player(Color.Blue).getItems().map(card =>
        //             this.location(LocationType.Place).id(card.id)
        //         )
        //     ]
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.common'),
        //         position: { x: -20, y: 0 }
        //     },
        //     focus: (game: MaterialGame) => [
        //         this.material(game, MaterialType.Card).location(LocationType.CommonObjectives),
        //         ...this.material(game, MaterialType.Card).location(LocationType.CommonObjectives).getItems().map(card =>
        //             this.location(LocationType.Place).id(card.id)
        //         )
        //     ]
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.tokens'),
        //         position: { x: 0, y: -25 }
        //     },
        //     focus: (game: MaterialGame) => this.material(game, MaterialType.Token).player(Color.Blue)
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.tokens.canary'),
        //         position: { x: -15, y: -25 }
        //     },
        //     move: {
        //         filter: (move: MaterialMove) => isMoveItem(move) && move.position.location?.id === Place.CanaryIslands
        //     },
        //     focus: () => this.location(LocationType.Place).id(Place.CanaryIslands)
        // },
        // {
        //     move: {
        //         player: Color.Red,
        //         filter: (move: MaterialMove) => isMoveItem(move) && move.position.location?.id === Place.NorthwestPassage
        //     }
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.tokens.opponent'),
        //         position: { x: -15, y: 25 }
        //     },
        //     focus: (game: MaterialGame) => this.material(game, MaterialType.Token).location(LocationType.Place).locationId(Place.NorthwestPassage),
        //     move: { player: Color.Blue }
        // },
        // { move: { player: Color.Red } },
        // { move: { player: Color.Blue } },
        // { move: { player: Color.Red } },
        // { move: { player: Color.Blue } },
        // { move: { player: Color.Red } },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.arrows')
        //     },
        //     focus: () => this.location(LocationType.ArrowsStock).id(ArrowColor.Yellow)
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.start'),
        //         position: { x: -15, y: -25 }
        //     },
        //     focus: () => this.location(LocationType.Place).id(StartNode)
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.rome'),
        //         position: { x: -15, y: -25 }
        //     },
        //     focus: () => [this.location(LocationType.Place).id(Place.Rome), this.location(LocationType.Road).id([StartNode, Place.Rome])],
        //     move: {
        //         filter: (move: MaterialMove) => isMoveItem(move) && move.itemIndex === 0 && move.position.location?.id[1] === Place.Rome
        //     }
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.pass')
        //     },
        //     move: {
        //         filter: (move: MaterialMove) => isStartPlayerTurn(move)
        //     }
        // },
        // {
        //     move: {
        //         player: Color.Red,
        //         filter: (move: MaterialMove) => isMoveItem(move) && move.itemIndex === 1 && move.position.location?.id[1] === Place.Thingvellir
        //     }
        // },
        // {
        //     move: {
        //         player: Color.Red,
        //         filter: (move: MaterialMove) => isStartPlayerTurn(move)
        //     }
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.blue.goto'),
        //         position: { x: -15, y: -25 }
        //     },
        //     focus: () => [this.location(LocationType.Place).id(BlueNode.Rome_West), this.location(LocationType.Road).id([Place.Rome, BlueNode.Rome_West])],
        //     move: {
        //         filter: (move: MaterialMove) => isMoveItem(move) && move.itemIndex === 0 && move.position.location?.id[1] === BlueNode.Rome_West
        //     }
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.blue.replay'),
        //         position: { x: -15, y: -25 }
        //     },
        //     focus: (game: MaterialGame) => [
        //         this.location(LocationType.Place).id(Place.CanaryIslands),
        //         this.location(LocationType.Road).id([BlueNode.Rome_West, Place.CanaryIslands]),
        //         this.material(game, MaterialType.Token).location(LocationType.Place).locationId(Place.CanaryIslands)
        //     ],
        //     move: {
        //         filter: (move: MaterialMove) => isMoveItem(move) && move.itemIndex === 0 && move.position.location?.id[1] === Place.CanaryIslands
        //     }
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.canary.score'),
        //         position: { x: -15, y: -25 }
        //     },
        //     focus: (game: MaterialGame) => [
        //         this.material(game, MaterialType.Card).id(Place.CanaryIslands),
        //         this.material(game, MaterialType.Token).id(game.players[0]).location(LocationType.Card)
        //     ],
        //     move: {
        //         filter: (move: MaterialMove) => isStartPlayerTurn(move)
        //     }
        // },
        // {
        //     move: {
        //         player: Color.Red,
        //         filter: (move: MaterialMove) => isMoveItem(move) && move.itemIndex === 1 && move.position.location?.id[1] === BlueNode.Thingvellir_West
        //     }
        // },
        // {
        //     move: {
        //         player: Color.Red,
        //         filter: (move: MaterialMove) => isMoveItem(move) && move.itemIndex === 1 && move.position.location?.id[1] === Place.NorthwestPassage
        //     }
        // },
        // {
        //     move: {
        //         player: Color.Red,
        //         filter: (move: MaterialMove) => isStartPlayerTurn(move)
        //     }
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.red.goto'),
        //         position: { x: -15, y: -25 }
        //     },
        //     focus: () => [
        //         this.location(LocationType.Place).id(RedNode.Tombouctou_West),
        //         this.location(LocationType.Road).id([Place.CanaryIslands, RedNode.Tombouctou_West])
        //     ],
        //     move: {
        //         filter: (move: MaterialMove) => isMoveItem(move) && move.itemIndex === 0 && move.position.location?.id[1] === RedNode.Tombouctou_West
        //     }
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.red.ticket'),
        //         position: { x: -10, y: 10 }
        //     },
        //     focus: (game: MaterialGame) => this.material(game, MaterialType.Ticket).player(Color.Blue),
        //     move: {
        //         filter: (move: MaterialMove) => isDeleteItemType(MaterialType.Ticket)(move)
        //     }
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.ticket'),
        //         position: { x: -15, y: -25 }
        //     },
        //     focus: (game: MaterialGame) => [
        //         this.location(LocationType.Place).id(Place.PuertoRico),
        //         this.location(LocationType.Road).id([RedNode.Tombouctou_West, Place.PuertoRico]),
        //         this.material(game, MaterialType.Token).location(LocationType.Place).locationId(Place.PuertoRico)
        //     ],
        //     move: {
        //         filter: (move: MaterialMove) => isMoveItem(move) && move.itemIndex === 0 && move.position.location?.id[1] === Place.PuertoRico
        //     }
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.gameOver')
        //     }
        // },
        // {
        //     popup: {
        //         text: () => <Trans defaults="tuto.loop"> <strong/></Trans >
        // }
        // },
        // {
        //     popup: {
        //         text: (t: TFunction) => t('tuto.end')
        //     },
        //     move: {
        //         filter: (move: MaterialMove) => isStartPlayerTurn(move)
        //     }
        // }
    ]
}
