import { LivingForestSetup } from '@gamepark/living-forest/LivingForestSetup'

export class TutorialSetup extends LivingForestSetup {
  // setupPlayer(player: SpiritOfNature, options: LivingForestOptions) {
  //     const spirits = options.players.map((p) => p.id)
  //     this.material(MaterialType.GuardianAnimalCard).createItems(startingGuardianAnimals.map((card) => ({
  //       id: card,
  //       location: { type: LocationType.PlayerDeckStack, player }
  //     })))
  //     this.material(MaterialType.GuardianAnimalCard).player(player).shuffle()

  //     this.material(MaterialType.VictoryTile).createItems(this.spiritVictoryTiles[player].map((tile) => ({
  //       id: tile,
  //       location: { type: LocationType.VictoryTileArea, player, id: VictoryTileTypes[tile] }
  //     })))

  //     // Place on the starting point
  //     this.material(MaterialType.SpiritOfNatureStandee).createItem({
  //       id: player,
  //       location: { type: LocationType.CircleOfSpiritBoardSpace, x: getInitializationPlayersRocks(spirits)![player] }
  //     })
  //   }
}