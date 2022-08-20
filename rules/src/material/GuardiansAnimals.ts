import Resource from './Resource';
import GuardianAnimalDetails from './GuardianAnimalDetails';
import CardType from './CardType';

const { Sun = 1, Drop, Seed, Wind, SacredFlower } = Resource
const { Solitary = 1, Gregarious } = CardType

export const Bear: GuardianAnimalDetails = {
    resources: {
        [Drop]: 1,
        [Seed]: 2
    },
    type: Solitary
}

export const Beetle: GuardianAnimalDetails = {
    resources: {
        [Sun]: 3,
        [Seed]: 1
    },
    type: Solitary
}

export const Lynx: GuardianAnimalDetails = {
    resources: {
        [Sun]: 2,
        [Drop]: 1,
        [Seed]: 1
    },
    type: Solitary
}

export const Fox: GuardianAnimalDetails = {
    resources: {
        [Drop]: 1,
        [Seed]: 1,
        [SacredFlower]: 1
    },
    type: Solitary
}

export const GoldFish: GuardianAnimalDetails = {
    resources: {
        [Drop]: 2,
        [Seed]: -1
    }
}

export const Tanuki: GuardianAnimalDetails = {
    resources: {
        [Sun]: 3,
        [SacredFlower]: -1
    }
}

export const Boar: GuardianAnimalDetails = {
    resources: {
        [Sun]: -2,
        [Seed]: 2
    }
}

export const Weasel: GuardianAnimalDetails = {
    resources: {
        [Sun]: 2
    }
}

export const Rabbit: GuardianAnimalDetails = {
    resources: {
        [Wind]: 1
    }
}

export const Doe: GuardianAnimalDetails = {
    resources: {
        [SacredFlower]: 1
    }
}

export const HummingBird: GuardianAnimalDetails = {
    resources: {
        [Drop]: 1
    }
}

export const Bee: GuardianAnimalDetails = {
    resources: {
        [Seed]: 1
    }
}

export const Monkey: GuardianAnimalDetails = {
    resources: {
        [Sun]: 1
    }
}

export const Owl: GuardianAnimalDetails = {
    resources: {
        [Seed]: 2,
        [Wind]: 1
    },
    type: Solitary
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

export const Turtle: GuardianAnimalDetails = {
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

export const Parrot: GuardianAnimalDetails = {
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

export const Axolotls: GuardianAnimalDetails = {
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
    cost: 5,
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

export const EagleOwl: GuardianAnimalDetails = {
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

export const Lizard: GuardianAnimalDetails = {
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

export const Sloth: GuardianAnimalDetails = {
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

export const Snake: GuardianAnimalDetails = {
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

export const Varan: GuardianAnimalDetails = {
    resources: {},
}