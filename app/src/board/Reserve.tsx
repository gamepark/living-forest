/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import GameLocalView from '../GameLocalView';
import { reserveLeft, reserveTop } from '../styles';
import ReserveRows from './ReserveRows';
import ReserveStacks from './ReserveStacks';

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