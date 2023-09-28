import { MaterialGameSetup, RuleStep } from '@gamepark/rules-api'
import SpiritOfNature from './SpiritOfNature'
import { MaterialType } from './refacto/material/MaterialType'
import { LocationType } from './refacto/material/LocationType'
import { LivingForestOptions } from './LivingForestOptions'
import { RuleId } from './refacto/rules/RuleId'
import { startingReserveStack1, startingReserveStack2, startingReserveStack3 } from './Reserve'
import GuardianAnimal, { startingGuardianAnimals } from './material/GuardianAnimal'
import { getInitializationDispenser } from './material/ProtectiveTree'
import { getInitializationPlayersRocks } from './material/CircleOfSpirits'
import { locationsStrategies } from './configuration/LocationStrategies'
import { Fire } from './material/Fire'
import VictoryTiles, { VictoryTileTypes } from './material/VictoryTiles'

export const CARDS_PER_ROW = 4
export class LivingForestSetup extends MaterialGameSetup<SpiritOfNature, MaterialType, LocationType, LivingForestOptions> {
  locationsStrategies = locationsStrategies
  setupMaterial(options: LivingForestOptions) {
    this.setupReserveStack()
    this.setupReserveRows()
    this.setupDispenser(options)
    this.setupVaranDeck()
    this.setupFireTile()
    this.setupFragmentTile()
    this.setupPlayers(options)
    this.material(MaterialType.SacredTree).createItem({ location: { type: LocationType.SacredTree, player: options.players[0].id}})
  }

  setupReserveStack() {
    this.material(MaterialType.GuardianAnimalCard).createItems(startingReserveStack1.map((card) => ({ id: card, location: { type: LocationType.ReserveStack, id: 1 } })))
    this.material(MaterialType.GuardianAnimalCard).location(LocationType.ReserveStack).locationId(1).shuffle()

    this.material(MaterialType.GuardianAnimalCard).createItems(startingReserveStack2.map((card) => ({ id: card, location: { type: LocationType.ReserveStack, id: 2 } })))
    this.material(MaterialType.GuardianAnimalCard).location(LocationType.ReserveStack).locationId(2).shuffle()

    this.material(MaterialType.GuardianAnimalCard).createItems(startingReserveStack3.map((card) => ({ id: card, location: { type: LocationType.ReserveStack, id: 3 } })));
    this.material(MaterialType.GuardianAnimalCard).location(LocationType.ReserveStack).locationId(3).shuffle()
  }

  setupFireTile() {
    this.material(MaterialType.FireTile).createItem({ id: Fire.Fire2, quantity: 20, location: { type: LocationType.FireStack, id: Fire.Fire2 } })
    this.material(MaterialType.FireTile).createItem({ id: Fire.Fire3, quantity: 20, location: { type: LocationType.FireStack, id: Fire.Fire3 } })
    this.material(MaterialType.FireTile).createItem({ id: Fire.Fire4, quantity: 20, location: { type: LocationType.FireStack, id: Fire.Fire4 } })
  }

  setupReserveRows() {
    [1, 2, 3].forEach((level) => {
      this.material(MaterialType.GuardianAnimalCard)
        .location(LocationType.ReserveStack)
        .locationId(level)
        .sort((item) => -item.location.x!).limit(CARDS_PER_ROW)
        .moveItems({ location: { type: LocationType.ReserveRow, id: level }})
    })
  }

  setupPlayers(options: LivingForestOptions) {
    options.players.forEach((p) => this.setupPlayer(p.id, options))
  }

  setupPlayer(player: SpiritOfNature, options: LivingForestOptions) {
    const spirits = options.players.map((p) => p.id)
    this.material(MaterialType.GuardianAnimalCard).createItems(startingGuardianAnimals.map((card) => ({ id: card, location: { type: LocationType.PlayerDeckStack, player } })))
    this.material(MaterialType.GuardianAnimalCard).player(player).shuffle()

    this.material(MaterialType.VictoryTile).createItems(this.spiritVictoryTiles[player].map((tile) => ({ id: tile, location: { type: LocationType.VictoryTileArea, player, id: VictoryTileTypes[tile]  } })))

    // Place on the starting point
    this.material(MaterialType.SpiritOfNatureStandee).createItem({ id: player, location: { type: LocationType.CircleOfSpiritBoardSpace, x: getInitializationPlayersRocks(spirits)![player] } })
  }

  setupVaranDeck() {
    this.material(MaterialType.GuardianAnimalCard).createItem({ id: GuardianAnimal.Varan, quantity: 23, location: { type: LocationType.VaranDeck } })
  }

  setupFragmentTile() {
    this.material(MaterialType.FragmentTile).createItem({ id: GuardianAnimal.Varan, quantity: 20, location: { type: LocationType.FragmentStack } })
  }

  setupDispenser(option: LivingForestOptions) {
    const protectiveTreeCounts = getInitializationDispenser(option.players.length)
    Object.entries(protectiveTreeCounts)
      .map(([id, quantity]) => this
        .material(MaterialType.ProtectiveTreeTiles)
        .createItem({ id: +id, quantity, location: { type: LocationType.TreeDispenser } }),
      )
  }

  start(options: LivingForestOptions): RuleStep<SpiritOfNature> {
    return { id: RuleId.GuardianAnimals, players: options.players.map((p) => p.id) }
  }

  get spiritVictoryTiles() {
    return {
      [SpiritOfNature.Spring]: [VictoryTiles.SpringFire, VictoryTiles.SpringFlower, VictoryTiles.SpringTree],
      [SpiritOfNature.Summer]: [VictoryTiles.SummerFire, VictoryTiles.SummerFlower, VictoryTiles.SummerTree],
      [SpiritOfNature.Autumn]: [VictoryTiles.AutumnFire, VictoryTiles.AutumnFlower, VictoryTiles.AutumnTree],
      [SpiritOfNature.Winter]: [VictoryTiles.WinterFire, VictoryTiles.WinterFlower, VictoryTiles.WinterTree],
    }
  }
}