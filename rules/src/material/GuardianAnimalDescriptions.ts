import Resource from "./Resource"
import CardType from './CardType'
import GuardianAnimal from "./GuardianAnimal"
import { Bear, Beetle, Fox, Lynx, GoldFish, Tanuki, Boar, Weasel, Rabbit, Doe, HummingBird, Bee, Monkey, Owl, Hedgehog, Caterpillar, Flamingo, Ram, Wolf, Lemur, Squirrel, Turtle, Coati, Racoon, Beaver, Raven, Bat, Parrot, Meerkat, Horse, Axolotls, Chimpanzee, Toucan, Butterfly, Spider, Hippopotamus, EagleOwl, Woodpecker, Badger, Rooster, Rhinoceros, Goat, Bull, Lizard, Frog, Marmot, Platypus, Crane, Sloth, Koala, Leopard, Eagle, Snake, Cricket, Panther, Gorilla, Bison, Chameleon, Crocodile, Elephant, Dolphin, Dog, Panda, Stag, Tapir, Varan } from './GuardiansAnimals';


type GuardianAnimalDetails = {
    resources: { [key in Resource]?: number }
    cost: number
    type?: CardType
}

export default GuardianAnimalDetails

export const GuardianAnimalDescriptions: Record<GuardianAnimal, GuardianAnimalDetails> = {
    [GuardianAnimal.Bear]: Bear,
    [GuardianAnimal.Beetle]: Beetle,
    [GuardianAnimal.Lynx]: Lynx,
    [GuardianAnimal.Fox]: Fox,
    [GuardianAnimal.GoldFish]: GoldFish,
    [GuardianAnimal.Tanuki]: Tanuki,
    [GuardianAnimal.Boar]: Boar,
    [GuardianAnimal.Weasel]: Weasel,
    [GuardianAnimal.Rabbit]: Rabbit,
    [GuardianAnimal.Doe]: Doe,
    [GuardianAnimal.HummingBird]: HummingBird,
    [GuardianAnimal.Bee]: Bee,
    [GuardianAnimal.Monkey]: Monkey,
    [GuardianAnimal.Owl]: Owl,
    [GuardianAnimal.Hedgehog]: Hedgehog,
    [GuardianAnimal.Caterpillar]: Caterpillar,
    [GuardianAnimal.Flamingo]: Flamingo,
    [GuardianAnimal.Ram]: Ram,
    [GuardianAnimal.Wolf]: Wolf,
    [GuardianAnimal.Lemur]: Lemur,
    [GuardianAnimal.Squirrel]: Squirrel,
    [GuardianAnimal.Turtle]: Turtle,
    [GuardianAnimal.Coati]: Coati,
    [GuardianAnimal.Racoon]: Racoon,
    [GuardianAnimal.Beaver]: Beaver,
    [GuardianAnimal.Raven]: Raven,
    [GuardianAnimal.Bat]: Bat,
    [GuardianAnimal.Parrot]: Parrot,
    [GuardianAnimal.Meerkat]: Meerkat,
    [GuardianAnimal.Horse]: Horse,
    [GuardianAnimal.Axolotls]: Axolotls,
    [GuardianAnimal.Chimpanzee]: Chimpanzee,
    [GuardianAnimal.Toucan]: Toucan,
    [GuardianAnimal.Butterfly]: Butterfly,
    [GuardianAnimal.Spider]: Spider,
    [GuardianAnimal.Hippopotamus]: Hippopotamus,
    [GuardianAnimal.EagleOwl]: EagleOwl,
    [GuardianAnimal.Woodpecker]: Woodpecker,
    [GuardianAnimal.Badger]: Badger,
    [GuardianAnimal.Rooster]: Rooster,
    [GuardianAnimal.Rhinoceros]: Rhinoceros,
    [GuardianAnimal.Goat]: Goat,
    [GuardianAnimal.Bull]: Bull,
    [GuardianAnimal.Lizard]: Lizard,
    [GuardianAnimal.Frog]: Frog,
    [GuardianAnimal.Marmot]: Marmot,
    [GuardianAnimal.Platypus]: Platypus,
    [GuardianAnimal.Crane]: Crane,
    [GuardianAnimal.Sloth]: Sloth,
    [GuardianAnimal.Koala]: Koala,
    [GuardianAnimal.Leopard]: Leopard,
    [GuardianAnimal.Eagle]: Eagle,
    [GuardianAnimal.Snake]: Snake,
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
    [GuardianAnimal.Varan]: Varan,
}

export function getAnimalsResource(animals: GuardianAnimal[], resource: Resource): number {
    return animals.reduce((sum, animal) => sum + (GuardianAnimalDescriptions[animal].resources![resource] ?? 0), 0)
}
export function countSolitary(animals: GuardianAnimal[]): number {
    console.log(animals)
    return animals.reduce((sum, animal) => sum + ((GuardianAnimalDescriptions[animal].type == 0) ? 1 : 0), 0)
}
export function countGregarious(animals: GuardianAnimal[]): number {
    return animals.reduce((sum, animal) => sum + ((GuardianAnimalDescriptions[animal].type == 1) ? 1 : 0), 0)
}
export function getSolitaryGregariousDifference(animals: GuardianAnimal[]): number {
    return countSolitary(animals) - countGregarious(animals)
}