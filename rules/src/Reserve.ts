/**
 * In here, you describe what a GameState will look like at any time during a game.
 */
import GuardianAnimal, { guardianAnimals } from './material/GuardianAnimal'

export const startingReserveStack1 = guardianAnimals.filter((g) => g >= GuardianAnimal.Hedgehog && g <= GuardianAnimal.HornedOwl)
export const startingReserveStack2 = guardianAnimals.filter((g) => g >= GuardianAnimal.Woodpecker && g <= GuardianAnimal.Cobra).concat(GuardianAnimal.Armadillo, GuardianAnimal.Capybara, GuardianAnimal.Crayfish, GuardianAnimal.Sloth, GuardianAnimal.Peafowl)
export const startingReserveStack3 = guardianAnimals.filter((g) => g >= GuardianAnimal.Cricket && g <= GuardianAnimal.Tapir).concat(GuardianAnimal.Tiger, GuardianAnimal.FlyingSquirrel, GuardianAnimal.Koi, GuardianAnimal.Anteater, GuardianAnimal.Ara)