/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { fragmentLeft, fragmentTop } from '../styles';
import Images from '../images/Images';
import { HTMLAttributes } from 'react';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';

type Props = {
    actionMoves: ActionMove[]
    onClick: () => void
} & HTMLAttributes<HTMLDivElement>

export function FragmentTilesStack({ onClick, actionMoves, ...props }: Props) {
    if (!actionMoves.includes(ActionMove.TakeFragmentTile)) return <div css={fragment} onClick={onClick} {...props}></div>
    return null
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