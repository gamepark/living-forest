import DrawCard, {DrawCardView} from './DrawCard'
import Move from './Move'
import ShuffleDiscard, {ShuffleDiscardView} from './ShuffleDiscard'
import FillReserve from './FillReserve';
import { FillReserveView } from './FillReserve';


/**
 * A "MoveView" is the combination of all the types of move views that exists in you game.
 * It usually derives from "Move". You can exclude some Move using: = Exclude<Move, MoveToExclude | OtherMoveToExclude> | MoveToInclude...
 */
type MoveView = Exclude<Move, DrawCard | ShuffleDiscard | FillReserve> | DrawCardView | ShuffleDiscardView | FillReserveView

export default MoveView