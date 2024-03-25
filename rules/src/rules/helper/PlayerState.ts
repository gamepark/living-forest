import { Material, MaterialGame, MaterialRulesPart } from '@gamepark/rules-api'
import sumBy from 'lodash/sumBy'
import uniqBy from 'lodash/uniqBy'
import { getSolitaryGregariousDifference, GuardianAnimalDescriptions } from '../../material/GuardianAnimalDescriptions'
import { LocationType } from '../../material/LocationType'
import { MaterialType } from '../../material/MaterialType'
import { ProtectiveTreeDetail } from '../../material/ProtectivesTrees'
import Resource from '../../material/Resource'
import { VictoryTileType, VictoryTileTypes } from '../../material/VictoryTiles'
import SpiritOfNature from '../../SpiritOfNature'
import { Memory, SpentPoint } from '../Memory'

export class PlayerState extends MaterialRulesPart {
  private helpLine: Material
  private victoryTiles: Material
  private forest: Material
  private fires: Material

  constructor(game: MaterialGame, readonly player: SpiritOfNature) {
    super(game)
    this.helpLine = this.material(MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(this.player)
    this.victoryTiles = this.material(MaterialType.VictoryTile).location(LocationType.VictoryTileArea).player(this.player)
    this.forest = this.material(MaterialType.ProtectiveTreeTiles).location(LocationType.TreeSpace).player(this.player)
    this.fires = this.material(MaterialType.FireTile).location(LocationType.PlayerFireTileStack).player(this.player)
  }

  get solidarityGregariousDifference() {
    return getSolitaryGregariousDifference(this.helpLine.getItems().map((i) => i.id))
  }

  get waterResources() {
    return this.getResources(Resource.Drop)
  }

  get windResources() {
    return this.getResources(Resource.Wind)
  }

  get sunResources() {
    return this.getResources(Resource.Sun)
  }

  get seedResources() {
    return this.getResources(Resource.Seed)
  }

  get flowers() {
    return this.getResources(Resource.SacredFlower)
  }

  get bonus() {
    if (this.player !== this.game.rule?.player) return 0
    return this.remind(Memory.Bonus) ?? 0
  }

  getSpent(resource: Resource) {
    if (this.player !== this.game.rule?.player) return 0
    return this.remind<SpentPoint>(Memory.SpentPoints)?.[resource] ?? 0
  }

  get isEmptyHelpLine() {
    return !this.helpLine.length
  }

  getResources(type: Resource, realtime: boolean = true) {
    const helpLineResources = this.getHelpLineResources(type)
    const treeResources = this.getTreeResources(type)
    const forestResources = this.getForestBonus(type)
    const modifier = this.getModifier(type, realtime)
    return helpLineResources + treeResources + forestResources + modifier
  }

  getModifier(type: Resource, realtime: boolean = true) {
    return (this.bonus ?? 0) - (!realtime? 0: this.getSpent(type))
  }

  getTreeResources(resource: Resource) {
    return sumBy(this.forest.getItems(), (item) => ProtectiveTreeDetail[item.id]?.resources?.[resource] ?? 0) ?? 0
  }

  getHelpLineResources(resource: Resource) {
    return sumBy(this.helpLine.getItems(), (item) => GuardianAnimalDescriptions[item.id]?.resources?.[resource] ?? 0) ?? 0
  }

  getForestBonus(resource: Resource) {
    switch (resource) {
      case Resource.Drop:
        return this.forest.filter((item) => item.location.x === 1).length === 3 ? 1 : 0
      case Resource.Wind:
        return this.forest.filter((item) => item.location.x === 3).length === 3 ? 1 : 0
      case Resource.SacredFlower:
        return this.forest.filter((item) => item.location.y === 1).length === 4 ? 2 : 0
      case Resource.Sun:
        return this.forest.filter((item) => item.location.x === 2).length === 2 ? 1 : 0
    }

    return 0
  }

  get firePoints() {
    const victoryFire = this.countVictoryTileOfType(VictoryTileType.Fire)
    return victoryFire + this.fires.length
  }

  get uniqTrees() {
    return uniqBy(this.forest.getItems(), (item) => item.id)
  }

  get treePoints() {
    const victoryTrees = this.countVictoryTileOfType(VictoryTileType.Tree)
    const tree = this.uniqTrees
    // + 1 is the starting tree
    return victoryTrees + tree.length + 1
  }

  get flowerPoints() {
    const victoryFlowers = this.countVictoryTileOfType(VictoryTileType.Flower)
    return victoryFlowers + this.flowers
  }

  getPointForType(victory: VictoryTileType) {
    switch (victory) {
      case VictoryTileType.Fire:
        return this.firePoints
      case VictoryTileType.Tree:
        return this.treePoints
      case VictoryTileType.Flower:
        return this.flowerPoints
    }
  }

  get hasEnded() {
    return this.flowerPoints >= 12 || this.treePoints >= 12 || this.firePoints >= 12
  }

  get points() {
    return this.firePoints + this.treePoints + this.flowerPoints
  }

  countVictoryTileOfType(victory: VictoryTileType) {
    return this.victoryTiles.filter((item) => VictoryTileTypes[item.id] === victory).length
  }
}