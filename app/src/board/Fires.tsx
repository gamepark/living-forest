/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import FireTile from '../material/FireTile';
import { fireHeight, fireWidth, circleOfSpiritsTop, circleOfSpiritsHeight, circleOfSpiritsLeft, circleOfSpiritswidth } from '../styles';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { useAnimation, usePlay } from '@gamepark/react-client';
import ExtinguishFire, { extinguishFireMove } from '@gamepark/living-forest/moves/ExtinguishFire';
import { isAvailableMove } from '@gamepark/living-forest/moves/Move';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import MoveType from '@gamepark/living-forest/moves/MoveType';
import { getResourcesCount } from '@gamepark/living-forest/material/Victory';
import Resource from '@gamepark/living-forest/material/Resource';
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
import VictoryTile from '@gamepark/living-forest/material/VictoryTile';
import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree';

type Props = {
    fire: (number | null)[]
    spirit: SpiritOfNature
    actionMoves: ActionMove[]
    ongoingMove: ActionMove | null
    bonus: ActionMove | null
    ready: boolean
    players: number
    line: GuardianAnimal[]
    victoryTiles: VictoryTile[]
    forest: (ProtectiveTree | number | null)[][]
}

export default function Fire({ fire, spirit, actionMoves, ongoingMove, bonus, ready, players, line, victoryTiles, forest }: Props) {
    const play = usePlay()
    const extinguish = (index: number) => { getResourcesCount(victoryTiles, line, bonus, forest, Resource.Drop) && (isAvailableMove(ActionMove.AttractGuardianAnimal, ongoingMove, bonus, actionMoves, ready) || isAvailableMove(ActionMove.AttractGuardianAnimal3, ongoingMove, bonus, actionMoves, ready)) && play(extinguishFireMove(spirit, index)) }
    const animation = useAnimation<ExtinguishFire>(animation => animation.move.type === MoveType.ExtinguishFire)

    return (
        <>
            {
                fire.map((fire, index) => {
                    return fire != null && <FireTile key={index} fire={fire} css={[firePosition(index), animation && extinguishFireAnimation(animation.duration, players)]} onClick={() => extinguish(index)} />
                })
            }
        </>
    );
}

const middleFireTop = circleOfSpiritsTop + circleOfSpiritsHeight / 2 - fireHeight / 2 - 2
const middleFireLeft = circleOfSpiritsLeft + circleOfSpiritswidth / 2 - fireWidth / 2 - 2
const radius = 10

function firePosition(index: number) {
    const angle = (150 - 60 * index) * Math.PI / 180
    return css`
    height:${fireHeight}em;
    width:${fireWidth}em;
    top:${index === 0 ? middleFireTop : middleFireTop - Math.sin(angle) * radius}em;
    left:${index === 0 ? middleFireLeft : middleFireLeft - Math.cos(angle) * radius}em;
    `
}

function extinguishFireAnimation(duration: number, _players: number) {
    const down = 100
    // const left = 15 * players

    const frames = keyframes`
    from{
        transform:translateY(0em) 
    }
    100%{
        transform:translateY(${(down)}em) 
    }
    `
    return css`
        animation: ${frames} ${duration}s ease-in-out;
    `
}