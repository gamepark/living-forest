/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { fragmentLeft, fragmentTop } from '../styles';
import Images from '../images/Images';
import { HTMLAttributes } from 'react';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import Phase from '@gamepark/living-forest/Phase';
import { usePlay, usePlayerId } from '@gamepark/react-client';
import { takeFragmentTileMove } from '@gamepark/living-forest/moves/TakeFragmentTile';

type Props = {
    actionMoves: ActionMove[]
    phase: Phase
} & HTMLAttributes<HTMLDivElement>

export function FragmentTilesStack({ actionMoves, phase, ...props }: Props) {
    const playerId = usePlayerId()
    const play = usePlay()
    const takeFragment = () => { phase === Phase.Action && !actionMoves.includes(ActionMove.TakeFragmentTile) && play(takeFragmentTileMove(playerId)) }

    return <div css={fragment} onClick={takeFragment} {...props}></div>
}

const fragment = css`
position:absolute;
width:10em;
height:10em;
top:${fragmentTop}em;
left:${fragmentLeft}em;
background-image: url(${Images.fragment});
background-size:cover;
background-position:center;
filter: drop-shadow(0 0 0.3em black);
`