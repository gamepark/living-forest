import { isMoveItemType, ItemMove, MaterialItem, MaterialMove, PlayerTurnRule, XYCoordinates } from '@gamepark/rules-api'
import { MaterialType } from '../../material/MaterialType'
import { Memory } from '../Memory'
import { RuleId } from '../RuleId'
import { LocationType } from '../../material/LocationType'
import ProtectiveTree from '../../../material/ProtectiveTree'
import { Tree10, Tree11, Tree3A, Tree3B, Tree4A, Tree4B, Tree5A, Tree5B, Tree6, Tree7, Tree8, Tree9 } from '../../../material/ProtectivesTrees'
import { forestTreeSpaces } from '../../../material/ForestTreeSpaces'
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
    
    // TODO: if there is an effect, don't decrease and go to action
    this.memorize(Memory.Actions, (action) => action - 1)
    return [this.rules().startRule(RuleId.Action)]
  }

  get availableTrees() {
    const resources = this.resources
    return this.material(MaterialType.ProtectiveTreeTiles)
      .location(LocationType.TreeDispenser)
      .filter((item) => this.protectiveTreeDetail[item.id].cost <= resources)
  }

  get plantedTrees() {
    return this.material(MaterialType.ProtectiveTreeTiles).location(LocationType.TreeSpace).player(this.player).getItems()
  }

  onRuleEnd() {
    this.forget(Memory.Bonus)
    this.forget(Memory.SpentPoints)
    return []
  }

  get resources() {
    return this.playerState.waterResources
  }

  get playerState() {
    return new PlayerState(this.game, this.player)
  }
  
  get protectiveTreeDetail() {
    return {
      [ProtectiveTree.Tree3A]: Tree3A,
      [ProtectiveTree.Tree3B]: Tree3B,
      [ProtectiveTree.Tree4A]: Tree4A,
      [ProtectiveTree.Tree4B]: Tree4B,
      [ProtectiveTree.Tree5A]: Tree5A,
      [ProtectiveTree.Tree5B]: Tree5B,
      [ProtectiveTree.Tree6]: Tree6,
      [ProtectiveTree.Tree7]: Tree7,
      [ProtectiveTree.Tree8]: Tree8,
      [ProtectiveTree.Tree9]: Tree9,
      [ProtectiveTree.Tree10]: Tree10,
      [ProtectiveTree.Tree11]: Tree11,
    }
  }
}