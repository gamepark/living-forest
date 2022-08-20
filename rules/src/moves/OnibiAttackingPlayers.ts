import GameState from '../GameState'
import GameView from '../GameView'
import MoveType from './MoveType'
import { getAnimalsResource } from '../material/GuardianAnimalDetails';
import Resource from '../material/Resource';
import GuardianAnimal from '../material/GuardianAnimal';

type OnibiAttackingPlayers = {
  type: MoveType.OnibiAttackingPlayers
}

export default OnibiAttackingPlayers


export function onibiAttackingPlayers(state: GameState | GameView, _move: OnibiAttackingPlayers) {
  state.players.forEach(function (player, _index) {
    if (state.circle.fire.length === getAnimalsResource(player.line, Resource.Drop)) {
      for (var i = 0; i < state.circle.fire.length; i++) {
        player.discard.push(GuardianAnimal.Varan)
      }
    }
  })
}

export function onibiAttackingPlayersMove(): OnibiAttackingPlayers {
  return { type: MoveType.OnibiAttackingPlayers }
}

