/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import MoveType from '@gamepark/living-forest/moves/MoveType';
import TakeFragmentTile, { takeFragmentTileMove } from '@gamepark/living-forest/moves/TakeFragmentTile';
import Phase from '@gamepark/living-forest/Phase';
import { useAnimation, usePlay, usePlayerId } from '@gamepark/react-client';
import { HTMLAttributes } from 'react';
import Images from '../images/Images';
import { fragmentLeft, fragmentTop } from '../styles';

type Props = {
    actionMoves: ActionMove[]
    phase: Phase
    players: number
} & HTMLAttributes<HTMLDivElement>

export function FragmentTilesStack({ actionMoves, phase, players, ...props }: Props) {
    const playerId = usePlayerId()
    const play = usePlay()
    const takeFragment = () => { phase === Phase.Action && !actionMoves.includes(ActionMove.TakeFragmentTile) && play(takeFragmentTileMove(playerId)) }
    const animation = useAnimation<TakeFragmentTile>(animation => animation.move.type === MoveType.TakeFragmentTile)


    return <>
        <div css={[fragment, fragmentShadow]}></div>
        <div css={[fragment, animation && takeFragmentTileAnimation(animation.duration, players)]} onClick={takeFragment} {...props}></div>
    </>
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
`
const fragmentShadow = css`
filter: drop-shadow(0 0 0.3em black);
`
function takeFragmentTileAnimation(duration: number, players: number) {
    const down = 100 - fragmentTop
    const left = 15 * players

    const frames = keyframes`
    to{
        transform:translateY(${(down)}em) 
        translateX(${0 - left}rem)
    }
    `
    return css`
        animation: ${frames} ${duration}s ease-in-out;
    `
}