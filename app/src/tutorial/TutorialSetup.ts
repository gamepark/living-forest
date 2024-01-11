import { LivingForestOptions } from '@gamepark/living-forest/LivingForestOptions'
import { LivingForestSetup } from '@gamepark/living-forest/LivingForestSetup'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'

export class TutorialSetup extends LivingForestSetup {

  setupPlayer(player: SpiritOfNature, options: LivingForestOptions): void {
    super.setupPlayer(player, options)
    if (player === SpiritOfNature.Spring) {
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.Beetle)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.Rabbit)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.Monkey)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.Owl)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.Bear)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.Fox)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.Tanuki)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.Boar)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.Weasel)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
    }

    if (player === SpiritOfNature.Winter) {
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Winter)
        .id(GuardianAnimal.Lynx)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Winter
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Winter)
        .id(GuardianAnimal.Weasel)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Winter
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Winter)
        .id(GuardianAnimal.Beetle)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Winter
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Winter)
        .id(GuardianAnimal.Fox)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Winter
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Winter)
        .id(GuardianAnimal.Bear)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Winter
        })
    }


  }

  setupReserveStack() {
    super.setupReserveStack()
    this
      .material(MaterialType.GuardianAnimalCard)
      .location(LocationType.ReserveStack)
      .id(GuardianAnimal.Hedgehog)
      .moveItem({
        type: LocationType.ReserveStack,
        id: 1
      })
    this
      .material(MaterialType.GuardianAnimalCard)
      .location(LocationType.ReserveStack)
      .id(GuardianAnimal.Meerkat)
      .moveItem({
        type: LocationType.ReserveStack,
        id: 1
      })
    this
      .material(MaterialType.GuardianAnimalCard)
      .location(LocationType.ReserveStack)
      .id(GuardianAnimal.Butterfly)
      .moveItem({
        type: LocationType.ReserveStack,
        id: 1
      })
    this
      .material(MaterialType.GuardianAnimalCard)
      .location(LocationType.ReserveStack)
      .id(GuardianAnimal.Wolf)
      .moveItem({
        type: LocationType.ReserveStack,
        id: 1
      })
    this
      .material(MaterialType.GuardianAnimalCard)
      .location(LocationType.ReserveStack)
      .id(GuardianAnimal.Flamingo)
      .moveItem({
        type: LocationType.ReserveStack,
        id: 1
      })
  }

}