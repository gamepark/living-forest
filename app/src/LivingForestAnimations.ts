
import { getAnimalsResource } from "@gamepark/living-forest/material/GuardianAnimalDetails";
import Resource from "@gamepark/living-forest/material/Resource";
import { getMoveCircleOfSpiritsDistance } from "@gamepark/living-forest/moves/MoveCircleOfSpirits";
import MoveType from "@gamepark/living-forest/moves/MoveType";
import MoveView from "@gamepark/living-forest/moves/MoveView";
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature";
import { Animations } from "@gamepark/react-client";
import AnimationContext from "@gamepark/react-client/dist/animations/AnimationContext";

import GameLocalView from "./GameLocalView";

export default class LivingForestAnimations extends Animations<GameLocalView, MoveView, SpiritOfNature> {
  getPreDuration(move: MoveView, { state }: AnimationContext<GameLocalView, MoveView, SpiritOfNature>) {
    switch (move.type) {
      case MoveType.DrawCard:
        return state.displayedPlayer === move.spirit ? 0.5 : 0
      case MoveType.MoveCircleOfSpirits:
        const player = state.players.find(player => player.spirit === move.spirit)!
        const distance = getMoveCircleOfSpiritsDistance(move, state.circle.position[move.spirit]!, getAnimalsResource(player.line, Resource.Wind), state.players.length)
        return !state.displayedPlayer ? 0.2 + distance * 0.05 : 0
      case MoveType.TakeFragmentTile:
        return !state.displayedPlayer ? 0.9 : 0
      case MoveType.AttractGuardianAnimal:
        return !state.displayedPlayer ? 0.9 : 0
      case MoveType.TakeProtectiveTree:
        return !state.displayedPlayer ? 0.9 : 0
      case MoveType.PlantTree:
        return !state.displayedPlayer ? 0.9 : 0
      case MoveType.ExtinguishFire:
        return !state.displayedPlayer ? 0.9 : 0
      default:
        return 0
    }

  }
}