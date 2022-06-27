
import Move from './Move'
import ShuffleDiscard from './ShuffleDiscard'
import { ShuffleDiscardRandomized } from './ShuffleDiscard';


type MoveRandomized = Exclude<Move, ShuffleDiscard> | ShuffleDiscardRandomized

export default MoveRandomized