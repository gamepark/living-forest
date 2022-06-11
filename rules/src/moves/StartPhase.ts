import MoveType from './MoveType';
import Phase from '../Phase';
import GameState from '../GameState';
import GameView from '../GameView';

type StartPhase = { type: MoveType.StartPhase, phase: Phase }

export default StartPhase

export function startPhase(state: GameState | GameView, move: StartPhase) {
    state.phase = move.phase
    state.players.forEach(player => player.ready = false)
}

export const startPhaseMove = (phase: Phase): StartPhase => ({
    type: MoveType.StartPhase, phase
})