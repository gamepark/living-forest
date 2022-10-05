/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import MoveType from '@gamepark/living-forest/moves/MoveType';
import TakeFragmentTile, { takeFragmentTileMove } from '@gamepark/living-forest/moves/TakeFragmentTile';
import Phase from '@gamepark/living-forest/Phase';
import PlayerView from '@gamepark/living-forest/PlayerView';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { useAnimation, usePlay, usePlayerId } from '@gamepark/react-client';
import { HTMLAttributes } from 'react';
import Images from '../images/Images';
import { fragmentLeft, fragmentTop, panelWidth } from '../styles';

type Props = {
    actionMoves: ActionMove[]
    phase: Phase
    players: PlayerView[]
    currentPlayer?: SpiritOfNature
} & HTMLAttributes<HTMLDivElement>

export function FragmentTilesStack({ actionMoves, phase, players, currentPlayer, ...props }: Props) {
    const playerId = usePlayerId()
    const play = usePlay()
    const takeFragment = () => { phase === Phase.Action && !actionMoves.includes(ActionMove.TakeFragmentTile) && play(takeFragmentTileMove(playerId)) }
    const animation = useAnimation<TakeFragmentTile>(animation => animation.move.type === MoveType.TakeFragmentTile)
    const playerIndex = players.findIndex(player => player.spirit === currentPlayer)

    return <>
        <div css={[fragment, fragmentShadow]}></div>
        <div css={[fragment, animation && takeFragmentTileAnimation(animation.duration, players.length, playerIndex)]} onClick={takeFragment} {...props}></div>
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
function takeFragmentTileAnimation(duration: number, players: number, spiritPosition: number) {
    const leftPanel = ((5 * panelWidth - ((players + 1) * panelWidth)) / 2) + (panelWidth * (spiritPosition + 1)) + 15
    const down = 100 - fragmentTop
    const leftFragment = fragmentLeft

    const left = leftPanel - leftFragment

    const frames = keyframes`
    80%{
        transform:translateY(${down / 2}em) 
        translateX(${left}em)
        translateZ(10em)
    }
    to{
        transform:translateY(${(down)}em) 
        translateX(${left}em)
    }
    `
    return css`
        animation: ${frames} ${duration}s ease-in-out;
    `
}