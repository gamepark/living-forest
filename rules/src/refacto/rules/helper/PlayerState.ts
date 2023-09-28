import { Material, MaterialGame, MaterialRulesPart } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { LocationType } from '../../material/LocationType'
import { getSolitaryGregariousDifference, GuardianAnimalDescriptions } from '../../../material/GuardianAnimalDescriptions'
import Resource from '../../../material/Resource'
import sumBy from 'lodash/sumBy'
import SpiritOfNature from '../../../SpiritOfNature'
import { Memory } from '../Memory'
import { protectiveTreeDetail } from '../../../material/ProtectivesTrees'

export class PlayerState extends MaterialRulesPart {
  private helpLine: Material;

  constructor(game: MaterialGame, readonly player: SpiritOfNature) {
    super(game)
    this.helpLine = this.material(MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(player)
  }

  get solidarityGregariousDifference() {
    return getSolitaryGregariousDifference(this.helpLine.getItems().map((i) => i.id))
  }

  get waterResources() {
    return this.getResources(Resource.Drop) + this.modifier
  }

  get windResources() {
    return this.getResources(Resource.Drop)
  }

  get sunResources() {
    return this.getResources(Resource.Sun) + this.modifier
  }

  get seedResources() {
    return this.getResources(Resource.Seed) + this.modifier
  }

  get modifier() {
    return (this.bonus ?? 0) - (this.spent ?? 0)
  }

  get bonus() {
    return this.remind(Memory.Bonus) ?? 0
  }

  get spent() {
    return this.remind(Memory.SpentPoints) ?? 0
  }

  get isEmptyHelpLine() {
    return !this.helpLine.length
  }

  getResources(type: Resource) {
    const helpLineResources = this.getHelpLineResources(type)
    const treeResources = this.getTreeResources(type)
    const forestResources = this.getForestBonus(type)
    return helpLineResources + treeResources + forestResources
  }

  getTreeResources(resource: Resource) {
    return sumBy(this.plantedTrees.getItems(), (item) => protectiveTreeDetail[item.id][resource] ?? 0) ?? 0
  }

  getHelpLineResources(resource: Resource) {
    return sumBy(this.helpLine.getItems(), (item) => GuardianAnimalDescriptions[item.id]?.resources?.[resource] ?? 0) ?? 0
  }

  getForestBonus(resource: Resource) {
    const forest = this.plantedTrees
    switch (resource) {
      case Resource.Drop:
        return forest.filter((item) => item.location.x === 1).length === 3? 1: 0
      case Resource.Wind:
        return forest.filter((item) => item.location.x === 3).length === 3? 1: 0
      case Resource.SacredFlower:
        return forest.filter((item) => item.location.y === 1).length === 4? 2: 0
      case Resource.Sun:
        return forest.filter((item) => item.location.x === 2).length === 2? 1: 0
    }

    return 0
  }

  get plantedTrees() {
    return this.material(MaterialType.ProtectiveTreeTiles).location(LocationType.TreeSpace).player(this.player)
  }
}