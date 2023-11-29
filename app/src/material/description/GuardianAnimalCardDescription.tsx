/** @jsxImportSource @emotion/react */
import { CardDescription, ItemContext } from '@gamepark/react-game'
import Images from '../../images/Images'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import { isMoveItemType, MaterialMove } from '@gamepark/rules-api'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { GuardianAnimalCardRules } from './GuardianAnimalCardRules'

export class GuardianAnimalCardDescription extends CardDescription {
  backImage = Images.sampleImage
  height = 8.89

  images = {
    [GuardianAnimal.Bear]: Images.bear1,
    [GuardianAnimal.Beetle]: Images.beetle1,
    [GuardianAnimal.Lynx]: Images.lynx1,
    [GuardianAnimal.Fox]: Images.fox1,
    [GuardianAnimal.GoldFish]: Images.goldfish1,
    [GuardianAnimal.Tanuki]: Images.tanuki1,
    [GuardianAnimal.Boar]: Images.boar1,
    [GuardianAnimal.Weasel]: Images.weasel1,
    [GuardianAnimal.Rabbit]: Images.rabbit1,
    [GuardianAnimal.Doe]: Images.doe1,
    [GuardianAnimal.HummingBird]: Images.hummingbird1,
    [GuardianAnimal.Bee]: Images.bee1,
    [GuardianAnimal.Monkey]: Images.monkey1,
    [GuardianAnimal.Owl]: Images.owl1,

    [GuardianAnimal.Hedgehog]: Images.hedgehog,
    [GuardianAnimal.Caterpillar]: Images.caterpillar,
    [GuardianAnimal.Flamingo]: Images.flamingo,
    [GuardianAnimal.Ram]: Images.ram,
    [GuardianAnimal.Wolf]: Images.wolf,
    [GuardianAnimal.Lemur]: Images.lemur,
    [GuardianAnimal.Squirrel]: Images.squirrel,
    [GuardianAnimal.Turtle]: Images.turtle,
    [GuardianAnimal.Coati]: Images.coati,
    [GuardianAnimal.Racoon]: Images.racoon,
    [GuardianAnimal.Beaver]: Images.beaver,
    [GuardianAnimal.Raven]: Images.raven,
    [GuardianAnimal.Bat]: Images.bat,
    [GuardianAnimal.Parrot]: Images.parrot,
    [GuardianAnimal.Meerkat]: Images.meerkat,
    [GuardianAnimal.Horse]: Images.horse,
    [GuardianAnimal.Axolotls]: Images.axolotls,
    [GuardianAnimal.Chimpanzee]: Images.chimpanzee,
    [GuardianAnimal.Toucan]: Images.toucan,
    [GuardianAnimal.Butterfly]: Images.butterfly,
    [GuardianAnimal.Spider]: Images.spider,
    [GuardianAnimal.Hippopotamus]: Images.hippopotamus,
    [GuardianAnimal.EagleOwl]: Images.eagleowl,
    [GuardianAnimal.Woodpecker]: Images.woodpecker,
    [GuardianAnimal.Badger]: Images.badger,
    [GuardianAnimal.Rooster]: Images.rooster,
    [GuardianAnimal.Rhinoceros]: Images.rhinoceros,
    [GuardianAnimal.Goat]: Images.goat,
    [GuardianAnimal.Bull]: Images.bull,
    [GuardianAnimal.Lizard]: Images.lizard,
    [GuardianAnimal.Frog]: Images.frog,
    [GuardianAnimal.Marmot]: Images.marmot,
    [GuardianAnimal.Platypus]: Images.platypus,
    [GuardianAnimal.Crane]: Images.crane,
    [GuardianAnimal.Sloth]: Images.sloth,
    [GuardianAnimal.Koala]: Images.koala,
    [GuardianAnimal.Leopard]: Images.leopard,
    [GuardianAnimal.Eagle]: Images.eagle,
    [GuardianAnimal.Snake]: Images.snake,
    [GuardianAnimal.Cricket]: Images.cricket,
    [GuardianAnimal.Panther]: Images.panther,
    [GuardianAnimal.Gorilla]: Images.gorilla,
    [GuardianAnimal.Bison]: Images.bison,
    [GuardianAnimal.Chameleon]: Images.chameleon,
    [GuardianAnimal.Crocodile]: Images.crocodile,
    [GuardianAnimal.Elephant]: Images.elephant,
    [GuardianAnimal.Dolphin]: Images.dolphin,
    [GuardianAnimal.Dog]: Images.dog,
    [GuardianAnimal.Panda]: Images.panda,
    [GuardianAnimal.Stag]: Images.stag,
    [GuardianAnimal.Tapir]: Images.tapir,
    [GuardianAnimal.Varan]: Images.varan
  }

  canDrag(move: MaterialMove, context: ItemContext) {
    const { index, rules, player } = context
    const drag = super.canDrag(move, context)
    if (drag) return drag
    if (!isMoveItemType(MaterialType.FragmentTile)(move) || move.location?.type !== LocationType.FragmentStack) return false

    const item = rules.material(MaterialType.GuardianAnimalCard).getItem(index)!
    const helpLine = rules.material(MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(item.location.player)
    return (item.location.x === (helpLine.length - 1)) && item.location.player === player
  }

  help = GuardianAnimalCardRules
}

export const guardianAnimalCardDescription = new GuardianAnimalCardDescription()
