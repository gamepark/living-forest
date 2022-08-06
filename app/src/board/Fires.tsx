/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FireTile from '../material/FireTile';
import { fireHeight, fireLeft, fireTop, fireWidth } from '../styles';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { usePlay } from '@gamepark/react-client';
import { extinguishFireMove } from '@gamepark/living-forest/moves/ExtinguishFire';

type Props = {
    fire: (number | null)[]
    spirit: SpiritOfNature
}

export default function Fire({ fire, spirit }: Props) {
    const play = usePlay()

    return (
        <>
            {
                fire.map((fire, index) => {
                    if (fire != null) {
                        return <FireTile key={index} fire={fire} css={firePosition(index, index)} onClick={() => play(extinguishFireMove(spirit, index))} />
                    }
                    return
                })
            }
        </>
    );
}

function firePosition(index: number, indexStack: number) {
    return css`
    height:${fireHeight}em;
    width:${fireWidth}em;
    top:${fireTop - index * 0.1 + indexStack * 23}em;
    left:${fireLeft - index * 0.1}em;
    `
}