import { CustomMove, isCustomMoveType, isMoveItemType, isShuffleItemType, ItemMove, MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
import { MaterialType } from '../material/MaterialType'
import { LocationType } from '../material/LocationType'
import { CustomMoveType } from './CustomMoveType'
import SpiritOfNature from '../../SpiritOfNature'
import { RuleId } from './RuleId'
import { PlayerState } from './helper/PlayerState'

export class GuardianAnimalsRule extends SimultaneousRule<SpiritOfNature, MaterialType, LocationType> {

  getLegalMoves(playerId: SpiritOfNature) {

    if (!this.isTurnToPlay(playerId)) {
      return []
    }

    const playerCards = this.getPlayerCards(playerId)
    const deck = playerCards.location(LocationType.PlayerDeckStack)
    const playerState = new PlayerState(this.game, playerId)

    const moves = []
    if (playerState.solidarityGregariousDifference < 3) {
      if (!deck.length) {
        moves.push(this.rules().customMove(CustomMoveType.ShuffleAndDraw, playerId))
      } else {
        moves.push(this.drawACardMove(playerId))
      }
    }

    if (!playerState.isEmptyHelpLine) {
      const fragments = this
        .material(MaterialType.FragmentTile)
        .location(LocationType.PlayerFragmentTileStack)
        .player(playerId);
      if (fragments.length) {
        moves.push(...fragments.moveItems({ location: { type: LocationType.FragmentStack }}))
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
    if (isShuffleItemType(MaterialType.GuardianAnimalCard)(move)) {
      // FIXME: beurk not sure it works well with shuffle juste before
      const player = this.material(MaterialType.GuardianAnimalCard).getItem(move.indexes[0])!.location.player!
      return [this.drawACardMove(player)]
    }


    if (!isMoveItemType(MaterialType.GuardianAnimalCard)(move) || move.position.location?.type !== LocationType.HelpLine) return []
    const playerId = move.position.location.player!
    const fragments = this.material(MaterialType.FragmentTile).location(LocationType.PlayerFragmentTileStack).player(playerId)
    const playerState = new PlayerState(this.game, playerId)
    if (playerState.solidarityGregariousDifference >= 3 && !fragments.length) {
      return [this.rules().endPlayerTurn(playerId)]
    }

    return []
  }



  onCustomMove(move: CustomMove): MaterialMove[] {
    if (!isCustomMoveType(CustomMoveType.ShuffleAndDraw)(move)) return []

    const discard = this.getPlayerCards(move.data).location(LocationType.PlayerDiscardStack)
    return [
      ...discard.sort((item) => -item.location.x!).moveItems({ location: { type: LocationType.PlayerDeckStack, player: move.data }}),
      discard.shuffle(),
    ]
  }

  getPlayerCards(playerId: SpiritOfNature) {
    return this.material(MaterialType.GuardianAnimalCard).player(playerId)
  }

  drawACardMove(playerId: SpiritOfNature): MaterialMove {
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