/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Card from '../material/Card';
import { reserveCardHeight, reserveCardWith, reserveStacksLeft, reserveStacksTop } from "../styles";

type Props = {
    reserveStacks: number[]
}

export default function ReserveStacks({ reserveStacks }: Props) {
    return (
        <>
            {
                reserveStacks.map((stack, indexStack) => {
                    return [...Array(stack)].map((_, index) => {
                        return <Card key={index} css={cardPosition(index, indexStack)} />
                    })
                })
            }
        </>
    );

}

function cardPosition(index: number, indexStack: number) {
    return css`
    height:${reserveCardHeight}em;
    width:${reserveCardWith}em;
    top:${reserveStacksTop - index * 0.1 + indexStack * 23}em;
    left:${reserveStacksLeft - index * 0.1}em;
    `
}
