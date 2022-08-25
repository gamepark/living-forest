/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FireTile from '../material/FireTile';
import { fireHeight, fireWidth, circleOfSpiritsTop, circleOfSpiritsHeight, circleOfSpiritsLeft, circleOfSpiritswidth } from '../styles';
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
                        return <FireTile key={index} fire={fire} css={firePosition(index)} onClick={() => play(extinguishFireMove(spirit, index))} />
                    }
                    return
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