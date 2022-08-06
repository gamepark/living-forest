/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
import { fireHeight, fireWidth, reserveFireLeft, reserveFireTop, reserveRowCardHeight, reserveRowCardWith, reserveRowDrawLeft, reserveRowDrawTop } from '../styles';
import Card from '../material/Card';
import { usePlay } from '@gamepark/react-client';
import { attractGuardianAnimalMove } from '@gamepark/living-forest/moves/AttractGuardianAnimal';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import FireTile from '../material/FireTile';

type Props = {
    reserveRows: (GuardianAnimal | null)[][]
    spirit: SpiritOfNature
}

export default function ReserveRows({ reserveRows, spirit }: Props) {
    const play = usePlay()


    return (
        <>
            {
                reserveRows.map((row, indexRow) => {

                    return row.map((guardianAnimal, index) => {
                        if (!guardianAnimal) return <FireTile key={index + indexRow} fire={indexRow + 1} css={fire(index, indexRow)} />
                        return <Card key={index + indexRow} css={cardPosition(index, indexRow)} guardianAnimal={guardianAnimal} onClick={() => { play(attractGuardianAnimalMove(spirit, guardianAnimal, { x: index, y: indexRow })) }} />
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