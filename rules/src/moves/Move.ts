import DrawCard from './DrawCard'
import ShuffleDiscard from './ShuffleDiscard'
import ShuffleToDraw from './ShuffleToDraw'

/**
 * A "Move" is the combination of all the types of moves that exists in you game
 */
type Move = DrawCard | ShuffleToDraw | ShuffleDiscard

export default Move