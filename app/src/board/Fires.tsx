/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FireTile from '../material/FireTile';
import { fireHeight, fireLeft, fireTop, fireWith } from '../styles';

type Props = {
    fire: number[]
}

export default function Fire({fire}:Props) {
    return (
        <>
            {
            fire.map((fireNum, indexFire) => {
                return [...Array(fireNum)].map((_, index) => {
                    return <FireTile key={index}  fire= {fireNum} css={firePosition(index, indexFire)} />
                })
            })
            }
        </>
    );
}

function firePosition(index: number, indexStack: number) {
    return css`
    height:${fireHeight}em;
    width:${fireWith}em;
    top:${fireTop - index * 0.1 + indexStack * 23}em;
    left:${fireLeft - index * 0.1}em;
    `
}