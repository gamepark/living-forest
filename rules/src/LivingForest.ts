import { IncompleteInformation, SimultaneousGame } from '@gamepark/rules-api';
import shuffle from 'lodash.shuffle'
import GameState from './GameState';
import GameView from './GameView'
import { isGameOptions, LivingForestOptions } from './LivingForestOptions';
import { startingGuardianAnimals } from './material/GuardianAnimal'
import { drawCard, drawCardMove } from './moves/DrawCard'
import Move from './moves/Move';
import MoveType from './moves/MoveType'
import MoveView from './moves/MoveView'
import { shuffleDiscard, shuffleDiscardMove } from './moves/ShuffleDiscard'
import { shuffleToDraw, shuffleToDrawMove } from './moves/ShuffleToDraw'
import Phase from './Phase';
import SpiritOfNature from './SpiritOfNature'
import { startingReserveStack1, startingReserveStack2, startingReserveStack3 } from './Reserve';
import { fillReserve, fillReserveMove } from './moves/FillReserve';
import { getAnimalsType, getAnimalsResource } from './material/GuardianAnimalDetails';
import { dispenserTwoPlayers } from './material/ProtectiveTree';
import { tellYouAreReady, tellYouAreReadyMove } from './moves/TellYouAreReady';
import { startPhaseMove, startPhase } from './moves/StartPhase';
import { takeFragmentTile, takeFragmentTileMove } from './moves/TakeFragmentTile';
import { attractGuardianAnimal, attractGuardianAnimalMove } from './moves/AttractGuardianAnimal';
import { extinguishFire, extinguishFireMove } from './moves/ExtinguishFire';
import { moveCircleOfSpirits, moveCircleOfSpiritsMove } from './moves/MoveCircleOfSpirits';
import { plantTree, plantTreeMove } from './moves/PlantTree';
import ActionMove from './moves/ActionMove';
import Resource from './material/Resource';
// import { getGuardianAnimalDetails } from './material/ProtectiveTreeDetails';
import { circleOfSpiritsRocks, getTwoPlayersRocks } from './material/CircleOfSpirits';



/**
 * Your Board Game rules must extend either "SequentialGame" or "SimultaneousGame".
 * When there is at least on situation during the game where multiple players can act at the same time, it is a "SimultaneousGame"
 * If the game contains information that players does not know (dices, hidden cards...), it must implement "IncompleteInformation".
 * If the game contains information that some players know, but the other players does not, it must implement "SecretInformation" instead.
 * Later on, you can also implement "Competitive", "Undo", "TimeLimit" and "Eliminations" to add further features to the game.
 */
export default class LivingForest extends SimultaneousGame<GameState, Move, SpiritOfNature>
  implements IncompleteInformation<GameState, GameView, Move, MoveView, SpiritOfNature> {
  /**
   * This constructor is called when the game "restarts" from a previously saved state.
   * @param state The state of the game
   */
  constructor(state: GameState)
  /**
   * This constructor is called when a new game is created. If your game has options, or a variable number of players, it will be provided here.
   * @param options The options of the new game
   */
  constructor(options: LivingForestOptions)
  /**
   * In here you must code the construction of your class. Use a "typeguard" to distinguish a new game from a restored game.
   * @param arg The state of the game, or the options when starting a new game
   */
  constructor(arg: GameState | LivingForestOptions) {
    if (isGameOptions(arg)) {
      const stacks = [shuffle(Array.from(startingReserveStack1)), shuffle(Array.from(startingReserveStack2)), shuffle(Array.from(startingReserveStack3))];
      super({
        players: arg.players.map(player => ({
          spirit: player.id,
          ready: false,
          deck: shuffle(startingGuardianAnimals),
          line: [],
          discard: [],
          forest: [[null, null, null, null, null], [null, null, null, null, null], [null, null, null, null, null]],
          victory: [1, 1, 1],
          fragment: 0,
          attractedGuardianAnimal: 0,
          extinguishedFires: [],
          extinguishedFiresTotal: 0,
          actionMoves: []
        })),
        phase: Phase.GuardianAnimals,
        sacredTreeOwner: arg.players[0].id,
        reserve: {
          stacks,
          rows: [stacks[0].splice(0, 4), stacks[1].splice(0, 4), stacks[2].splice(0, 4)]
        },
        dispenser: dispenserTwoPlayers,
        circle: {
          fire: [1, null, null, null, null, null, null],
          position: getTwoPlayersRocks(arg)
        },
      })
    } else {
      super(arg)
    }
  }

  /**
   * @return True when game is over
   */
  isOver(): boolean {
    return false
  }

  isTurnToPlay(spirit: SpiritOfNature): boolean {
    if (this.state.phase === Phase.GuardianAnimals) {
      return !this.getPlayer(spirit).ready
    } else {
      return this.state.currentPlayer === spirit
    }
  }

  getPlayer(spirit: SpiritOfNature) {
    return this.state.players.find(p => p.spirit === spirit)!
  }


  /**
   * Return the exhaustive list of moves that can be played by the active player.
   * This is used for 2 features:
   * - security (preventing unauthorized moves from being played);
   * - "Dummy players": when a player leaves a game, it is replaced by a "Dummy" that plays random moves, allowing the other players to finish the game.
   * In a SimultaneousGame, as multiple players can be active you will be passed a playedId as an argument.
   * If the game allows a very large (or infinite) number of moves, instead of implementing this method, you can implement instead:
   * - isLegal(move: Move):boolean, for security; and
   * - A class that implements "Dummy" to provide a custom Dummy player.
   */
  getLegalMoves(spirit: SpiritOfNature): Move[] {
    const player = this.getPlayer(spirit)
    const moves: Move[] = []
    switch (this.state.phase) {
      case Phase.GuardianAnimals: {

        if (player.ready) {
          return []
        }

        if (player.deck.length > 0) {
          if (getAnimalsType(player.line) < 3) {
            moves.push(drawCardMove(spirit))

          }
        } else if (player.discard.length > 0) {
          moves.push(shuffleToDrawMove(spirit))
        }

        if (player.line.length > 0) {
          moves.push(tellYouAreReadyMove(spirit))
        }

        return moves
      }
      case Phase.Action: {
        // TODO: Action phase
        const numberAction = (getAnimalsType(player.line) == 3) ? 1 : 2
        console.log(numberAction);
        console.log(player.actionMoves.length);
        if (numberAction > player.actionMoves.length) {

          //Take a fragment tile action
          if (!player.actionMoves.includes(ActionMove.TakeFragmentTile)) {
            moves.push(takeFragmentTileMove(spirit))
          }

          //Attract one or more Guardian Animals action
          // if(!player.actionMoves.includes(ActionMove.AttractGuardianAnimal)){
          //   for(const row of this.state.reserve.rows){
          //     console.log('row : ' + row);

          //     for(const card of row){
          //       console.log('card : '+card);

          //       // if(card != null)moves.push(attractGuardianAnimalMove(spirit, card))
          //     }
          //   }
          // }

          //Move already played
          if (!player.actionMoves.includes(ActionMove.AttractGuardianAnimal)) {

            this.state.reserve.rows.forEach(function (row, index) {
              row.forEach(function (card, indexRow) {

                //Card is drawn
                if (card != null) {
                  //Enough resources ?
                  if (getAnimalsResource(player.line, Resource.Sun) > player.attractedGuardianAnimal + getAnimalsResource([card], Resource.Sun)) {
                    moves.push(attractGuardianAnimalMove(spirit, card, { x: indexRow, y: index }))
                  }
                }
              })
            })
          }

          //Extinguish the Fire action
          this.state.circle.fire.forEach(function (fire, index) {
            if (fire != null) {
              if (getAnimalsResource(player.line, Resource.Seed) > player.extinguishedFiresTotal) {
                moves.push(extinguishFireMove(spirit, index))
              }
            }
          })

          //Move forward on the Circle of Spirits action
          circleOfSpiritsRocks.forEach(function (_rock, index) { moves.push(moveCircleOfSpiritsMove(index, index)) })

          //Plant one and only one Protective Tree action
          Object.entries(this.state.dispenser).forEach(function (_plant, index) { moves.push(plantTreeMove(index, index, index)) })


          return moves
        } else {
          return []
        }

      }
      case Phase.EndOfTurn: {
        // TODO: End of turn phase
        return []
      }
    }

  }

  /**
   * This is the one and only play where you will update the game's state, depending on the move that has been played.
   *
   * @param move The move that should be applied to current state.
   */
  play(move: Move): void {
    switch (move.type) {
      case MoveType.DrawCard:
        return drawCard(this.state, move)
      case MoveType.ShuffleToDraw:
        return shuffleToDraw(this.state, move)
      case MoveType.ShuffleDiscard:
        return shuffleDiscard(this.state, move)
      case MoveType.FillReserve:
        return fillReserve(this.state, move)
      case MoveType.TellYouAreReady:
        return tellYouAreReady(this.state, move)
      case MoveType.StartPhase:
        return startPhase(this.state, move)
      case MoveType.TakeFragmentTile:
        return takeFragmentTile(this.state, move)
      case MoveType.AttractGuardianAnimal:
        return attractGuardianAnimal(this.state, move)
      case MoveType.ExtinguishFire:
        return extinguishFire(this.state, move)
      case MoveType.MoveCircleOfSpirits:
        return moveCircleOfSpirits(this.state, move)
      case MoveType.PlantTree:
        return plantTree(this.state, move)
    }
  }

  /**
   * Here you can return the moves that should be automatically played when the game is in a specific state.
   * Here is an example from monopoly: you roll a dice, then move you pawn accordingly.
   * A first solution would be to do both state updates at once, in a "complex move" (RollDiceAndMovePawn).
   * However, this first solution won't allow you to animate step by step what happened: the roll, then the pawn movement.
   * "getAutomaticMove" is the solution to trigger multiple moves in a single action, and still allow for step by step animations.
   * => in that case, "RollDice" could set "pawnMovement = x" somewhere in the game state. Then getAutomaticMove will return "MovePawn" when
   * "pawnMovement" is defined in the state.
   * Of course, you must return nothing once all the consequences triggered by a decision are completed.
   * VERY IMPORTANT: you should never change the game state in here. Indeed, getAutomaticMove will never be called in replays, for example.
   *
   * @return The next automatic consequence that should be played in current game state.
   */
  getAutomaticMove(): Move[] {
    switch (this.state.phase) {
      case Phase.GuardianAnimals: {

        const shufflingPlayer = this.state.players.find(p => p.shuffle)
        if (shufflingPlayer) {
          return [shuffleDiscardMove(shufflingPlayer.spirit, shuffle(shufflingPlayer.discard)), drawCardMove(shufflingPlayer.spirit)]
        }
        if (this.state.players.every(player => player.ready)) {
          return [startPhaseMove(Phase.Action)]
        }
        return []
      }
      case Phase.Action: {
        return []
      }
      case Phase.EndOfTurn: {

        return [
          //TODO : onibi attack

          //TODO : Onibi attack sacred tree

          //TODO : arrival new guardian animal
          ...this.state.reserve.rows.flatMap((row, indexRow) =>
            Array.from(row.entries()).filter(entry => entry[1] != null).map(entry => fillReserveMove(indexRow, entry[0]))
          )


          //TODO : player discard animals

          //TODO : change first player

          //TODO : change state phase
        ]
      }
    }
  }

  /**
   * If you game has incomplete information, you must hide some of the game's state to the players and spectators.
   * @return What a person can see from the game state
   */
  getView(): GameView {
    return {
      ...this.state,
      players: this.state.players.map(p => ({ ...p, deck: p.deck.length })),
      reserve: { ...this.state.reserve, stacks: this.state.reserve.stacks.map(stack => stack.length) }
    }
  }

  /**
   * If you game has incomplete information, sometime you need to alter a Move before it is sent to the players and spectator.
   * For example, if a card is revealed, the id of the revealed card should be ADDED to the Move in the MoveView
   * Sometime, you will hide information: for example if a player secretly choose a card, you will hide the card to the other players or spectators.
   *
   * @param move The move that has been played
   * @return What a person should know about the move that was played
   */
  getMoveView(move: Move): MoveView {
    if (move.type === MoveType.DrawCard) {
      return { ...move, card: this.getPlayer(move.spirit).deck[0] }
    } else if (move.type === MoveType.ShuffleDiscard) {
      return { type: MoveType.ShuffleDiscard, spirit: move.spirit }
    } else if (move.type === MoveType.FillReserve) {
      return { ...move, card: this.state.reserve.stacks[move.row][0] }
    } else {
      return move
    }
  }
}

