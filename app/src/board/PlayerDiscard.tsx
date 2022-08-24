/** @jsxImportSource @emotion/react */
import Card from '../material/Card';
import { discardLeft, discardTop } from '../styles';
import { css } from '@emotion/react';

import PlayerView from "@gamepark/living-forest/PlayerView";

type Props = {
    discard: number
    player: PlayerView
}


export default function PlayerDiscard({ discard }: Props) {
    return (
        <>
            {
                [...Array(discard)].map((_, index) => {
                    return <Card key={index} css={cardPosition(index)} />
                })
            }
        </>
    );
}

function cardPosition(index: number) {
    return css`
    top:${discardTop + index * 0.1}em;
    left:${discardLeft + index * 0.1}em;
    `
}
