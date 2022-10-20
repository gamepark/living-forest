import GameState from '../GameState';
import GameView from '../GameView';
import { getTotalFires } from '../material/Fire';
import GuardianAnimal from '../material/GuardianAnimal';
import Resource from '../material/Resource';
import { getResourcesCount } from '../material/Victory';
import MoveType from './MoveType';

type OnibiAttackingPlayers = {
  type: MoveType.OnibiAttackingPlayers
}

export default OnibiAttackingPlayers

export function onibiAttackingPlayers(state: GameState | GameView, _move: OnibiAttackingPlayers) {
  const firesTotal = getTotalFires(state.circle.fire)
  console.log(firesTotal);

  state.players.forEach(function (player) {
    if (firesTotal >= getResourcesCount(player.victoryTiles, player.line, player.bonus, player.forest, Resource.Drop)) {
      for (var i = 0; i < state.circle.fire.length; i++) {
        if (state.circle.fire[i] != null) player.discard.push(GuardianAnimal.Varan)
      }
    }
  })
}

export function onibiAttackingPlayersMove(): OnibiAttackingPlayers {
  return { type: MoveType.OnibiAttackingPlayers }
}

