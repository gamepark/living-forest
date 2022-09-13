/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import { attractGuardianAnimalMove } from '@gamepark/living-forest/moves/AttractGuardianAnimal';
import { isAvailableMove } from '@gamepark/living-forest/moves/Move';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { usePlay } from '@gamepark/react-client';
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
}

export default function ReserveRows({ reserveRows, spirit, actionMoves, ongoingMove, bonus, ready }: Props) {
    const play = usePlay()
    const attract = (guardianAnimal: GuardianAnimal, index: number, indexRow: number) => { isAvailableMove(ActionMove.AttractGuardianAnimal, ongoingMove, bonus, actionMoves, ready) && isAvailableMove(ActionMove.AttractGuardianAnimal3, ongoingMove, bonus, actionMoves, ready) && play(attractGuardianAnimalMove(spirit, guardianAnimal, { x: index, y: indexRow })) }

    return (
        <>
            {
                reserveRows.map((row, indexRow) => {
                    return row.map((guardianAnimal, index) => {
                        if (!guardianAnimal) return <FireTile key={index + indexRow} fire={indexRow + 1} css={fire(index, indexRow)} />
                        return <Card key={guardianAnimal} css={cardPosition(index, indexRow)} guardianAnimal={guardianAnimal} onClick={() => { attract(guardianAnimal, index, indexRow) }} />
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