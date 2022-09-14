/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CircleOfSpirits, { circleOfSpiritsRocks } from '@gamepark/living-forest/material/CircleOfSpirits';
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
import { getAnimalsResource } from '@gamepark/living-forest/material/GuardianAnimalDetails';
import Resource from '@gamepark/living-forest/material/Resource';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import { isAvailableMove } from '@gamepark/living-forest/moves/Move';
import MoveCircleOfSpirits, { getMoveCircleOfSpiritsDistance, moveCircleOfSpiritsMove } from '@gamepark/living-forest/moves/MoveCircleOfSpirits';
import MoveType from '@gamepark/living-forest/moves/MoveType';
import SpiritOfNature, { spirits } from '@gamepark/living-forest/SpiritOfNature';
import { useAnimation, usePlay, usePlayerId } from '@gamepark/react-client';
import Images from '../images/Images';
import { circleOfSpiritsHeight, circleOfSpiritsLeft, circleOfSpiritsTop, circleOfSpiritswidth, rockHeight, rockLeft, rockTop, rockWith, spiritCircleHeight, spiritCircleWidth } from '../styles';
import Fires from './Fires';

type Props = {
    circleOfSpirits: CircleOfSpirits
    actionMoves: ActionMove[]
    ongoingMove: ActionMove | null
    bonus: ActionMove | null
    ready: boolean
    line: GuardianAnimal[]
    position: Partial<Record<SpiritOfNature, number>>
}

export default function CircleOfSpiritsBoard({ circleOfSpirits, actionMoves, ongoingMove, bonus, ready, line, position }: Props) {
    const animation = useAnimation<MoveCircleOfSpirits>(animation => animation.move.type === MoveType.MoveCircleOfSpirits)
    const play = usePlay()
    const playerId = usePlayerId()
    const playerPosition = position[playerId]
    const wind = getAnimalsResource(line, Resource.Wind)
    const playerPositionLimit = playerPosition! + wind
    const move = (index: number) => { index > playerPosition! && index <= playerPositionLimit && isAvailableMove(ActionMove.MoveCircleOfSpirits, ongoingMove, bonus, actionMoves, ready) && play(moveCircleOfSpiritsMove(playerId, index)) }


    return (
        <>
            <div css={circle}>
                {circleOfSpiritsRocks.map((_, index) => {
                    const spirit = spirits.find(spirit => {
                        const position = animation?.move.spirit === spirit ? animation.move.coordinate : index
                        return circleOfSpirits.position[spirit] === position
                    })

                    if (spirit) {
                        return null
                    } else {
                        return <div key={index} onClick={() => move(index)}
                            css={rockPosition(index)} >
                        </div>
                    }
                })}
                {spirits.map(spirit => {
                    var position = circleOfSpirits.position[spirit]!
                    if (animation?.move.spirit === spirit) {
                        const distance = getMoveCircleOfSpiritsDistance(animation.move, position, 0, Object.keys(circleOfSpirits.position).length)
                        console.log(distance);

                        position = position + distance
                    }
                    if (position === undefined) return null
                    return <div key={spirit} css={[spiritPosition(position), animation && moveCircleOfSpiritCss(animation.duration)]}>
                        <div css={[spiritCss(spirit, position), animation && moveCircleOfSpiritCss(animation.duration)]}></div>
                    </div>
                })}
            </div>
            <Fires fire={circleOfSpirits.fire} spirit={playerId} actionMoves={actionMoves} ongoingMove={ongoingMove} bonus={bonus} ready={ready} />
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

function moveCircleOfSpiritCss(duration: number) {
    return css`
        transition:transform ${duration}s ease-in-out;
    `
}