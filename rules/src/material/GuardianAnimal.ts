import { isEnumValue } from '@gamepark/rules-api'
import { TFunction } from 'i18next'

enum GuardianAnimal {
  Bear = 1,
  Beetle,
  Lynx,
  Fox,
  GoldFish,
  Tanuki,
  Boar,
  Weasel,
  Rabbit,
  Doe,
  HummingBird,
  Bee,
  Monkey,
  Owl,
  Hedgehog,
  Caterpillar,
  Flamingo,
  Ram,
  Wolf,
  Lemur,
  Squirrel,
  Turtle,
  Coati,
  Racoon,
  Beaver,
  Raven,
  Bat,
  Parrot,
  Meerkat,
  Horse,
  Axolotls,
  Chimpanzee,
  Toucan,
  Butterfly,
  Spider,
  Hippopotamus,
  EagleOwl,
  Woodpecker,
  Badger,
  Rooster,
  Rhinoceros,
  Goat,
  Bull,
  Lizard,
  Frog,
  Marmot,
  Platypus,
  Crane,
  Sloth,
  Koala,
  Leopard,
  Eagle,
  Snake,
  Cricket,
  Panther,
  Gorilla,
  Bison,
  Chameleon,
  Crocodile,
  Elephant,
  Dolphin,
  Dog,
  Panda,
  Stag,
  Tapir,
  Varan,
}

export const guardianAnimals = Object.values(GuardianAnimal).filter(isEnumValue)
export const startingGuardianAnimals = guardianAnimals.slice(0, 14)

export const isVaran = (guardianAnimal: GuardianAnimal) => GuardianAnimal.Varan === guardianAnimal

export default GuardianAnimal

export const getAnimalTranslation = (t: TFunction, animal: GuardianAnimal) => {
  return t(`guardian.${animal}`)
}
