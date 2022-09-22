
import { getAnimalsResource } from "@gamepark/living-forest/material/GuardianAnimalDetails";
import Resource from "@gamepark/living-forest/material/Resource";
import { getMoveCircleOfSpiritsDistance } from "@gamepark/living-forest/moves/MoveCircleOfSpirits";
import MoveType from "@gamepark/living-forest/moves/MoveType";
import MoveView from "@gamepark/living-forest/moves/MoveView";
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature";
import { Animations } from "@gamepark/react-client";

import GameLocalView from "./GameLocalView";

const LivingForestAnimations: Animations<GameLocalView, MoveView, SpiritOfNature> = {
  getAnimationDuration(move: MoveView, { state }) {
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
      default:
        return 0
    }

  }
}

export default LivingForestAnimations