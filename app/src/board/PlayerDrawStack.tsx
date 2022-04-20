/** @jsxImportSource @emotion/react */
import Card from '../material/Card';
import { css } from '@emotion/react';
import { playDrawLeft, playDrawTop } from '../styles';

type Props = {
    stack: number
    onClick: () => void
}

export default function PlayerDrawStack({ stack, onClick }: Props) {
    console.log(stack);
    return (
        <>
            {
                [...Array(stack)].map((_, index) => {
                    return <Card css={cardPosition(index)} onClick={onClick} />
                })
            }
        </>
    );
}

function cardPosition(index: number) {
    return css`
    top:${playDrawTop + index * 0.1}em;
    left:${playDrawLeft + index * 0.1}em;
    `
}