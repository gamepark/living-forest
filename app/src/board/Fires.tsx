/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import FireTile from '../material/FireTile';
import { fireHeight, fireWidth, circleOfSpiritsTop, circleOfSpiritsHeight, circleOfSpiritsLeft, circleOfSpiritswidth, panelWidth } from '../styles';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { useAnimation, usePlay } from '@gamepark/react-client';
import ExtinguishFire, { extinguishFireMove } from '@gamepark/living-forest/moves/ExtinguishFire';
import { isAvailableMove } from '@gamepark/living-forest/moves/Move';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import MoveType from '@gamepark/living-forest/moves/MoveType';
import { getResourcesCount } from '@gamepark/living-forest/material/Victory';
import Resource from '@gamepark/living-forest/material/Resource';
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
import VictoryTile from '@gamepark/living-forest/material/VictoryTile';
import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree';
import PlayerView from '@gamepark/living-forest/PlayerView';

type Props = {
    fire: (number | null)[]
    spirit: SpiritOfNature
    actionMoves: ActionMove[]
    ongoingMove: ActionMove | null
    bonus: ActionMove | null
    ready: boolean
    players: PlayerView[]
    line: GuardianAnimal[]
    victoryTiles: VictoryTile[]
    forest: (ProtectiveTree | number | null)[][]
    currentPlayer?: SpiritOfNature
    extinguishedFiresTotal: number
}

export default function Fire({ fire, spirit, actionMoves, ongoingMove, bonus, ready, players, line, victoryTiles, forest, currentPlayer, extinguishedFiresTotal }: Props) {
    const play = usePlay()
    const extinguish = (index: number) => { getResourcesCount(victoryTiles, line, bonus, forest, Resource.Drop) >= extinguishedFiresTotal + fire[index]! + 1 && (isAvailableMove(ActionMove.ExtinguishFire, ongoingMove, bonus, actionMoves, ready) || bonus === ActionMove.ExtinguishFire2) && play(extinguishFireMove(spirit, index)) }

    const animation = useAnimation<ExtinguishFire>(animation => animation.move.type === MoveType.ExtinguishFire)
    const playerIndex = players.findIndex(player => player.spirit === currentPlayer)

    return (
        <>
            {
                fire.map((fire, index) => {

                    return fire != null && <FireTile key={index} fire={fire} css={[firePosition(index), animation && animation.move.position === index && extinguishFireAnimation(index, animation.duration, players.length, playerIndex)]} onClick={() => extinguish(index)} />
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

function extinguishFireAnimation(index: number, duration: number, players: number, spiritPosition: number) {
    const angle = (150 - 60 * index) * Math.PI / 180
    const leftPanel = ((5 * panelWidth - ((players + 1) * panelWidth)) / 2) + (panelWidth * (spiritPosition + 1)) + 15
    const top = index === 0 ? middleFireTop : middleFireTop - Math.sin(angle) * radius
    const leftFire = index === 0 ? middleFireLeft : middleFireLeft - Math.cos(angle) * radius

    const down = 100 - top

    const left = leftPanel - leftFire

    const frames = keyframes`
    80%{
        transform:translateY(${down / 2}em) 
        translateX(${left}em)
        translateZ(10em)
    }
    to{
        transform:translateY(${(down)}em) 
        translateX(${left}em)
    }
    `
    return css`
        animation: ${frames} ${duration}s ease-in-out;
    `
}