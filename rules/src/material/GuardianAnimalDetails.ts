import Resource from "./Resource"
import CardType from './CardType'
import GuardianAnimal from "./GuardianAnimal"
import { Bear, Beetle, Fox, Lynx, GoldFish, Tanuki, Boar, Weasel, Rabbit, Doe, HummingBird, Bee, Monkey, Owl, Hedgehog, Caterpillar, Flamingo, Ram, Wolf, Lemur, Squirrel, Turtle, Coati, Racoon, Beaver, Raven, Bat, Parrot, Meerkat, Horse, Axolotls, Chimpanzee, Toucan, Butterfly, Spider, Hippopotamus, EagleOwl, Woodpecker, Badger, Rooster, Rhinoceros, Goat, Bull, Lizard, Frog, Marmot, Platypus, Crane, Sloth, Koala, Leopard, Eagle, Snake, Cricket, Panther, Gorilla, Bison, Chameleon, Crocodile, Elephant, Dolphin, Dog, Panda, Stag, Tapir, Varan } from './GuardiansAnimals';


type GuardianAnimalDetails = {
    resources?: { [key in Resource]?: number }
    cost?: number
    type?: CardType
}

export default GuardianAnimalDetails


export function getGuardianAnimalDetails(guardianAnimal: GuardianAnimal): GuardianAnimalDetails {
    switch (guardianAnimal) {
        case GuardianAnimal.Bear:
            return Bear
        case GuardianAnimal.Beetle:
            return Beetle
        case GuardianAnimal.Lynx:
            return Lynx
        case GuardianAnimal.Fox:
            return Fox
        case GuardianAnimal.GoldFish:
            return GoldFish
        case GuardianAnimal.Tanuki:
            return Tanuki
        case GuardianAnimal.Boar:
            return Boar
        case GuardianAnimal.Weasel:
            return Weasel
        case GuardianAnimal.Rabbit:
            return Rabbit
        case GuardianAnimal.Doe:
            return Doe
        case GuardianAnimal.HummingBird:
            return HummingBird
        case GuardianAnimal.Bee:
            return Bee
        case GuardianAnimal.Monkey:
            return Monkey
        case GuardianAnimal.Owl:
            return Owl
        case GuardianAnimal.Hedgehog:
            return Hedgehog
        case GuardianAnimal.Caterpillar:
            return Caterpillar
        case GuardianAnimal.Flamingo:
            return Flamingo
        case GuardianAnimal.Ram:
            return Ram
        case GuardianAnimal.Wolf:
            return Wolf
        case GuardianAnimal.Lemur:
            return Lemur
        case GuardianAnimal.Squirrel:
            return Squirrel
        case GuardianAnimal.Turtle:
            return Turtle
        case GuardianAnimal.Coati:
            return Coati
        case GuardianAnimal.Racoon:
            return Racoon
        case GuardianAnimal.Beaver:
            return Beaver
        case GuardianAnimal.Raven:
            return Raven
        case GuardianAnimal.Bat:
            return Bat
        case GuardianAnimal.Parrot:
            return Parrot
        case GuardianAnimal.Meerkat:
            return Meerkat
        case GuardianAnimal.Horse:
            return Horse
        case GuardianAnimal.Axolotls:
            return Axolotls
        case GuardianAnimal.Chimpanzee:
            return Chimpanzee
        case GuardianAnimal.Toucan:
            return Toucan
        case GuardianAnimal.Butterfly:
            return Butterfly
        case GuardianAnimal.Spider:
            return Spider
        case GuardianAnimal.Hippopotamus:
            return Hippopotamus
        case GuardianAnimal.EagleOwl:
            return EagleOwl
        case GuardianAnimal.Woodpecker:
            return Woodpecker
        case GuardianAnimal.Badger:
            return Badger
        case GuardianAnimal.Rooster:
            return Rooster
        case GuardianAnimal.Rhinoceros:
            return Rhinoceros
        case GuardianAnimal.Goat:
            return Goat
        case GuardianAnimal.Bull:
            return Bull
        case GuardianAnimal.Lizard:
            return Lizard
        case GuardianAnimal.Frog:
            return Frog
        case GuardianAnimal.Marmot:
            return Marmot
        case GuardianAnimal.Platypus:
            return Platypus
        case GuardianAnimal.Crane:
            return Crane
        case GuardianAnimal.Sloth:
            return Sloth
        case GuardianAnimal.Koala:
            return Koala
        case GuardianAnimal.Leopard:
            return Leopard
        case GuardianAnimal.Eagle:
            return Eagle
        case GuardianAnimal.Snake:
            return Snake
        case GuardianAnimal.Cricket:
            return Cricket
        case GuardianAnimal.Panther:
            return Panther
        case GuardianAnimal.Gorilla:
            return Gorilla
        case GuardianAnimal.Bison:
            return Bison
        case GuardianAnimal.Chameleon:
            return Chameleon
        case GuardianAnimal.Crocodile:
            return Crocodile
        case GuardianAnimal.Elephant:
            return Elephant
        case GuardianAnimal.Dolphin:
            return Dolphin
        case GuardianAnimal.Dog:
            return Dog
        case GuardianAnimal.Panda:
            return Panda
        case GuardianAnimal.Stag:
            return Stag
        case GuardianAnimal.Tapir:
            return Tapir
        case GuardianAnimal.Varan:
            return Varan
    }
}

export function getAnimalsResource(animals: GuardianAnimal[], resource: Resource): number {
    return animals.reduce((sum, animal) => sum + (getGuardianAnimalDetails(animal).resources![resource] ?? 0), 0)
}
export function getAnimalsSolitary(animals: GuardianAnimal[]): number {
    return animals.reduce((sum, animal) => sum + ((getGuardianAnimalDetails(animal).type == 0) ? 1 : 0), 0)
}
export function getAnimalsGregarious(animals: GuardianAnimal[]): number {
    return animals.reduce((sum, animal) => sum + ((getGuardianAnimalDetails(animal).type == 1) ? 1 : 0), 0)
}
export function getAnimalsType(animals: GuardianAnimal[]): number {
    return getAnimalsSolitary(animals) - getAnimalsGregarious(animals)
}