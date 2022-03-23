import {isEnumValue} from '@gamepark/rules-api'

enum GuardianAnimal {
  Bear = 1,
  Beetle,
  Lynx,
  Fox,
  GoldFish,
  Racoon,
  Boar,
  Weasel,
  Rabbit,
  Doe,
  HummingBird,
  Bee,
  Monkey,
  Owl
}

export const guardianAnimals = Object.values(GuardianAnimal).filter(isEnumValue)
export const startingGuardianAnimals = guardianAnimals.slice(0, 14)

export default GuardianAnimal