import Resource from './Resource';
import GuardianAnimalDetails from './GuardianAnimalDetails';
import CardType from './CardType';

const { Sun = 1, Drop, Seed, Wind, SacredFlower } = Resource
const { Solitary = 1, Gregarious } = CardType

export const Bear: GuardianAnimalDetails = {
    resource: {
        [Drop]: 1,
        [Seed]: 2
    },
    type: Solitary
}

export const Beetle: GuardianAnimalDetails = {
    resource: {
        [Sun]: 3,
        [Seed]: 1
    },
    type: Solitary
}

export const Lynx: GuardianAnimalDetails = {
    resource: {
        [Sun]: 2,
        [Drop]: 1,
        [Seed]: 1
    },
    type: Solitary
}

export const Fox: GuardianAnimalDetails = {
    resource: {
        [Drop]: 1,
        [Seed]: 1,
        [SacredFlower]: 1
    },
    type: Solitary
}

export const GoldFish: GuardianAnimalDetails = {
    resource: {
        [Drop]: 2,
        [Seed]: -1
    }
}

export const Tanuki: GuardianAnimalDetails = {
    resource: {
        [Sun]: 3,
        [SacredFlower]: -1
    }
}

export const Boar: GuardianAnimalDetails = {
    resource: {
        [Sun]: -2,
        [Seed]: 2
    }
}

export const Weasel: GuardianAnimalDetails = {
    resource: {
        [Sun]: 2
    }
}

export const Rabbit: GuardianAnimalDetails = {
    resource: {
        [Wind]: 1
    }
}

export const Doe: GuardianAnimalDetails = {
    resource: {
        [SacredFlower]: 1
    }
}

export const HummingBird: GuardianAnimalDetails = {
    resource: {
        [Drop]: 1
    }
}

export const Bee: GuardianAnimalDetails = {
    resource: {
        [Seed]: 1
    }
}

export const Monkey: GuardianAnimalDetails = {
    resource: {
        [Sun]: 1
    }
}

export const Owl: GuardianAnimalDetails = {
    resource: {
        [Seed]: 2,
        [Wind]: 1
    },
    type: Solitary
}

export const Hedgehog: GuardianAnimalDetails = {
    resource: {
        [Sun]: 3
    },
    cost: 3
}

export const Caterpillar: GuardianAnimalDetails = {
    resource: {
        [Seed]: 2
    },
    cost: 3
}

export const Flamingo: GuardianAnimalDetails = {
    resource: {
        [Drop]: 2
    },
    cost: 3
}

export const Ram: GuardianAnimalDetails = {
    resource: {
        [SacredFlower]: 2
    },
    cost: 5
}

export const Wolf: GuardianAnimalDetails = {
    resource: {
        [Wind]: 2
    },
    cost: 5
}

export const Lemur: GuardianAnimalDetails = {
    resource: {
        [Sun]: 4
    },
    cost: 5
}

export const Squirral: GuardianAnimalDetails = {
    resource: {
        [Sun]: 1,
        [Seed]: 2
    },
    cost: 5
}

export const Turtle: GuardianAnimalDetails = {
    resource: {
        [Sun]: 1,
        [Drop]: 2
    },
    cost: 5
}

export const Coati: GuardianAnimalDetails = {
    resource: {
        [Sun]: 2,
        [Seed]: 1
    },
    cost: 3
}

export const Racoon: GuardianAnimalDetails = {
    resource: {
        [Sun]: 2,
        [Drop]: 1
    },
    cost: 3
}

export const Beaver: GuardianAnimalDetails = {
    resource: {
        [Drop]: 1,
        [Seed]: 1
    },
    cost: 2
}

export const Raven: GuardianAnimalDetails = {
    resource: {
        [Sun]: 1,
        [Wind]: 1
    },
    cost: 2
}

export const Bat: GuardianAnimalDetails = {
    resource: {
        [Sun]: -1,
        [Seed]: 3
    },
    cost: 5
}

export const Parrot: GuardianAnimalDetails = {
    resource: {
        [Sun]: 3,
        [Seed]: -1,
        [SacredFlower]: 1
    },
    cost: 4,

}
export const Meerkat: GuardianAnimalDetails = {
    resource: {
        [Sun]: 1,
        [Drop]: -1,
        [Seed]: 2
    },
    cost: 2,

}

export const Horse: GuardianAnimalDetails = {
    resource: {
        [Sun]: -1,
        [Wind]: 2
    },
    cost: 3,

}

export const Axolotls: GuardianAnimalDetails = {
    resource: {
        [Drop]: 1,
        [Seed]: -1,
        [Wind]: 1,
        [SacredFlower]: 1
    },
    cost: 4,

}

export const Chimpanzee: GuardianAnimalDetails = {
    resource: {
        [Seed]: -2
    },
    cost: 5,
    type: Gregarious,

}

export const Toucan: GuardianAnimalDetails = {
    resource: {
        [Sun]: -2,
        [Seed]: -1
    },
    cost: 4,
    type: Gregarious,

}

export const Butterfly: GuardianAnimalDetails = {
    resource: {
        [Sun]: -3
    },
    cost: 5,
    type: Gregarious,

}

export const Spider: GuardianAnimalDetails = {
    resource: {
        [Sun]: 2,
        [Seed]: 4
    },
    cost: 5,
    type: Solitary,

}

export const Hippopotamus: GuardianAnimalDetails = {
    resource: {
        [Sun]: 1,
        [Drop]: 4,
        [Seed]: 1
    },
    cost: 2,
    type: Solitary,

}

export const EagleOwl: GuardianAnimalDetails = {
    resource: {
        [Sun]: 1,
        [Drop]: 1,
        [Wind]: 3
    },
    cost: 2,
    type: Solitary,

}

export const Woodpecker: GuardianAnimalDetails = {
    resource: {
        [Seed]: 2,
        [SacredFlower]: 1
    },
    cost: 6
}

export const Badger: GuardianAnimalDetails = {
    resource: {
        [Sun]: 2,
        [Wind]: 2
    },
    cost: 8
}

export const Rooster: GuardianAnimalDetails = {
    resource: {
        [Sun]: 3,
        [Seed]: 1
    },
    cost: 5
}

export const Rhinoceros: GuardianAnimalDetails = {
    resource: {
        [Seed]: 3
    },
    cost: 6
}

export const Goat: GuardianAnimalDetails = {
    resource: {
        [Sun]: 2,
        [SacredFlower]: 2
    },
    cost: 8
}

export const Bull: GuardianAnimalDetails = {
    resource: {
        [Drop]: 1,
        [Seed]: 1,
        [Wind]: 1
    },
    cost: 5
}

export const Lizard: GuardianAnimalDetails = {
    resource: {
        [Drop]: 2,
        [Wind]: 1
    },
    cost: 6
}

export const Frog: GuardianAnimalDetails = {
    resource: {
        [Sun]: 2,
        [Drop]: 2
    },
    cost: 6
}

export const Marmot: GuardianAnimalDetails = {
    resource: {
        [Sun]: 5
    },
    cost: 7
}

export const Platypus: GuardianAnimalDetails = {
    resource: {
        [Drop]: 3,
        [SacredFlower]: 1
    },
    cost: 9
}

export const Crane: GuardianAnimalDetails = {
    resource: {
        [Seed]: 2,
        [Wind]: 1
    },
    cost: 6
}

export const Sloth: GuardianAnimalDetails = {
    resource: {
        [Sun]: 1,
        [Drop]: -3,
        [Seed]: 2
    },
    cost: 10,
    type: Gregarious,

}

export const Koala: GuardianAnimalDetails = {
    resource: {
        [Sun]: 3,
        [Wind]: -2
    },
    cost: 9,
    type: Gregarious,

}

export const Leopard: GuardianAnimalDetails = {
    resource: {
        [Sun]: -2,
        [SacredFlower]: 1
    },
    cost: 10,
    type: Gregarious,

}

export const Eagle: GuardianAnimalDetails = {
    resource: {
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
    resource: {
        [Sun]: 4,
        [Drop]: 1,
        [Seed]: 2,
        [SacredFlower]: 1
    },
    cost: 5,
    type: Solitary

}

export const Cricket: GuardianAnimalDetails = {
    resource: {
        [Drop]: 1,
        [Seed]: 4
    },
    cost: 11
}

export const Panther: GuardianAnimalDetails = {
    resource: {
        [Drop]: 2,
        [Wind]: 2
    },
    cost: 10
}

export const Gorilla: GuardianAnimalDetails = {
    resource: {
        [Seed]: 1,
        [Wind]: 2,
        [SacredFlower]: 1
    },
    cost: 10
}

export const Bison: GuardianAnimalDetails = {
    resource: {
        [Sun]: 6,
        [Seed]: 1
    },
    cost: 11
}

export const Chameleon: GuardianAnimalDetails = {
    resource: {
        [Sun]: 2,
        [Wind]: 1,
        [SacredFlower]: 2
    },
    cost: 11
}

export const Crocodile: GuardianAnimalDetails = {
    resource: {
        [Sun]: 1,
        [Drop]: 2,
        [Seed]: 2
    },
    cost: 10
}

export const Elephant: GuardianAnimalDetails = {
    resource: {
        [Sun]: 2,
        [SacredFlower]: 3
    },
    cost: 12
}

export const Dolphin: GuardianAnimalDetails = {
    resource: {
        [Sun]: 1,
        [Drop]: 4
    },
    cost: 10
}

export const Dog: GuardianAnimalDetails = {
    resource: {
        [Wind]: 3,
        [SacredFlower]: 1
    },
    cost: 12
}

export const Panda: GuardianAnimalDetails = {
    resource: {
        [Seed]: 1,
        [SacredFlower]: 3
    },
    cost: 11
}

export const Stag: GuardianAnimalDetails = {
    resource: {
        [SacredFlower]: 1
    },
    cost: 13,
    type: Gregarious
}

export const Tapir: GuardianAnimalDetails = {
    resource: {
        [Seed]: 4,
        [Wind]: 2,
        [SacredFlower]: 2
    },
    cost: 12,
    type: Solitary
}