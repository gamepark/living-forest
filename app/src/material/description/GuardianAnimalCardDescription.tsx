/** @jsxImportSource @emotion/react */
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { CardDescription, ItemContext } from '@gamepark/react-game'
import { isMoveItemType, MaterialMove } from '@gamepark/rules-api'
import Anteater from '../../images/cards/Anteater.jpg'
import Ara from '../../images/cards/Ara.jpg'
import Armadillo from '../../images/cards/Armadillo.jpg'
import Axolotl from '../../images/cards/Axolotl.jpg'
import Badger from '../../images/cards/Badger.jpg'
import Bat from '../../images/cards/Bat.jpg'
import Bear from '../../images/cards/Bear.jpg'
import Beaver from '../../images/cards/Beaver.jpg'
import Beetle from '../../images/cards/Beetle.jpg'
import Bee from '../../images/cards/Bee.jpg'
import Bison from '../../images/cards/Bison.jpg'
import Boar from '../../images/cards/Boar.jpg'
import Bull from '../../images/cards/Bull.jpg'
import Butterfly from '../../images/cards/Butterfly.jpg'
import Capybara from '../../images/cards/Capybara.jpg'
import CardBack from '../../images/cards/CardBack.jpg'
import Caterpillar from '../../images/cards/Caterpillar.jpg'
import Chameleon from '../../images/cards/Chameleon.jpg'
import Chimpanzee from '../../images/cards/Chimpanzee.jpg'
import Coati from '../../images/cards/Coati.jpg'
import Cobra from '../../images/cards/Cobra.jpg'
import Cockatoo from '../../images/cards/Cockatoo.jpg'
import Crane from '../../images/cards/Crane.jpg'
import Crayfish from '../../images/cards/Crayfish.jpg'
import Cricket from '../../images/cards/Cricket.jpg'
import Crocodile from '../../images/cards/Crocodile.jpg'
import Dog from '../../images/cards/Dog.jpg'
import Dolphin from '../../images/cards/Dolphin.jpg'
import Eagle from '../../images/cards/Eagle.jpg'
import Elephant from '../../images/cards/Elephant.jpg'
import Fawn from '../../images/cards/Fawn.jpg'
import FireVaran from '../../images/cards/FireVaran.jpg'
import Flamingo from '../../images/cards/Flamingo.jpg'
import FlyingSquirrel from '../../images/cards/FlyingSquirrel.jpg'
import Fox from '../../images/cards/Fox.jpg'
import Frog from '../../images/cards/Frog.jpg'
import Goat from '../../images/cards/Goat.jpg'
import Goldfish from '../../images/cards/Goldfish.jpg'
import Gorilla from '../../images/cards/Gorilla.jpg'
import Hare from '../../images/cards/Hare.jpg'
import Hedgehog from '../../images/cards/Hedgehog.jpg'
import Hippopotamus from '../../images/cards/Hippopotamus.jpg'
import HornedOwl from '../../images/cards/HornedOwl.jpg'
import Horse from '../../images/cards/Horse.jpg'
import Hummingbird from '../../images/cards/Hummingbird.jpg'
import Koala from '../../images/cards/Koala.jpg'
import KodamaAutumn from '../../images/cards/KodamaAutumn.jpg'
import KodamaFlower1 from '../../images/cards/KodamaFlower1.jpg'
import KodamaFlower2 from '../../images/cards/KodamaFlower2.jpg'
import KodamaFlower3 from '../../images/cards/KodamaFlower3.jpg'
import KodamaFlower4 from '../../images/cards/KodamaFlower4.jpg'
import KodamaFlower5 from '../../images/cards/KodamaFlower5.jpg'
import KodamaFlower6 from '../../images/cards/KodamaFlower6.jpg'
import KodamaSpring from '../../images/cards/KodamaSpring.jpg'
import KodamaSummer from '../../images/cards/KodamaSummer.jpg'
import KodamaTree1 from '../../images/cards/KodamaTree1.jpg'
import KodamaTree2 from '../../images/cards/KodamaTree2.jpg'
import KodamaTree3 from '../../images/cards/KodamaTree3.jpg'
import KodamaTree4 from '../../images/cards/KodamaTree4.jpg'
import KodamaTree5 from '../../images/cards/KodamaTree5.jpg'
import KodamaTree6 from '../../images/cards/KodamaTree6.jpg'
import KodamaWater1 from '../../images/cards/KodamaWater1.jpg'
import KodamaWater2 from '../../images/cards/KodamaWater2.jpg'
import KodamaWater3 from '../../images/cards/KodamaWater3.jpg'
import KodamaWater4 from '../../images/cards/KodamaWater4.jpg'
import KodamaWater5 from '../../images/cards/KodamaWater5.jpg'
import KodamaWater6 from '../../images/cards/KodamaWater6.jpg'
import KodamaWinter from '../../images/cards/KodamaWinter.jpg'
import Koi from '../../images/cards/Koi.jpg'
import Lemur from '../../images/cards/Lemur.jpg'
import Leopard from '../../images/cards/Leopard.jpg'
import Loris from '../../images/cards/Loris.jpg'
import Lynx from '../../images/cards/Lynx.jpg'
import Marmot from '../../images/cards/Marmot.jpg'
import Meerkat from '../../images/cards/Meerkat.jpg'
import Baboon from '../../images/cards/Baboon.jpg'
import Owl from '../../images/cards/Owl.jpg'
import Panda from '../../images/cards/Panda.jpg'
import Panther from '../../images/cards/Panther.jpg'
import Peafowl from '../../images/cards/Peafowl.jpg'
import Platypus from '../../images/cards/Platypus.jpg'
import Racoon from '../../images/cards/Racoon.jpg'
import Ram from '../../images/cards/Ram.jpg'
import Raven from '../../images/cards/Raven.jpg'
import Rhinoceros from '../../images/cards/Rhinoceros.jpg'
import Rooster from '../../images/cards/Rooster.jpg'
import Salamander from '../../images/cards/Salamander.jpg'
import Sloth from '../../images/cards/Sloth.jpg'
import Spider from '../../images/cards/Spider.jpg'
import Squirrel from '../../images/cards/Squirrel.jpg'
import Stag from '../../images/cards/Stag.jpg'
import Tanuki from '../../images/cards/Tanuki.jpg'
import Tapir from '../../images/cards/Tapir.jpg'
import Tiger from '../../images/cards/Tiger.jpg'
import Tortoise from '../../images/cards/Tortoise.jpg'
import Toucan from '../../images/cards/Toucan.jpg'
import Weasel from '../../images/cards/Weasel.jpg'
import Wolf from '../../images/cards/Wolf.jpg'
import Woodpecker from '../../images/cards/Woodpecker.jpg'
import { GuardianAnimalCardHelp } from './help/GuardianAnimalCardHelp'

export class GuardianAnimalCardDescription extends CardDescription {
  backImage = CardBack
  height = 8.89

  images = {
    [GuardianAnimal.Bear]: Bear,
    [GuardianAnimal.Beetle]: Beetle,
    [GuardianAnimal.Lynx]: Lynx,
    [GuardianAnimal.Fox]: Fox,
    [GuardianAnimal.Goldfish]: Goldfish,
    [GuardianAnimal.Tanuki]: Tanuki,
    [GuardianAnimal.Boar]: Boar,
    [GuardianAnimal.Weasel]: Weasel,
    [GuardianAnimal.Hare]: Hare,
    [GuardianAnimal.Fawn]: Fawn,
    [GuardianAnimal.Hummingbird]: Hummingbird,
    [GuardianAnimal.Bee]: Bee,
    [GuardianAnimal.Baboon]: Baboon,
    [GuardianAnimal.Owl]: Owl,

    [GuardianAnimal.Hedgehog]: Hedgehog,
    [GuardianAnimal.Caterpillar]: Caterpillar,
    [GuardianAnimal.Flamingo]: Flamingo,
    [GuardianAnimal.Ram]: Ram,
    [GuardianAnimal.Wolf]: Wolf,
    [GuardianAnimal.Lemur]: Lemur,
    [GuardianAnimal.Squirrel]: Squirrel,
    [GuardianAnimal.Tortoise]: Tortoise,
    [GuardianAnimal.Coati]: Coati,
    [GuardianAnimal.Racoon]: Racoon,
    [GuardianAnimal.Beaver]: Beaver,
    [GuardianAnimal.Raven]: Raven,
    [GuardianAnimal.Bat]: Bat,
    [GuardianAnimal.Cockatoo]: Cockatoo,
    [GuardianAnimal.Meerkat]: Meerkat,
    [GuardianAnimal.Horse]: Horse,
    [GuardianAnimal.Axolotl]: Axolotl,
    [GuardianAnimal.Chimpanzee]: Chimpanzee,
    [GuardianAnimal.Toucan]: Toucan,
    [GuardianAnimal.Butterfly]: Butterfly,
    [GuardianAnimal.Spider]: Spider,
    [GuardianAnimal.Hippopotamus]: Hippopotamus,
    [GuardianAnimal.HornedOwl]: HornedOwl,
    [GuardianAnimal.Woodpecker]: Woodpecker,
    [GuardianAnimal.Badger]: Badger,
    [GuardianAnimal.Rooster]: Rooster,
    [GuardianAnimal.Rhinoceros]: Rhinoceros,
    [GuardianAnimal.Goat]: Goat,
    [GuardianAnimal.Bull]: Bull,
    [GuardianAnimal.Salamander]: Salamander,
    [GuardianAnimal.Frog]: Frog,
    [GuardianAnimal.Marmot]: Marmot,
    [GuardianAnimal.Platypus]: Platypus,
    [GuardianAnimal.Crane]: Crane,
    [GuardianAnimal.Loris]: Loris,
    [GuardianAnimal.Koala]: Koala,
    [GuardianAnimal.Leopard]: Leopard,
    [GuardianAnimal.Eagle]: Eagle,
    [GuardianAnimal.Cobra]: Cobra,
    [GuardianAnimal.Cricket]: Cricket,
    [GuardianAnimal.Panther]: Panther,
    [GuardianAnimal.Gorilla]: Gorilla,
    [GuardianAnimal.Bison]: Bison,
    [GuardianAnimal.Chameleon]: Chameleon,
    [GuardianAnimal.Crocodile]: Crocodile,
    [GuardianAnimal.Elephant]: Elephant,
    [GuardianAnimal.Dolphin]: Dolphin,
    [GuardianAnimal.Dog]: Dog,
    [GuardianAnimal.Panda]: Panda,
    [GuardianAnimal.Stag]: Stag,
    [GuardianAnimal.Tapir]: Tapir,
    [GuardianAnimal.FireVaran]: FireVaran,

    [GuardianAnimal.Anteater]: Anteater,
    [GuardianAnimal.Ara]: Ara,
    [GuardianAnimal.Armadillo]: Armadillo,
    [GuardianAnimal.Capybara]: Capybara,
    [GuardianAnimal.Crayfish]: Crayfish,
    [GuardianAnimal.FlyingSquirrel]: FlyingSquirrel,
    [GuardianAnimal.Koi]: Koi,
    [GuardianAnimal.Peafowl]: Peafowl,
    [GuardianAnimal.Sloth]: Sloth,
    [GuardianAnimal.Tiger]: Tiger,
    [GuardianAnimal.KodamaWinter]: KodamaWinter,
    [GuardianAnimal.KodamaSpring]: KodamaSpring,
    [GuardianAnimal.KodamaSummer]: KodamaSummer,
    [GuardianAnimal.KodamaAutumn]: KodamaAutumn,
    [GuardianAnimal.KodamaTree1]: KodamaTree1,
    [GuardianAnimal.KodamaTree2]: KodamaTree2,
    [GuardianAnimal.KodamaTree3]: KodamaTree3,
    [GuardianAnimal.KodamaTree4]: KodamaTree4,
    [GuardianAnimal.KodamaTree5]: KodamaTree5,
    [GuardianAnimal.KodamaTree6]: KodamaTree6,
    [GuardianAnimal.KodamaWater1]: KodamaWater1,
    [GuardianAnimal.KodamaWater2]: KodamaWater2,
    [GuardianAnimal.KodamaWater3]: KodamaWater3,
    [GuardianAnimal.KodamaWater4]: KodamaWater4,
    [GuardianAnimal.KodamaWater5]: KodamaWater5,
    [GuardianAnimal.KodamaWater6]: KodamaWater6,
    [GuardianAnimal.KodamaFlower1]: KodamaFlower1,
    [GuardianAnimal.KodamaFlower2]: KodamaFlower2,
    [GuardianAnimal.KodamaFlower3]: KodamaFlower3,
    [GuardianAnimal.KodamaFlower4]: KodamaFlower4,
    [GuardianAnimal.KodamaFlower5]: KodamaFlower5,
    [GuardianAnimal.KodamaFlower6]: KodamaFlower6
  }

  canShortClick(move: MaterialMove<number, number, number>, context: ItemContext<number, number, number>): boolean {
    const { type, index, rules, player } = context
    if (isMoveItemType(MaterialType.GuardianAnimalCard)(move)) {
      const card = rules.material(type).index(index)
      const item = card.getItem()!
      return item.location.type === LocationType.PlayerDeckStack
        && item.location.player === player && move.location.type === LocationType.HelpLine
        && card.getIndex() === move.itemIndex
    }

    return super.canShortClick(move, context)
  }

  help = GuardianAnimalCardHelp
}

export const guardianAnimalCardDescription = new GuardianAnimalCardDescription()
