/** @jsxImportSource @emotion/react */
import GameLocalView from '../GameLocalView';
import ReserveRows from './ReserveRows';
import ReserveStacks from './ReserveStacks';
import { css } from '@emotion/react';
import { reserveLeft, reserveTop } from '../styles';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';

type Props = {
    game: GameLocalView
    spirit: SpiritOfNature
}

export default function Reserve({ game, spirit }: Props) {
    return (
        <div css={reserve}>
            <ReserveRows reserveRows={game.reserve.rows} spirit={spirit} />
            <ReserveStacks reserveStacks={game.reserve.stacks} />
        </div>
    );
}

const reserve = css`
position:absolute;
top:${reserveTop}em;;
left:${reserveLeft}em;;
`