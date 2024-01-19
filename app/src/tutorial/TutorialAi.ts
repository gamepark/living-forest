import { LivingForestRules } from "@gamepark/living-forest/LivingForestRules"
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature"
import { LocationType } from "@gamepark/living-forest/material/LocationType"
import { MaterialType } from "@gamepark/living-forest/material/MaterialType"
// import { Memory } from "@gamepark/living-forest/rules/Memory"
import { GameAI } from "@gamepark/react-game"
import { MaterialGame, MaterialMove } from "@gamepark/rules-api"

// const TICKET_WEIGHT = 1
type Path = { moves: MaterialMove<SpiritOfNature, MaterialType, LocationType>[], score: number }

export const ai: GameAI<MaterialGame<SpiritOfNature, MaterialType, LocationType>, MaterialMove<SpiritOfNature, MaterialType, LocationType>, SpiritOfNature>
    = (game: MaterialGame<SpiritOfNature, MaterialType, LocationType>, bot: SpiritOfNature): Promise<MaterialMove[]> => {
        const rules = new LivingForestRules(game)
        if (rules.getLegalMoves(bot).length === 1) return Promise.resolve(rules.getLegalMoves(bot))

        const bestPath = computeBestPath(game, bot)

        return Promise.resolve(bestPath.moves)
    }

const computeBestPath = (_game: MaterialGame, _bot: SpiritOfNature, path: MaterialMove[] = [], _iteration: number = 0): Path => {

    // if (legalMoves.length === 0 || iteration >= 4) {
    //   const botScore = rules.getScore(bot)!
    //   const ticketsPotential = rules.remind(Memory.LastAction) ? 0 : countPlayerTickets(rules, bot) * TICKET_WEIGHT
    return {
        moves: path,
        score: 10
    }

}