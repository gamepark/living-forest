/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { circleOfSpiritsHeight, circleOfSpiritsLeft, circleOfSpiritsTop, circleOfSpiritswidth, rockHeight, rockLeft, rockTop, rockWith, spiritCircleHeight, spiritCircleWidth } from '../styles';
import Images from '../images/Images';
import Fires from './Fires';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import CircleOfSpirits from '@gamepark/living-forest/material/CircleOfSpirits';
import { circleOfSpiritsRocks } from '@gamepark/living-forest/material/CircleOfSpirits';
import { usePlay } from '@gamepark/react-client';
import { moveCircleOfSpiritsMove } from '@gamepark/living-forest/moves/MoveCircleOfSpirits';

type Props = {
    circleOfSpirits: CircleOfSpirits
    spirit: SpiritOfNature
}

export default function CircleOfSpiritsBoard({ circleOfSpirits, spirit }: Props) {
    const play = usePlay()
    return (
        <>
            <div css={circle}>
                {circleOfSpiritsRocks.map((_rock, index) => {
                    return Object.entries(circleOfSpirits.position).map(
                        ([spiritCircle, position]) => {
                            if (index == circleOfSpirits.position[spiritCircle]) {
                                return <div key={index + position} css={spiritPosition(index)}>
                                    <div css={spiritCss(parseInt(spiritCircle), index)}></div>
                                </div>
                            } else {
                                return <div key={index + position} css={rockPosition(index)} onClick={() => play(moveCircleOfSpiritsMove(spirit, index))}>
                                </div>
                            }
                            return
                        }

                    );

                })}
            </div>
            <Fires fire={circleOfSpirits.fire} spirit={spirit} />
        </>
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
    border-radius:2em;
    transform: rotate(${index * 30 + 14}deg);
    `
}

const spiritCircle: Record<SpiritOfNature, string> = {
    [SpiritOfNature.Autumn]: Images.autumnSpiritCircle,
    [SpiritOfNature.Summer]: Images.summerSpiritCircle,
    [SpiritOfNature.Spring]: Images.springSpiritCircle,
    [SpiritOfNature.Winter]: Images.winterSpiritCircle,
}

function spiritPosition(index: number) {
    return css`
    position:absolute;
    width:${rockWith}em;
    height:${rockHeight}em;
    top:-0.5em;
    left:27em;
    transform-origin: center 27.5em;
    transform: rotate(${index * 30 + 17.5}deg);
    `
}

function spiritCss(spirit: SpiritOfNature, index: number) {
    return css`
        position:absolute;
        width:${spiritCircleWidth}em;
        height:${spiritCircleHeight}em;
        background-image:url(${spiritCircle[spirit]});
        background-size:cover;
        background-position:center;
        transform: rotate(-${index * 30 + 16}deg);
        filter: drop-shadow(0 0 0.1em black);
    `
}