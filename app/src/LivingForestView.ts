import { drawCardInView } from '@gamepark/living-forest/moves/DrawCard'
import MoveType from '@gamepark/living-forest/moves/MoveType'
import MoveView from '@gamepark/living-forest/moves/MoveView'
import { shuffleDiscardInView } from '@gamepark/living-forest/moves/ShuffleDiscard'
import { Game } from '@gamepark/rules-api'
import DisplayScreen, { DISPLAY_SCREEN } from './DisplayScreen'
import GameLocalView from './GameLocalView'
import { fillReserveInView } from '@gamepark/living-forest/moves/FillReserve';
import { attractGuardianAnimal } from '@gamepark/living-forest/moves/AttractGuardianAnimal';
import { takeFragmentTile } from '@gamepark/living-forest/moves/TakeFragmentTile';
import { tellYouAreReady } from '@gamepark/living-forest/moves/TellYouAreReady';
import { startPhase } from '@gamepark/living-forest/moves/StartPhase';
import { extinguishFire } from '../../rules/src/moves/ExtinguishFire';
import { endTurn } from '../../rules/src/moves/EndTurn';
import { takeProtectiveTree } from '@gamepark/living-forest/moves/TakeProtectiveTree'

/**
 * This class is useful when the game has "IncompleteInformation" (or "SecretInformation").
 * It allows to handle, in a different way than the backend side, the moves that involve hidden information.
 */
export default class LivingForestView implements Game<GameLocalView, MoveView | DisplayScreen> {
  state: GameLocalView

  constructor(state: GameLocalView) {
    this.state = state
  }

  /**
   * In this method, inside the view, we must return any move that the frontend can fully anticipate.
   * The reason why it should be anticipated instead of waiting for the backend to provide with all the automatic consequences is latency.
   * If the backend takes time to reply, maybe we will have the reply while we are animating the first consequences. The player won't notice the latency!
   *
   * @return A MoveView which can be completely anticipated by the player or the spectator
   */
  getAutomaticMove(): void | MoveView {
    return
  }

  /**
   * This is where a move is reproduced on the browser of a player. Most move will be treated the exact same way on both server and client side,
   * however some moves, that involved hiding information or discovering hidden information, will receive a different treatment than in the main rules class.
   *
   * @param move The move that must be applied in the browser of the player or the spectator
   */
  play(move: MoveView | DisplayScreen): void {
    switch (move.type) {
      case MoveType.DrawCard:
        return drawCardInView(this.state, move)
      case MoveType.ShuffleDiscard:
        return shuffleDiscardInView(this.state, move)
      case MoveType.FillReserve:
        return fillReserveInView(this.state, move)
      case MoveType.TakeFragmentTile:
        return takeFragmentTile(this.state, move)
      case MoveType.AttractGuardianAnimal:
        return attractGuardianAnimal(this.state, move)
      case MoveType.ExtinguishFire:
        return extinguishFire(this.state, move)
      case MoveType.TellYouAreReady:
        return tellYouAreReady(this.state, move)
      case MoveType.StartPhase:
        return startPhase(this.state, move)
      case MoveType.EndTurn:
        return endTurn(this.state, move)
      case MoveType.TakeProtectiveTree:
        return takeProtectiveTree(this.state, move)
      // case MoveType.NextPlayer:
      //   return nextPlayer(this.state, move)
      case DISPLAY_SCREEN:
        this.state.displayedPlayer = move.spiritOfNature
        break
    }
  }

}