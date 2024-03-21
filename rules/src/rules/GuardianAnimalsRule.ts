import { CustomMove, isCustomMoveType, isMoveItemType, isShuffleItemType, ItemMove, MaterialMove, SimultaneousRule } from '@gamepark/rules-api'
import CardType from '../material/CardType'
import GuardianAnimal from '../material/GuardianAnimal'
import { GuardianAnimalDescriptions } from '../material/GuardianAnimalDescriptions'
import { LocationType } from '../material/LocationType'
import { MaterialType } from '../material/MaterialType'
import SpiritOfNature from '../SpiritOfNature'
import { CustomMoveType } from './CustomMoveType'
import { PlayerState } from './helper/PlayerState'
import { Memory } from './Memory'
import { RuleId } from './RuleId'

export class GuardianAnimalsRule extends SimultaneousRule<SpiritOfNature, MaterialType, LocationType> {

  getActivePlayerLegalMoves(playerId: SpiritOfNature) {

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

    const deckLength = this.getDeck(playerId).length
    const discardLength = this.getDiscard(playerId).length
    if (playerState.solidarityGregariousDifference < 2 && (deckLength || discardLength)) {
      moves.push(this.rules().customMove(CustomMoveType.DrawUntilSolitary, playerId))
    }

    if (!playerState.isEmptyHelpLine) {
      const fragments = this
        .material(MaterialType.FragmentTile)
        .location(LocationType.PlayerFragmentTileStack)
        .player(playerId);
      if (fragments.length) {
        moves.push(...fragments.moveItems({ type: LocationType.FragmentStack }))
      }
      moves.push(this.rules().endPlayerTurn(playerId))
    }

    return moves;
  }

  beforeItemMove(move: ItemMove) {
    if (!isMoveItemType(MaterialType.FragmentTile)(move) || move.location?.type !== LocationType.FragmentStack) return []

    const player = this.material(MaterialType.FragmentTile).index(move.itemIndex).getItem()!.location.player!

    const lastCard = this
      .getPlayerCards(player)
      .location(LocationType.HelpLine).maxBy((item) => item.location.x!).getItem()?.id

    if (lastCard === GuardianAnimal.Varan) {
      return this
        .getPlayerCards(player)
        .location(LocationType.HelpLine)
        .maxBy((item) => item.location.x!)
        .moveItems({ type: LocationType.VaranDeck })
    } else {
      return this
        .getPlayerCards(player)
        .location(LocationType.HelpLine)
        .maxBy((item) => item.location.x!)
        .moveItems({ type: LocationType.PlayerDiscardStack, player })
    }
  }

  afterItemMove(move: ItemMove): MaterialMove[] {
    if (isShuffleItemType(MaterialType.GuardianAnimalCard)(move)) {
      const player = this.material(MaterialType.GuardianAnimalCard).getItem(move.indexes[0])!.location.player!
      return [this.drawACardMove(player)]
    }

    if (!isMoveItemType(MaterialType.GuardianAnimalCard)(move) || move.location?.type !== LocationType.HelpLine) return []
    const playerId = move.location.player!
    const deckLength = this.getDeck(playerId).length
    const discardLength = this.getDiscard(playerId).length

    if (!deckLength && !discardLength) {
      return [this.rules().endPlayerTurn(playerId)]
    }

    const drawUntilSolitary = this.isDrawUntilSolitary(playerId)
    const card = this.material(MaterialType.GuardianAnimalCard).getItem(move.itemIndex)!
    if (drawUntilSolitary && GuardianAnimalDescriptions[card.id].type !== CardType.Solitary) {
      return [this.drawACardMove(playerId)]
    } else if (GuardianAnimalDescriptions[card.id].type === CardType.Solitary) {
      this.forget(Memory.DrawUntilSolitary, playerId)
    }

    const fragments = this.material(MaterialType.FragmentTile).location(LocationType.PlayerFragmentTileStack).player(playerId)
    const playerState = new PlayerState(this.game, playerId)
    if ((playerState.solidarityGregariousDifference >= 3 && !fragments.length)) {
      return [this.rules().endPlayerTurn(playerId)]
    }

    return []
  }

  getDeck(player: SpiritOfNature) {
    return this.material(MaterialType.GuardianAnimalCard).location(LocationType.PlayerDeckStack).player(player)
  }

  getDiscard(player: SpiritOfNature) {
    return this.material(MaterialType.GuardianAnimalCard).location(LocationType.PlayerDiscardStack).player(player)
  }


  onCustomMove(move: CustomMove): MaterialMove[] {
    if (isCustomMoveType(CustomMoveType.DrawUntilSolitary)(move)) {
      const playerId = move.data
      const deckLength = this.getDeck(playerId).length
      const discardLength = this.getDiscard(playerId).length
      this.memorize(Memory.DrawUntilSolitary, true, playerId)
      if (!deckLength && discardLength) {
        return [this.rules().customMove(CustomMoveType.ShuffleAndDraw, playerId)]
      } else if (deckLength) {
        return [this.drawACardMove(playerId)]
      }

      return []
    }

    if (isCustomMoveType(CustomMoveType.ShuffleAndDraw)(move)) {
      const player = move.data
      const discard = this.getPlayerCards(player).location(LocationType.PlayerDiscardStack)
      return [
        ...discard.sort((item) => -item.location.x!).moveItems({ type: LocationType.PlayerDeckStack, player: move.data }),
        discard.shuffle(),
      ]
    }

    return []
  }

  isDrawUntilSolitary(playerId: SpiritOfNature) {
    return this.remind(Memory.DrawUntilSolitary, playerId) ?? false
  }

  getPlayerCards(playerId: SpiritOfNature) {
    return this.material(MaterialType.GuardianAnimalCard).player(playerId)
  }

  drawACardMove(playerId: SpiritOfNature): MaterialMove {
    return this.material(MaterialType.GuardianAnimalCard)
      .player(playerId)
      .location(LocationType.PlayerDeckStack)
      .maxBy((item) => item.location.x!)
      .moveItem({ type: LocationType.HelpLine, player: playerId })
  }

  getMovesAfterPlayersDone(): MaterialMove[] {
    this.game.players.forEach((p) => this.forget(Memory.DrawUntilSolitary, p))
    const sacredTree = this.material(MaterialType.SacredTree).getItem()!
    return [this.rules().startPlayerTurn(RuleId.Action, sacredTree.location.player!)]
  }
}
