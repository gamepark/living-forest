import { CustomMove, isCustomMoveType, isMoveItemType, ItemMove, MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import { CustomMoveType } from './CustomMoveType'
import SpiritOfNature from '../../SpiritOfNature'
import { getSolitaryGregariousDifference } from '../../material/GuardianAnimalDescriptions'
import { RuleId } from './RuleId'

export class GuardianAnimalsRule extends SimultaneousRule<SpiritOfNature, MaterialType, LocationType> {

  getLegalMoves(playerId: SpiritOfNature) {

    if (!this.isTurnToPlay(playerId)) {
      return []
    }

    const playerCards = this.getPlayerCards(playerId)
    const deck = playerCards.location(LocationType.PlayerDeckStack)
    const helpLine = playerCards.location(LocationType.HelpLine)

    if (!deck.length) {
      return [this.rules().customMove(CustomMoveType.ShuffleAndDraw, playerId)]
    }

    const moves = []
    moves.push(this.drawACard(playerId))

    if (helpLine.length) {
      const fragments = this
        .material(MaterialType.FragmentTile)
        .location(LocationType.ForestBoard)
        .player(playerId);
      if (fragments.length) {
        moves.push(fragments.moveItem({ location: { type: LocationType.FragmentStack }}))
      }
      moves.push(this.rules().endPlayerTurn(playerId))
    }

    return moves;
  }

  beforeItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.FragmentTile)(move) || move.position.location?.type !== LocationType.FragmentStack) return []
    
    const player = this.material(MaterialType.FragmentTile).index(move.itemIndex).getItem()!.location.player!
    return this
      .getPlayerCards(player)
      .location(LocationType.HelpLine)
      .maxBy((item) => item.location.x!)
      .moveItems({ location: { type: LocationType.PlayerDiscardStack, player }})
  }

  afterItemMove(move: ItemMove): MaterialMove[] {
    if (!isMoveItemType(MaterialType.GuardianAnimalCard)(move) || move.position.location?.type !== LocationType.HelpLine) return []
    
    const playerId = move.position.location.player!
    const playerCards = this.getPlayerCards(playerId)
    const helpLine = playerCards.location(LocationType.HelpLine)
    if (getSolitaryGregariousDifference(helpLine.getItems().map((item) => item.id)) >= 3) {
      return [this.rules().endPlayerTurn(playerId)]
    }

    return []
  }

  onCustomMove(move: CustomMove): MaterialMove[] {
    if (!isCustomMoveType(CustomMoveType.ShuffleAndDraw)(move)) return []

    const playerCards = this.getPlayerCards(move.data)
    return [
      ...playerCards.location(LocationType.PlayerDiscardStack).moveItems({ location: { type: LocationType.PlayerDeckStack }}),
      playerCards.location(LocationType.PlayerDiscardStack).shuffle(),
      this.drawACard(move.data)
    ]
  }

  getPlayerCards(playerId: SpiritOfNature) {
    return this.material(MaterialType.GuardianAnimalCard).player(playerId)
  }

  drawACard(playerId: SpiritOfNature): MaterialMove {
    /**
     * items: {
     *  [MaterialType]: MaterialItems[]
     * }
     * 
     * items[1][131]
     */


    return this.material(MaterialType.GuardianAnimalCard)
      .player(playerId)
      .location(LocationType.PlayerDeckStack)
      .sort((item) => -item.location.x!)
      .moveItem({ location: { type: LocationType.HelpLine, player: playerId }})
  }

  getMovesAfterPlayersDone(): MaterialMove[] {
    const sacredTree = this.material(MaterialType.SacredTree).getItem()!
    return [this.rules().startPlayerTurn(RuleId.Action, sacredTree.location.player!)]
  }
}