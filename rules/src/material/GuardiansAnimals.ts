import Resource from './Resource';
import GuardianAnimalDetails from './GuardianAnimalDescriptions';
import CardType from './CardType';
import { RuleId } from '../rules/RuleId';

const { Sun = 1, Drop, Seed, Wind, SacredFlower, Kodama } = Resource
const { Solitary, Gregarious } = CardType

export const Bear: GuardianAnimalDetails = {
    resources: {
        [Drop]: 1,
        [Seed]: 2
    },
    type: Solitary,
    cost: 0
}

export const Beetle: GuardianAnimalDetails = {
    resources: {
        [Sun]: 3,
        [Seed]: 1
    },
    type: Solitary,
    cost: 0
}

export const Lynx: GuardianAnimalDetails = {
    resources: {
        [Sun]: 2,
        [Drop]: 1,
        [Seed]: 1
    },
    type: Solitary,
    cost: 0
}

export const Fox: GuardianAnimalDetails = {
    resources: {
        [Drop]: 1,
        [Seed]: 1,
        [SacredFlower]: 1
    },
    type: Solitary,
    cost: 0
}

export const Goldfish: GuardianAnimalDetails = {
    resources: {
        [Drop]: 2,
        [Seed]: -1
    },
    cost: 0
}

export const Tanuki: GuardianAnimalDetails = {
    resources: {
        [Sun]: 3,
        [SacredFlower]: -1
    },
    cost: 0
}

export const Boar: GuardianAnimalDetails = {
    resources: {
        [Sun]: -2,
        [Seed]: 2
    },
    cost: 0
}

export const Weasel: GuardianAnimalDetails = {
    resources: {
        [Sun]: 2
    },
    cost: 0
}

export const Hare: GuardianAnimalDetails = {
    resources: {
        [Wind]: 1
    },
    cost: 0
}

export const Fawn: GuardianAnimalDetails = {
    resources: {
        [SacredFlower]: 1
    },
    cost: 0
}

export const Hummingbird: GuardianAnimalDetails = {
    resources: {
        [Drop]: 1
    },
    cost: 0
}

export const Bee: GuardianAnimalDetails = {
    resources: {
        [Seed]: 1
    },
    cost: 0
}

export const Baboon: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1
    },
    cost: 0
}

export const Owl: GuardianAnimalDetails = {
    resources: {
        [Seed]: 2,
        [Wind]: 1
    },
    type: Solitary,
    cost: 0
}

export const Hedgehog: GuardianAnimalDetails = {
    resources: {
        [Sun]: 3
    },
    cost: 3
}

export const Caterpillar: GuardianAnimalDetails = {
    resources: {
        [Seed]: 2
    },
    cost: 3
}

export const Flamingo: GuardianAnimalDetails = {
    resources: {
        [Drop]: 2
    },
    cost: 3
}

export const Ram: GuardianAnimalDetails = {
    resources: {
        [SacredFlower]: 2
    },
    cost: 5
}

export const Wolf: GuardianAnimalDetails = {
    resources: {
        [Wind]: 2
    },
    cost: 5
}

export const Lemur: GuardianAnimalDetails = {
    resources: {
        [Sun]: 4
    },
    cost: 5
}

export const Squirrel: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1,
        [Seed]: 2
    },
    cost: 5
}

export const Tortoise: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1,
        [Drop]: 2
    },
    cost: 5
}

export const Coati: GuardianAnimalDetails = {
    resources: {
        [Sun]: 2,
        [Seed]: 1
    },
    cost: 3
}

export const Racoon: GuardianAnimalDetails = {
    resources: {
        [Sun]: 2,
        [Drop]: 1
    },
    cost: 3
}

export const Beaver: GuardianAnimalDetails = {
    resources: {
        [Drop]: 1,
        [Seed]: 1
    },
    cost: 2
}

export const Raven: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1,
        [Wind]: 1
    },
    cost: 2
}

export const Bat: GuardianAnimalDetails = {
    resources: {
        [Sun]: -1,
        [Seed]: 3
    },
    cost: 5
}

export const Cockatoo: GuardianAnimalDetails = {
    resources: {
        [Sun]: 3,
        [Seed]: -1,
        [SacredFlower]: 1
    },
    cost: 4,

}
export const Meerkat: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1,
        [Drop]: -1,
        [Seed]: 2
    },
    cost: 2,

}

export const Horse: GuardianAnimalDetails = {
    resources: {
        [Sun]: -1,
        [Wind]: 2
    },
    cost: 3,

}

export const Axolotl: GuardianAnimalDetails = {
    resources: {
        [Drop]: 1,
        [Seed]: -1,
        [Wind]: 1,
        [SacredFlower]: 1
    },
    cost: 4,

}

export const Chimpanzee: GuardianAnimalDetails = {
    resources: {
        [Seed]: -2
    },
    cost: 5,
    type: Gregarious,

}

export const Toucan: GuardianAnimalDetails = {
    resources: {
        [Sun]: -2,
        [Seed]: -1
    },
    cost: 4,
    type: Gregarious,

}

export const Butterfly: GuardianAnimalDetails = {
    resources: {
        [Sun]: -3
    },
    cost: 5,
    type: Gregarious,

}

export const Spider: GuardianAnimalDetails = {
    resources: {
        [Sun]: 2,
        [Seed]: 4
    },
    cost: 1,
    type: Solitary,

}

export const Hippopotamus: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1,
        [Drop]: 4,
        [Seed]: 1
    },
    cost: 2,
    type: Solitary,

}

export const HornedOwl: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1,
        [Drop]: 1,
        [Wind]: 3
    },
    cost: 2,
    type: Solitary,

}

export const Woodpecker: GuardianAnimalDetails = {
    resources: {
        [Seed]: 2,
        [SacredFlower]: 1
    },
    cost: 6
}

export const Badger: GuardianAnimalDetails = {
    resources: {
        [Sun]: 2,
        [Wind]: 2
    },
    cost: 8
}

export const Rooster: GuardianAnimalDetails = {
    resources: {
        [Sun]: 3,
        [Seed]: 1
    },
    cost: 5
}

export const Rhinoceros: GuardianAnimalDetails = {
    resources: {
        [Seed]: 3
    },
    cost: 6
}

export const Goat: GuardianAnimalDetails = {
    resources: {
        [Sun]: 2,
        [SacredFlower]: 2
    },
    cost: 8
}

export const Bull: GuardianAnimalDetails = {
    resources: {
        [Drop]: 1,
        [Seed]: 1,
        [Wind]: 1
    },
    cost: 5
}

export const Salamander: GuardianAnimalDetails = {
    resources: {
        [Drop]: 2,
        [Wind]: 1
    },
    cost: 6
}

export const Frog: GuardianAnimalDetails = {
    resources: {
        [Sun]: 2,
        [Drop]: 2
    },
    cost: 6
}

export const Marmot: GuardianAnimalDetails = {
    resources: {
        [Sun]: 5
    },
    cost: 7
}

export const Platypus: GuardianAnimalDetails = {
    resources: {
        [Drop]: 3,
        [SacredFlower]: 1
    },
    cost: 9
}

export const Crane: GuardianAnimalDetails = {
    resources: {
        [Seed]: 2,
        [Wind]: 1
    },
    cost: 6
}

export const Loris: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1,
        [Drop]: -3,
        [Seed]: 2
    },
    cost: 10,
    type: Gregarious,

}

export const Koala: GuardianAnimalDetails = {
    resources: {
        [Sun]: 3,
        [Wind]: -2
    },
    cost: 9,
    type: Gregarious,

}

export const Leopard: GuardianAnimalDetails = {
    resources: {
        [Sun]: -2,
        [SacredFlower]: 1
    },
    cost: 10,
    type: Gregarious,

}

export const Eagle: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1,
        [Drop]: 1,
        [Seed]: 2,
        [Wind]: 2,
        [SacredFlower]: 1
    },
    cost: 6,
    type: Solitary,

}

export const Cobra: GuardianAnimalDetails = {
    resources: {
        [Sun]: 4,
        [Drop]: 1,
        [Seed]: 2,
        [SacredFlower]: 1
    },
    cost: 5,
    type: Solitary

}

export const Cricket: GuardianAnimalDetails = {
    resources: {
        [Drop]: 1,
        [Seed]: 4
    },
    cost: 11
}

export const Panther: GuardianAnimalDetails = {
    resources: {
        [Drop]: 2,
        [Wind]: 2
    },
    cost: 10
}

export const Gorilla: GuardianAnimalDetails = {
    resources: {
        [Seed]: 1,
        [Wind]: 2,
        [SacredFlower]: 1
    },
    cost: 10
}

export const Bison: GuardianAnimalDetails = {
    resources: {
        [Sun]: 6,
        [Seed]: 1
    },
    cost: 11
}

export const Chameleon: GuardianAnimalDetails = {
    resources: {
        [Sun]: 2,
        [Wind]: 1,
        [SacredFlower]: 2
    },
    cost: 11
}

export const Crocodile: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1,
        [Drop]: 2,
        [Seed]: 2
    },
    cost: 10
}

export const Elephant: GuardianAnimalDetails = {
    resources: {
        [Sun]: 2,
        [SacredFlower]: 3
    },
    cost: 12
}

export const Dolphin: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1,
        [Drop]: 4
    },
    cost: 10
}

export const Dog: GuardianAnimalDetails = {
    resources: {
        [Wind]: 3,
        [SacredFlower]: 1
    },
    cost: 12
}

export const Panda: GuardianAnimalDetails = {
    resources: {
        [Seed]: 1,
        [SacredFlower]: 3
    },
    cost: 11
}

export const Stag: GuardianAnimalDetails = {
    resources: {
        [SacredFlower]: 1
    },
    cost: 13,
    type: Gregarious
}

export const Tapir: GuardianAnimalDetails = {
    resources: {
        [Seed]: 4,
        [Wind]: 2,
        [SacredFlower]: 2
    },
    cost: 12,
    type: Solitary
}

export const FireVaran: GuardianAnimalDetails = {
    resources: {},
    cost: 0,
    type: Solitary,
}

export const Anteater: GuardianAnimalDetails = {
    resources: {},
    cost: 15,
    bonusAction: RuleId.PlantTree,
}

export const Ara: GuardianAnimalDetails = {
    resources: {},
    cost: 13,
    bonusAction: RuleId.AttractAnimals,
}

export const Armadillo: GuardianAnimalDetails = {
    resources: {
        [SacredFlower]: 1
    },
    cost: 6,
    allowMultiple: RuleId.CallKodama,
}

export const Capybara: GuardianAnimalDetails = {
    resources: {
        [Wind]: 1
    },
    cost: 10,
    allowMultiple: RuleId.MoveOnCircleOfSpirit,
}

export const Crayfish: GuardianAnimalDetails = {
    resources: {
        [Drop]: 1
    },
    cost: 6,
    allowMultiple: RuleId.ExtinguishFire,
}

export const FlyingSquirrel: GuardianAnimalDetails = {
    resources: {},
    cost: 15,
    bonusAction: RuleId.MoveOnCircleOfSpirit,
}

export const Koi: GuardianAnimalDetails = {
    resources: {},
    cost: 12,
    bonusAction: RuleId.ExtinguishFire,
}

export const Peafowl: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1
    },
    cost: 6,
    allowMultiple: RuleId.AttractAnimals,
}

export const Sloth: GuardianAnimalDetails = {
    resources: {
        [Seed]: 1
    },
    cost: 9,
    allowMultiple: RuleId.PlantTree
}

export const Tiger: GuardianAnimalDetails = {
    resources: {},
    cost: 11,
    bonusAction: RuleId.CallKodama
}

export const KodamaSpring: GuardianAnimalDetails = {
    resources: {
        [Kodama]: 1
    },
    cost: 0,
}

export const KodamaSummer: GuardianAnimalDetails = {
    resources: {
        [Kodama]: 1
    },
    cost: 0,
}

export const KodamaAutumn: GuardianAnimalDetails = {
    resources: {
        [Kodama]: 1
    },
    cost: 0,
}

export const KodamaWinter: GuardianAnimalDetails = {
    resources: {
        [Kodama]: 1
    },
    cost: 0,
}

export const KodamaFlower1: GuardianAnimalDetails = {
    resources: {
        [Kodama]: 1
    },
    cost: 1,
}

export const KodamaFlower2: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1,
        [Kodama]: 1
    },
    cost: 2,
}

export const KodamaFlower3: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1,
        [Kodama]: 1
    },
    cost: 2,
}

export const KodamaFlower4: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1,
        [Wind]: 1,
        [Kodama]: 1
    },
    cost: 3,
}

export const KodamaFlower5: GuardianAnimalDetails = {
    resources: {
        [Sun]: 3,
        [Kodama]: 1
    },
    cost: 3,
}

export const KodamaFlower6: GuardianAnimalDetails = {
    resources: {
        [SacredFlower]: 2,
        [Kodama]: 1
    },
    cost: 4,
}

export const KodamaTree1: GuardianAnimalDetails = {
    resources: {
        [Kodama]: 1
    },
    cost: 1,
}

export const KodamaTree2: GuardianAnimalDetails = {
    resources: {
        [Seed]: 1,
        [Kodama]: 1
    },
    cost: 2,
}

export const KodamaTree3: GuardianAnimalDetails = {
    resources: {
        [Seed]: 1,
        [Kodama]: 1
    },
    cost: 2,
}

export const KodamaTree4: GuardianAnimalDetails = {
    resources: {
        [Seed]: 2,
        [Kodama]: 1
    },
    cost: 3,
}

export const KodamaTree5: GuardianAnimalDetails = {
    resources: {
        [Seed]: 1,
        [Wind]: 1,
        [Kodama]: 1
    },
    cost: 3,
}

export const KodamaTree6: GuardianAnimalDetails = {
    resources: {
        [Seed]: 1,
        [SacredFlower]: 1,
        [Kodama]: 1
    },
    cost: 4,
}

export const KodamaWater1: GuardianAnimalDetails = {
    resources: {
        [Kodama]: 1
    },
    cost: 1,
}

export const KodamaWater2: GuardianAnimalDetails = {
    resources: {
        [Drop]: 1,
        [Kodama]: 1
    },
    cost: 2,
}

export const KodamaWater3: GuardianAnimalDetails = {
    resources: {
        [Drop]: 1,
        [Kodama]: 1
    },
    cost: 2,
}

export const KodamaWater4: GuardianAnimalDetails = {
    resources: {
        [Drop]: 2,
        [Kodama]: 1
    },
    cost: 3,
}

export const KodamaWater5: GuardianAnimalDetails = {
    resources: {
        [Drop]: 1,
        [Wind]: 1,
        [Kodama]: 1
    },
    cost: 3,
}

export const KodamaWater6: GuardianAnimalDetails = {
    resources: {
        [Drop]: 1,
        [SacredFlower]: 1,
        [Kodama]: 1
    },
    cost: 4,
}

