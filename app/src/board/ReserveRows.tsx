/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
import { getAnimalsResource, getGuardianAnimalDetails } from '@gamepark/living-forest/material/GuardianAnimalDetails';
import Resource from '@gamepark/living-forest/material/Resource';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import AttractGuardianAnimal, { attractGuardianAnimalMove } from '@gamepark/living-forest/moves/AttractGuardianAnimal';
import { isAvailableMove } from '@gamepark/living-forest/moves/Move';
import MoveType from '@gamepark/living-forest/moves/MoveType';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { useAnimation, usePlay } from '@gamepark/react-client';
import Card from '../material/Card';
import FireTile from '../material/FireTile';
import { fireHeight, fireWidth, reserveFireLeft, reserveFireTop, reserveRowCardHeight, reserveRowCardWith, reserveRowDrawLeft, reserveRowDrawTop } from '../styles';

type Props = {
    reserveRows: (GuardianAnimal | null)[][]
    spirit: SpiritOfNature
    actionMoves: ActionMove[]
    ongoingMove: ActionMove | null
    bonus: ActionMove | null
    ready: boolean
    players: number
    line: GuardianAnimal[]
    attractedGuardianAnimal: GuardianAnimal
}

export default function ReserveRows({ reserveRows, spirit, actionMoves, ongoingMove, bonus, ready, players, line, attractedGuardianAnimal }: Props) {
    const play = usePlay()

    const attract = (guardianAnimal: GuardianAnimal, index: number, indexRow: number) => { (getAnimalsResource(line, Resource.Sun) >= attractedGuardianAnimal + getGuardianAnimalDetails(guardianAnimal).cost) && (!isAvailableMove(ActionMove.AttractGuardianAnimal, ongoingMove, bonus, actionMoves, ready) || isAvailableMove(ActionMove.AttractGuardianAnimal3, ongoingMove, bonus, actionMoves, ready)) && play(attractGuardianAnimalMove(spirit, guardianAnimal, { x: index, y: indexRow })) }
    const animation = useAnimation<AttractGuardianAnimal>(animation => animation.move.type === MoveType.AttractGuardianAnimal)
    console.log(animation);

    return (
        <>
            {
                reserveRows.map((row, indexRow) => {
                    return row.map((guardianAnimal, index) => {
                        if (!guardianAnimal) return <FireTile key={index + indexRow} fire={indexRow + 1} css={fire(index, indexRow)} />
                        console.log(getAnimalsResource(line, Resource.Sun) >= attractedGuardianAnimal + getGuardianAnimalDetails(guardianAnimal).cost);
                        return <Card key={guardianAnimal} css={[cardPosition(index, indexRow), animation && attractGuardianAnimalAnimation(animation.duration, players)]} guardianAnimal={guardianAnimal} onClick={() => { attract(guardianAnimal, index, indexRow) }} />
                    })
                })
            }
        </>
    );
}

function cardPosition(index: number, indexStack: number) {
    return css`
    height:${reserveRowCardHeight}em;
    width:${reserveRowCardWith}em;
    top:${reserveRowDrawTop - index * 0.1 + indexStack * 23}em;
    left:${reserveRowDrawLeft + index * 16}em;
    `
}

function fire(index: number, indexStack: number) {
    return css`
    height:${fireHeight}em;
    width:${fireWidth}em;
    top:${reserveFireTop + indexStack * 22}em;
    left:${reserveFireLeft + index * 16}em;
    `
}

function attractGuardianAnimalAnimation(duration: number, players: number) {
    const down = 100
    const left = 15 * players

    const frames = keyframes`
    from{
        transform:translateY(0em) 
        translateX(0rem) 
    }
    100%{
        transform:translateY(${(down)}em) 
        translateX(${0 - left}rem)

        
    }
    `
    return css`
        animation: ${frames} ${duration}s ease-in-out;
    `
}