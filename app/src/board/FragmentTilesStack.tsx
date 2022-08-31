/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { fragmentLeft, fragmentTop } from '../styles';
import Images from '../images/Images';
import { HTMLAttributes } from 'react';

type Props = {
    onClick: () => void
} & HTMLAttributes<HTMLDivElement>

export function FragmentTilesStack({ onClick, ...props }: Props) {
    return <div css={fragment} onClick={onClick} {...props}></div>
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