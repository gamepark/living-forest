import { IncompleteInformation, RandomMove, SimultaneousGame } from '@gamepark/rules-api';
import shuffle from 'lodash.shuffle';
import GameState from './GameState';
import GameView from './GameView';
import { isGameOptions, LivingForestOptions } from './LivingForestOptions';
import { circleOfSpiritsRocks, getInitializationPlayersRocks } from './material/CircleOfSpirits';
import { startingGuardianAnimals } from './material/GuardianAnimal';
import { getAnimalsType, getGuardianAnimalDetails } from './material/GuardianAnimalDetails';
import { getInitializationDispenser } from './material/ProtectiveTree';
import { getProtectiveTreeDetails } from './material/ProtectiveTreeDetails';
import Resource from './material/Resource';
import Victory, { getResourcesCount, getvictoryCount } from './material/Victory';
import { getSpiritVictoryTiles } from './material/VictoryTile';
import ActionMove from './moves/ActionMove';
import { attractGuardianAnimal, attractGuardianAnimalMove } from './moves/AttractGuardianAnimal';
import { cancel } from './moves/CancelMove';
import { discardCard, discardCardMove } from './moves/DiscardCard';
import { drawCard, drawCardMove } from './moves/DrawCard';
import { endTurn, endTurnMove } from './moves/EndTurn';
import { extinguishFire, extinguishFireMove } from './moves/ExtinguishFire';
import { fillReserve, fillReserveMove } from './moves/FillReserve';
import { givingSacredTree, givingSacredTreeMove } from './moves/GivingSacredTree';
import Move, { getAvailableMoves } from './moves/Move';
import { moveCircleOfSpirits, moveCircleOfSpiritsMove } from './moves/MoveCircleOfSpirits';
import MoveRandomized from './moves/MoveRandomized';
import MoveType from './moves/MoveType';
import MoveView from './moves/MoveView';
import { nextPlayer, nextPlayerMove } from './moves/NextPlayer';
import { onibiAttackingPlayers, onibiAttackingPlayersMove } from './moves/OnibiAttackingPlayers';
import { onibiAttackingSacredTree, onibiAttackingSacredTreeMove } from './moves/OnibiAttackingSacredTree';
import { placementIsValid, plantTree, plantTreeMove } from './moves/PlantTree';
import { returnGuardianAnimals, returnGuardianAnimalsMove } from './moves/ReturnGuardianAnimals';
import { randomizeShuffleDiscardMove, shuffleDiscard, shuffleDiscardMove } from './moves/ShuffleDiscard';
import { startPhase, startPhaseMove } from './moves/StartPhase';
import { takeFragmentTile, takeFragmentTileMove } from './moves/TakeFragmentTile';
import { takeProtectiveTree, takeProtectiveTreeMove } from './moves/TakeProtectiveTree';
import { takeVictoryTile, takeVictoryTileMove } from './moves/TakeVictoryTile';
import { tellYouAreReady, tellYouAreReadyMove } from './moves/TellYouAreReady';
import { validate, validateMove } from './moves/ValidateMove';
import Phase from './Phase';
import { getPlayer } from './PlayerView';
import { startingReserveStack1, startingReserveStack2, startingReserveStack3 } from './Reserve';
import SpiritOfNature from './SpiritOfNature';


/**
 * Your Board Game rules must extend either "SequentialGame" or "SimultaneousGame".
 * When there is at least on situation during the game where multiple players can act at the same time, it is a "SimultaneousGame"
 * If the game contains information that players does not know (dices, hidden cards...), it must implement "IncompleteInformation".
 * If the game contains information that some players know, but the other players does not, it must implement "SecretInformation" instead.
 * Later on, you can also implement "Competitive", "Undo", "TimeLimit" and "Eliminations" to add further features to the game.
 */
export default class LivingForest extends SimultaneousGame<GameState, Move, SpiritOfNature>
  implements IncompleteInformation<GameState, GameView, Move, MoveView, SpiritOfNature>,
  RandomMove<GameState, Move, MoveRandomized> {
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
          forest: [[null, null, null, null, null], [null, null, 0, null, null], [null, null, null, null, null]],
          fragment: 0,
          attractedGuardianAnimal: 0,
          extinguishedFires: [],
          extinguishedFiresTotal: 0,
          actionMoves: [],
          tree: null,
          ongoingMove: null,
          bonus: null,
          victoryTiles: getSpiritVictoryTiles(player.id),
          playersJumped: []
        })),
        phase: Phase.GuardianAnimals,
        sacredTreeOwner: arg.players[0].id,
        reserve: {
          stacks,
          rows: [stacks[0].splice(0, 4), stacks[1].splice(0, 4), stacks[2].splice(0, 4)]
        },
        dispenser: getInitializationDispenser(arg.players.length)!,
        circle: {
          fire: [1, null, null, null, null, null, null],
          position: getInitializationPlayersRocks(arg)!
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
    return this.state.phase === Phase.EndOfTurn && this.endOfGame()
  }
  endOfGame() {
    var end = false
    this.state.players.forEach((player) => {
      {
        Object.entries(Victory).splice(3, 3).map((_, index) => {
          const number = getvictoryCount(player.victoryTiles, player.line, player.forest, index + 1, player.extinguishedFires.length)
          if (number >= 12) end = true
        })
      }
    })
    return end
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
          moves.push(shuffleDiscardMove(spirit))
        }

        if (player.line.length > 0) {
          if (player.fragment > 0) moves.push(discardCardMove(spirit))
          moves.push(tellYouAreReadyMove(spirit))
        }

        return moves
      }
      case Phase.Action: {
        // TODO: Action phase
        if (player.ready) {
          return []
        }

        const numberAction = (getAnimalsType(player.line) == 3) ? 1 : 2

        //Check player number of actions 
        if (numberAction > player.actionMoves.length) {

          /********************************************************
          *****          Take a fragment tile action          *****
          *********************************************************/

          if (!player.actionMoves.includes(ActionMove.TakeFragmentTile)) {//Move already played
            moves.push(takeFragmentTileMove(spirit))
          }

          /********************************************************
          *****  Attract one or more Guardian Animals action  *****
          *********************************************************/

          //Move already played, bonus and ongoing move
          console.log((player.ongoingMove));

          if ((!player.actionMoves.includes(ActionMove.AttractGuardianAnimal) && (player.ongoingMove === null || player.ongoingMove === ActionMove.AttractGuardianAnimal)) || (player.bonus == ActionMove.AttractGuardianAnimal && player.ongoingMove === ActionMove.MoveCircleOfSpirits) || (player.bonus === ActionMove.AttractGuardianAnimal3 && player.ongoingMove === ActionMove.PlantTree)) {
            const suns = getResourcesCount(player.victoryTiles, player.line, player.bonus, player.forest, Resource.Sun)

            console.log("legal move");

            //Move validation
            if (suns >= player.attractedGuardianAnimal) moves.push(validateMove(spirit))

            this.state.reserve.rows.forEach(function (row, index) {
              row.forEach(function (card, indexRow) {

                //Card is drawn
                if (card != null) {

                  //Enough resources ?
                  if (suns >= player.attractedGuardianAnimal + getGuardianAnimalDetails(card).cost!) {
                    moves.push(attractGuardianAnimalMove(spirit, card, { x: indexRow, y: index }))
                  }
                }
              })
            })
          }

          /********************************************************
          *****           Extinguish Fire action              *****
          *********************************************************/

          //Move already played, bonus and ongoing move
          if ((!player.actionMoves.includes(ActionMove.ExtinguishFire) && (player.ongoingMove == null || player.ongoingMove == ActionMove.ExtinguishFire) || ((player.bonus == ActionMove.ExtinguishFire) && player.ongoingMove === ActionMove.MoveCircleOfSpirits) || (player.bonus === ActionMove.ExtinguishFire2 && player.ongoingMove === ActionMove.PlantTree))) {
            //Move validation
            if (getResourcesCount(player.victoryTiles, player.line, player.bonus, player.forest, Resource.Drop) >= player.extinguishedFiresTotal) moves.push(validateMove(player.spirit))
            //Still fires ?
            if (this.state.circle.fire.length > 0) {
              this.state.circle.fire.forEach(function (fire, position) {
                if (fire != null) {
                  //Enough drops ?
                  if (getResourcesCount(player.victoryTiles, player.line, player.bonus, player.forest, Resource.Drop) >= player.extinguishedFiresTotal + fire + 1) {
                    moves.push(extinguishFireMove(spirit, position))
                  }
                }
              })
            }
          }
          /********************************************************
          ***** Move forward on the Circle of Spirits action  *****
          *********************************************************/
          const playerPosition = this.state.circle.position[player.spirit]
          const wind = getResourcesCount(player.victoryTiles, player.line, player.bonus, player.forest, Resource.Wind)
          const playerPositionLimit = playerPosition! + wind
          const playingPlayer = getPlayer(this.state, this.state.currentPlayer!)
          const displayedPlayer = getPlayer(this.state, playingPlayer.playersJumped[0])

          //Take a victory tile move
          if (playingPlayer.bonus === ActionMove.TakeVictoryTile) {
            if (playingPlayer.playersJumped.find(spirit => spirit === playingPlayer.playersJumped[0]) != undefined) {

              displayedPlayer.victoryTiles.forEach(function (tile, _index) {

                moves.push(takeVictoryTileMove(playingPlayer.spirit, playingPlayer.playersJumped[0], tile))
              })
            }
          } else {
            //Move already played, bonus and ongoing move
            if (!player.actionMoves.includes(ActionMove.MoveCircleOfSpirits) && (player.ongoingMove == null || player.ongoingMove == ActionMove.MoveCircleOfSpirits)) {
              circleOfSpiritsRocks.forEach(function (_rock, index) {
                //Rocks available
                if (index > playerPosition! && index <= playerPositionLimit) moves.push(moveCircleOfSpiritsMove(player.spirit, index))
              })
            }
          }

          /********************************************************
          ***** Plant one and only one Protective Tree action *****
          *********************************************************/

          //Move already played, bonus and ongoing move
          if ((!player.actionMoves.includes(ActionMove.PlantTree) || player.bonus == ActionMove.PlantTree) && (player.ongoingMove == null || player.ongoingMove == ActionMove.PlantTree)) {
            //Take One protective tree  
            Object.entries(this.state.dispenser).forEach(function (tree, index) {
              //Enough trees ?
              if (tree != null) {
                //Enough resources ?
                if (getResourcesCount(player.victoryTiles, player.line, player.bonus, player.forest, Resource.Seed) >= getProtectiveTreeDetails(index + 1).cost!) {
                  moves.push(takeProtectiveTreeMove(spirit, index + 1))
                }
              }
            })
            //If player has taken one tree, he can plant it
            if (player.tree != null) {
              player.forest.map(function (row, indexRow) {
                row.forEach(function (_, indexCol) {
                  //Placement is valid ?
                  if (placementIsValid(player.forest, { x: indexRow, y: indexCol })) {
                    moves.push(plantTreeMove(player.spirit, { x: indexRow, y: indexCol }))
                  }
                })
              })
            }
          }

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

  randomize(move: Move): MoveRandomized {
    if (move.type === MoveType.ShuffleDiscard) {
      return randomizeShuffleDiscardMove(this.state, move)
    }
    return move
  }

  /**
   * This is the one and only play where you will update the game's state, depending on the move that has been played.
   *
   * @param move The move that should be applied to current state.
   */
  play(move: MoveRandomized): void {
    switch (move.type) {
      case MoveType.DrawCard:
        return drawCard(this.state, move)
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
      case MoveType.EndTurn:
        return endTurn(this.state, move)
      case MoveType.TakeProtectiveTree:
        return takeProtectiveTree(this.state, move)
      case MoveType.NextPlayer:
        return nextPlayer(this.state, move)
      case MoveType.ReturnGuardianAnimals:
        return returnGuardianAnimals(this.state, move)
      case MoveType.TakeVictoryTile:
        return takeVictoryTile(this.state, move)
      case MoveType.OnibiAttackingPlayers:
        return onibiAttackingPlayers(this.state, move)
      case MoveType.ValidateMove:
        return validate(this.state, move)
      case MoveType.CancelMove:
        return cancel(this.state, move)
      case MoveType.OnibiAttackingSacredTree:
        return onibiAttackingSacredTree(this.state, move)
      case MoveType.DiscardCard:
        return discardCard(this.state, move)
      case MoveType.GivingSacredTree:
        return givingSacredTree(this.state, move)
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
  getAutomaticMoves(): Move[] {
    switch (this.state.phase) {
      case Phase.GuardianAnimals: {
        console.log("phase 1");

        const shufflingPlayer = this.state.players.find(p => p.shuffled)
        if (shufflingPlayer) {
          return [drawCardMove(shufflingPlayer.spirit)]
        }
        if (this.state.players.every(player => player.ready)) {
          return [startPhaseMove(Phase.Action)]
        }
        return []
      }
      case Phase.Action: {
        console.log("phase 2");
        const player = getPlayer(this.state, this.state.currentPlayer!)

        if (this.state.players.every(player => player.ready)) {
          return [startPhaseMove(Phase.EndOfTurn)]
        }

        const moves: Move[] = []

        const numberAction = (getAnimalsType(player.line) === 3) ? 1 : 2
        if (player.ongoingMove === null && player.bonus === null) {
          if (player.ready === false && (numberAction === player.actionMoves.length || getAvailableMoves(player.actionMoves, player.bonus, player.line, this.state.reserve.rows, this.state.circle.fire, this.state.dispenser).length === 0)) {
            moves.push(endTurnMove(player.spirit))
            moves.push(nextPlayerMove())
          }
        }

        return moves
      }
      case Phase.EndOfTurn: {
        console.log("phase 3");
        return [

          //TODO : onibi attack
          onibiAttackingPlayersMove(),

          //TODO : Onibi attack sacred tree
          onibiAttackingSacredTreeMove(),

          //TODO : arrival new guardian animal
          ...this.state.reserve.rows.flatMap((row, indexRow) =>
            Array.from(row.entries()).filter(entry => entry[1] === null).map(entry => fillReserveMove(indexRow, entry[0]))
          ),

          //TODO : player discard animals
          returnGuardianAnimalsMove(),

          //TODO : change first player
          givingSacredTreeMove(),

          //TODO : change state phase
          startPhaseMove(Phase.GuardianAnimals)
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
  getMoveView(move: MoveRandomized): MoveView {
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

