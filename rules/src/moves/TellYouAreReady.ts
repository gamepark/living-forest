import MoveType from './MoveType';
import SpiritOfNature from '../SpiritOfNature';
import GameState from '../GameState';
import Move from './Move';
import GameView from '../GameView';
import { getPlayer } from '../PlayerView';



export default interface TellYouAreReady {
    type: typeof MoveType.TellYouAreReady
    spirit: SpiritOfNature
}

export function tellYouAreReady(state: GameState | GameView, move: TellYouAreReady) {
    const player = getPlayer(state, move.spirit)
    if (!player) return console.error('Cannot apply', move, 'on', state, ': could not find player')
    player.ready = true
}

export function tellYouAreReadyMove(spirit: SpiritOfNature): TellYouAreReady {
    return { type: MoveType.TellYouAreReady, spirit }
}

export function isTellYouAreReady(move: Move): move is TellYouAreReady {
    return move.type === MoveType.TellYouAreReady
}