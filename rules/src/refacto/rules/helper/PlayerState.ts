import { Material, MaterialGame, MaterialRulesPart } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { LocationType } from '../../material/LocationType'
import { getSolitaryGregariousDifference, GuardianAnimalDescriptions } from '../../../material/GuardianAnimalDescriptions'
import Resource from '../../../material/Resource'
import sumBy from 'lodash/sumBy'
import SpiritOfNature from '../../../SpiritOfNature'
import { Memory } from '../Memory'

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
    return sumBy(this.helpLine.getItems(), (item) => GuardianAnimalDescriptions[item.id]?.resources?.[type] ?? 0) ?? 0
  }
}