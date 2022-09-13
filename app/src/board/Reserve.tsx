/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import GameLocalView from '../GameLocalView';
import { reserveLeft, reserveTop } from '../styles';
import ReserveRows from './ReserveRows';
import ReserveStacks from './ReserveStacks';

type Props = {
    game: GameLocalView
    spirit: SpiritOfNature
    actionMoves: ActionMove[]
    ongoingMove: ActionMove | null
    bonus: ActionMove | null
    ready: boolean
}

export default function Reserve({ game, spirit, actionMoves, ongoingMove, bonus, ready }: Props) {
    return (
        <div css={reserve}>
            <ReserveRows reserveRows={game.reserve.rows} spirit={spirit} actionMoves={actionMoves} ongoingMove={ongoingMove} bonus={bonus} ready={ready} />
            <ReserveStacks reserveStacks={game.reserve.stacks} />
        </div>
    );
}

const reserve = css`
position:absolute;
top:${reserveTop}em;;
left:${reserveLeft}em;;
`