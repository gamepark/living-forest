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
        .id(GuardianAnimal.BeetleWinter)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.HareWinter)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.BaboonWinter)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.OwlWinter)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.BearWinter)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.FoxWinter)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.TanukiWinter)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.BoarWinter)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Spring
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Spring)
        .id(GuardianAnimal.WeaselWinter)
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
        .id(GuardianAnimal.LynxWinter)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Winter
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Winter)
        .id(GuardianAnimal.WeaselWinter)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Winter
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Winter)
        .id(GuardianAnimal.BeetleWinter)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Winter
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Winter)
        .id(GuardianAnimal.FoxWinter)
        .moveItem({
          type: LocationType.PlayerDeckStack,
          player: SpiritOfNature.Winter
        })
      this
        .material(MaterialType.GuardianAnimalCard)
        .location(LocationType.PlayerDeckStack)
        .player(SpiritOfNature.Winter)
        .id(GuardianAnimal.BearWinter)
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
      .id(GuardianAnimal.Caterpillar)
      .moveItem({
        type: LocationType.ReserveStack,
        id: 1
      })
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