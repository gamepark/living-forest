/** @jsxImportSource @emotion/react */
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature"
import { LocationType } from "@gamepark/living-forest/material/LocationType"
import { MaterialType } from "@gamepark/living-forest/material/MaterialType"
import { MaterialTutorial, TutorialStep } from "@gamepark/react-game"
import { TFunction } from "i18next";
import { TutorialSetup } from "./TutorialSetup";
import { Trans } from "react-i18next";
import { resourceStyle, ResourceImage, TypeImage } from '../material/description/GuardianAnimalCardRules';
import GuardianAnimal from "@gamepark/living-forest/material/GuardianAnimal";
import Images from "../images/Images";
import { isEndPlayerTurn, isMoveItemType } from "@gamepark/rules-api";

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
            move: {
                player: SpiritOfNature.Spring,
                filter: () => true
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
                    <span css={resourceStyle(ResourceImage[1])} />
                    <span css={resourceStyle(ResourceImage[2])} />
                    <span css={resourceStyle(ResourceImage[3])} />
                    <span css={resourceStyle(ResourceImage[4])} />
                    <span css={resourceStyle(ResourceImage[5])} />
                </Trans >
            },
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.sun">
                    <span css={resourceStyle(ResourceImage[1])} />
                </Trans >,
                position: { x: -40, y: 0 }
            },
            focus: (game) => [
                this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
                this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
            ]

        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.draw'),
            },
            focus: (game) => [
                this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
                this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
            ],
            move: {
                player: SpiritOfNature.Spring,
                filter: () => true
            }
        },
        {
            focus: (game) => [
                this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
                this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
            ],
            move: {
                player: SpiritOfNature.Spring
            }
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.solitary">
                    <strong />
                    <span css={resourceStyle(TypeImage[1])} />
                </Trans >,
                position: { x: -40, y: 0 }
            },
            focus: (game) => [
                this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
                this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).id(GuardianAnimal.Lynx)
            ]
        },
        {
            focus: (game) => [
                this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
                this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
            ],
            move: {
                player: SpiritOfNature.Spring,
            }
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.pass">
                    <strong />
                    <span css={resourceStyle(TypeImage[1])} />
                </Trans >,
            },
            focus: (game) => [
                this.location(LocationType.HelpLine).player(SpiritOfNature.Spring),
                this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(SpiritOfNature.Spring).maxBy((item) => item.location.x!)
            ],
            move: {
                player: SpiritOfNature.Spring,
                filter: (move) => isEndPlayerTurn(move) && move.player === SpiritOfNature.Spring
                // filter: (move) =>
                //     isEndPlayerTurn(move)
            }
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.simultaneous'),
            },
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
            popup: {
                text: (t: TFunction) => t('tuto.actions'),
            },
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.solitary.malus">
                    <strong />
                    <span css={resourceStyle(TypeImage[1])} />
                </Trans >,
            },
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.actions.list">
                    <span css={resourceStyle(Images.TakeFragment)} />
                    <span css={resourceStyle(Images.AttractGuardian)} />
                    <span css={resourceStyle(Images.ExtinguishFire)} />
                    <span css={resourceStyle(Images.MoveCircle)} />
                    <span css={resourceStyle(Images.PlantTree)} />
                </Trans >,
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
                position: { x: -70, y: 0 }
            },
            focus: (game) => this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow)

        },
        {
            popup: {
                text: () => <Trans defaults="tuto.action.sun.rule" values={{ 'number': '4' }}>
                    <span css={resourceStyle(ResourceImage[1])} />
                </Trans >,
                position: { x: -70, y: 0 }
            },
            focus: (game) => this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow)
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.action.sun.take'),
                position: { x: 0, y: 30 }
            },
            focus: (game) => this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow).id(GuardianAnimal.Flamingo),
            move: {
                player: SpiritOfNature.Spring,
            }
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.action.water'),
                position: { x: 0, y: 30 }
            },
            focus: (game) => this.material(game, MaterialType.FireTile).location(LocationType.CircleOfSpiritBoardFire).id(2),
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.action.water.rule" values={{ 'number': '3' }}>
                    <span css={resourceStyle(ResourceImage[2])} />
                </Trans >,
                position: { x: 0, y: 30 }
            },
            focus: (game) => this.material(game, MaterialType.FireTile).location(LocationType.CircleOfSpiritBoardFire).id(2),
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.action.water.take'),
                position: { x: 0, y: 30 }
            },
            focus: (game) => this.material(game, MaterialType.FireTile).location(LocationType.CircleOfSpiritBoardFire).id(2),
            move: {
                player: SpiritOfNature.Spring,
            }
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
            move: {
                player: SpiritOfNature.Winter
            }
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
            move: {
                player: SpiritOfNature.Spring
            }
        },
        {
            move: {
                player: SpiritOfNature.Spring
            }
        },
        {
            move: {
                player: SpiritOfNature.Spring
            }
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.solitary.2" >
                    <span css={resourceStyle(TypeImage[1])} />
                </Trans >,
            },
        },
        {
            move: {
                player: SpiritOfNature.Winter
            }
        },
        {
            move: {
                player: SpiritOfNature.Winter
            }
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.opponent.played'),
            },
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.trees">
                    <span css={resourceStyle(ResourceImage[3])} />
                </Trans >
            },
            focus: (game) => this.material(game, MaterialType.ProtectiveTreeTiles).location(LocationType.TreeDispenser),
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.trees.bonus">
                    <strong />
                </Trans >
            },
            focus: () => this.location(LocationType.ForestBoard).id(SpiritOfNature.Spring),
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.lines.bonus">
                    <span css={resourceStyle(ResourceImage[3])} />
                </Trans >
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.tree.plant'),
            },
            focus: (game) => this.material(game, MaterialType.ProtectiveTreeTiles).location(LocationType.TreeDispenser),
            move: {
                player: SpiritOfNature.Spring
            }
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.wind">
                    <strong />
                </Trans >,
                position: { x: 50, y: 0 }
            },
            focus: () => this.location(LocationType.CircleOfSpiritBoardFire),
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.wind.move">
                    <span css={resourceStyle(ResourceImage[4])} />
                </Trans >,
                position: { x: 50, y: 0 }
            },
            focus: () => this.location(LocationType.CircleOfSpiritBoardFire),
            move: {
                player: SpiritOfNature.Spring
            }
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.wind.rules'),
                position: { x: 50, y: 0 }
            },
            focus: () => this.location(LocationType.CircleOfSpiritBoardFire),
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.wind.steal">
                    <strong />
                </Trans >,
                position: { x: 50, y: 0 }
            },
            focus: (game) => this.material(game, MaterialType.VictoryTile).location(LocationType.VictoryTileArea).id(SpiritOfNature.Winter),
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.wind.action'),
                position: { x: 50, y: 0 }
            },
            focus: () => this.location(LocationType.CircleOfSpiritBoardFire),
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.sun.tree.bonus" values={{ 'number': '3' }}>
                    <span css={resourceStyle(ResourceImage[4])} />
                </Trans >,
                position: { x: 50, y: 0 }
            },
            focus: () => this.location(LocationType.CircleOfSpiritBoardFire),
            move: {
                player: SpiritOfNature.Spring
            }
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.gregarious">
                    <strong />
                    <span css={resourceStyle(TypeImage[1])} />
                    <span css={resourceStyle(TypeImage[1])} />
                </Trans >,
                position: { x: 70, y: 0 }
            },
            focus: (game) => this.material(game, MaterialType.GuardianAnimalCard).location(LocationType.ReserveRow).id(GuardianAnimal.Butterfly),
            move: {
                player: SpiritOfNature.Spring
            }
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.varan'),
            },
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.varan.rule">
                    <strong />
                </Trans >,
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.fragment.varan'),
            },
            focus: () => this.location(LocationType.FragmentStack),
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.fragment.other'),
            },
            focus: () => this.location(LocationType.FragmentStack),
        },
        {
            popup: {
                text: () => <Trans defaults="tuto.game.over">
                    <span css={resourceStyle(ResourceImage[1])} />
                    <span css={resourceStyle(ResourceImage[3])} />
                    <span css={resourceStyle(ResourceImage[5])} />
                </Trans >,
            },
        },
        {
            popup: {
                text: (t: TFunction) => t('tuto.complete'),
            },
        },
    ]
}
