import { isMoveItemType, ItemMove, MaterialItem, MaterialMove, MoveItem, PlayerTurnRule, XYCoordinates } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { Memory } from '../Memory'
import { RuleId } from '../RuleId'
import { LocationType } from '../../material/LocationType'
import { ProtectiveTreeDetail } from '../../material/ProtectivesTrees'
import { forestTreeSpaces } from '../../material/ForestTreeSpaces'
import { PlayerState } from '../helper/PlayerState'

export class PlantProtectiveTreeRule extends PlayerTurnRule {
  getPlayerMoves(): MaterialMove<number, number, number>[] {
    return this.planTreeMoves
  }
  
  get planTreeMoves() {
    const playerTrees = this.plantedTrees
    const availableTrees = this.availableTrees
    return forestTreeSpaces
      .filter((space) => this.isAvailableSpace(space, playerTrees))
      .flatMap((space) => availableTrees.moveItems({ location: { type: LocationType.TreeSpace, ...space, player: this.player } }))
  }

  isAvailableSpace(space: XYCoordinates, playerTrees: MaterialItem[]) {
    const alreadyHasTree = playerTrees.some((item) => item.location.x === space.x && item.location.y === space.y)
    return !alreadyHasTree && (
      playerTrees.some((item) => this.isNextToSpace(item, space)) || this.isNextToStartTree(space)
    )
  }

  isNextToSpace(item: MaterialItem, space: XYCoordinates) {
    return this.getDistance({ x: item.location.x!, y: item.location.y!}, space) === 1
  }

  isNextToStartTree(space: XYCoordinates) {
    return this.getDistance({ x: 2, y: 1 }, space) === 1
  }

  getDistance = (space1: XYCoordinates, space2: XYCoordinates): number =>
    Math.abs(space1.x - space2.x) + Math.abs(space1.y - space2.y)

  afterItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.ProtectiveTreeTiles)(move)) return []

    const actions = this.onPlantTree(move)

    // Only decrease action count if there is no bonus action
    if (!actions.length) {
      this.memorize(Memory.Actions, (action) => action - 1)
      return [this.rules().startRule(RuleId.Action)]
    }

    return actions
  }

  get availableTrees() {
    const resources = this.resources
    return this.material(MaterialType.ProtectiveTreeTiles)
      .location(LocationType.TreeDispenser)
      .filter((item) => ProtectiveTreeDetail[item.id].cost <= resources)
  }

  get plantedTrees() {
    return this.material(MaterialType.ProtectiveTreeTiles).location(LocationType.TreeSpace).player(this.player).getItems()
  }

  onRuleEnd() {
    this.forget(Memory.Bonus)
    return []
  }

  get resources() {
    return this.playerState.seedResources
  }

  get playerState() {
    return new PlayerState(this.game, this.player)
  }

  onPlantTree(move: MoveItem) {
    const attrackAnimal = move.position.location?.x === 0 && move.position.location?.y === 0
    if (attrackAnimal) {
      this.memorize(Memory.Bonus, 3)
      return [this.rules().startRule(RuleId.AttractAnimals)]
    }

    const triggerFragment = (move.position.location?.x === 4 && move.position.location?.y === 0) || (move.position.location?.x === 0 && move.position.location?.y === 2)
    if (triggerFragment) {
      this.memorize(Memory.Bonus, 1)
      return [this.rules().startRule(RuleId.TakeFragment)]
    }

    const extinguishFire = move.position.location?.x === 4 && move.position.location?.y === 2
    if (extinguishFire) {
      this.memorize(Memory.Bonus, 2)
      return [this.rules().startRule(RuleId.ExtinguishFire)]
    }

    return []
  }
}