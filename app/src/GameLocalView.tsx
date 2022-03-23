import GameView from '@gamepark/living-forest/GameView'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'

type GameLocalView = GameView & {
  displayedPlayer?: SpiritOfNature
}

export default GameLocalView