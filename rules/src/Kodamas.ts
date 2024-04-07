/**
 * In here, you describe what a GameState will look like at any time during a game.
 */
import GuardianAnimal, { guardianAnimals } from './material/GuardianAnimal'

export const startingKodamaStack1 = guardianAnimals.filter((g) => g >= GuardianAnimal.KodamaFlower1 && g <= GuardianAnimal.KodamaFlower6)
export const startingKodamaStack2 = guardianAnimals.filter((g) => g >= GuardianAnimal.KodamaTree1 && g <= GuardianAnimal.KodamaTree6)
export const startingKodamaStack3 = guardianAnimals.filter((g) => g >= GuardianAnimal.KodamaWater1 && g <= GuardianAnimal.KodamaWater6)