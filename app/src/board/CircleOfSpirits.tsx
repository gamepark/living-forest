/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { circleOfSpiritsHeight, circleOfSpiritsLeft, circleOfSpiritsTop, circleOfSpiritswidth, rockHeight, rockLeft, rockTop, rockWith } from '../styles';
import Images from '../images/Images';
import Fires from './Fires';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import CircleOfSpirits from '@gamepark/living-forest/material/CircleOfSpirits';
import { circleOfSpiritsRocks } from '@gamepark/living-forest/material/CircleOfSpirits';

type Props = {
    circleOfSpirits: CircleOfSpirits
    spirit: SpiritOfNature
}

export default function CircleOfSpiritsBoard({ circleOfSpirits, spirit }: Props) {

    return (
        <div css={circle}>
            {circleOfSpiritsRocks.map((_rock, index) => {
                return Object.entries(circleOfSpirits.position).map(
                    ([spirit, _rock]) => {
                        if (index == circleOfSpirits.position[spirit]) {
                            console.log(index + " - " + circleOfSpirits.position[spirit])
                            return <div key={index} css={rockPosition(index)}></div>

                        }
                        return
                    }

                );

            })}
            <Fires fire={circleOfSpirits.fire} spirit={spirit} />
        </div>
    );
}

const circle = css`
position:absolute;
width:${circleOfSpiritswidth}em;
height:${circleOfSpiritsHeight}em;
top:${circleOfSpiritsTop}em;
left:${circleOfSpiritsLeft}em;
background-image: url(${Images.circleOfSpirits});
background-size:cover;
background-position:center;
filter: drop-shadow(0 0 0.3em black);
`

function rockPosition(index: number) {
    return css`
    position:absolute;
    width:${rockWith}em;
    height:${rockHeight}em;
    top:${rockTop}em;
    left:${rockLeft}em;
    transform-origin: center 24.5em;
    background-color: #000;
    border-radius:2em;
    transform: rotate(${index * 30 + 14}deg);
    `
}