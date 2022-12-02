/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import Fire from '@gamepark/living-forest/material/Fire';
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
import { getGuardianAnimalDetails } from '@gamepark/living-forest/material/GuardianAnimalDetails';
import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree';
import Resource from '@gamepark/living-forest/material/Resource';
import { getResourcesCount } from '@gamepark/living-forest/material/Victory';
import VictoryTile from '@gamepark/living-forest/material/VictoryTile';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import AttractGuardianAnimal, { attractGuardianAnimalMove } from '@gamepark/living-forest/moves/AttractGuardianAnimal';
import FillReserve from '@gamepark/living-forest/moves/FillReserve';
import { isAvailableMove } from '@gamepark/living-forest/moves/Move';
import MoveType from '@gamepark/living-forest/moves/MoveType';
import OnibiAttackingSacredTree, { nextFireEmpty } from '@gamepark/living-forest/moves/OnibiAttackingSacredTree';
import Phase from '@gamepark/living-forest/Phase';
import PlayerView from '@gamepark/living-forest/PlayerView';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { useAnimation, usePlay } from '@gamepark/react-client';
import Card from '../material/Card';
import FireTile from '../material/FireTile';
import { circleOfSpiritsHeight, circleOfSpiritsLeft, circleOfSpiritsTop, circleOfSpiritswidth, fireHeight, fireWidth, panelWidth, reserveFireLeft, reserveFireTop, reserveRowCardHeight, reserveRowCardWith, reserveRowDrawLeft, reserveRowDrawTop, reserveStacksLeft, reserveStacksTop } from '../styles';

type Props = {
    reserveRows: (GuardianAnimal | null)[][]
    spirit: SpiritOfNature
    actionMoves: ActionMove[]
    ongoingMove: ActionMove | null
    bonus: ActionMove | null
    ready: boolean
    players: PlayerView[]
    line: GuardianAnimal[]
    attractedGuardianAnimal: GuardianAnimal
    victoryTiles: VictoryTile[]
    forest: (ProtectiveTree | number | null)[][]
    currentPlayer?: SpiritOfNature
    phase: Phase
    fires: (Fire | null)[]
}

export default function ReserveRows({ reserveRows, spirit, actionMoves, ongoingMove, bonus, ready, players, line, attractedGuardianAnimal, victoryTiles, forest, currentPlayer, phase, fires }: Props) {
    const play = usePlay()
    const attract = (guardianAnimal: GuardianAnimal, index: number, indexRow: number) => { (getResourcesCount(victoryTiles, line, bonus, forest, Resource.Sun) >= attractedGuardianAnimal + getGuardianAnimalDetails(guardianAnimal).cost) && (isAvailableMove(ActionMove.AttractGuardianAnimal, ongoingMove, bonus, actionMoves, ready) || bonus === ActionMove.AttractGuardianAnimal3) && play(attractGuardianAnimalMove(spirit, guardianAnimal, { x: index, y: indexRow })) }

    const animation = useAnimation<AttractGuardianAnimal>(animation => animation.move.type === MoveType.AttractGuardianAnimal)
    const animationOnibi = useAnimation<OnibiAttackingSacredTree>(animation => animation.move.type === MoveType.OnibiAttackingSacredTree)
    const animationFill = useAnimation<FillReserve>(animation => animation.move.type === MoveType.FillReserve)

    const playerIndex = players.findIndex(player => player.spirit === currentPlayer)

    return (
        <>
            {
                reserveRows.map((row, indexRow) => {
                    return row.map((guardianAnimal, index) => {
                        if (!guardianAnimal) return <FireTile key={index + indexRow} fire={indexRow + 1} css={[fire(index, indexRow), animationOnibi && phase === Phase.EndOfTurn && nextFireEmpty(fires) && onibiAttackingSacredTreeAnimation(animationOnibi.duration, nextFireEmpty(fires))]} />

                        return <Card key={guardianAnimal} css={[cardPosition(index, indexRow), animation && animation.move.guardianAnimal === guardianAnimal && attractGuardianAnimalAnimation(index, indexRow, animation.duration, players.length, playerIndex), animationFill && fillReserveAnimation(animationFill.duration, index, index)]} guardianAnimal={guardianAnimal} onClick={() => { attract(guardianAnimal, index, indexRow) }} />
                    })
                })
            }
        </>
    );
}

function cardPosition(index: number, indexStack: number) {
    return css`
    height:${reserveRowCardHeight}em;
    width:${reserveRowCardWith}em;
    left:${reserveRowDrawLeft + index * 15.5}em;
    top:${reserveRowDrawTop - index * 0.1 + indexStack * 23}em;
    `
}

function fire(index: number, indexStack: number) {
    return css`
    height:${fireHeight}em;
    width:${fireWidth}em;
    top:${reserveFireTop + indexStack * 22}em;
    left:${reserveFireLeft + index * 16}em;
    `
}

function attractGuardianAnimalAnimation(index: number, indexStack: number, duration: number, players: number, spiritPosition: number) {
    const leftPanel = ((5 * panelWidth - ((players + 1) * panelWidth)) / 2) + (panelWidth * (spiritPosition + 1)) + 15
    const down = 100 - (reserveRowDrawTop - index * 0.1 + indexStack * 23) - 18
    const leftCard = reserveRowDrawLeft + index * 16

    const left = leftPanel - leftCard

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

function onibiAttackingSacredTreeAnimation(duration: number, index: number) {
    const middleFireTop = circleOfSpiritsTop + circleOfSpiritsHeight / 2 - fireHeight / 2 - 2
    const middleFireLeft = circleOfSpiritsLeft + circleOfSpiritswidth / 2 - fireWidth / 2 - 2
    const radius = 10

    const angle = (150 - 60 * index) * Math.PI / 180
    const top = index === 0 ? middleFireTop : middleFireTop - Math.sin(angle) * radius
    const left = index === 0 ? middleFireLeft : middleFireLeft - Math.cos(angle) * radius
    const frames = keyframes`
    50%{
        transform:translateX(${(top) / 2}em) translateY(${(left) / 2}em) rotateY(-90deg)
    }
    to{
        transform:translateX(${top}em) translateY(${left}em) rotateY(-180deg)
    }
        `
    return css`
            animation: ${frames} ${duration}s ease-in-out;
        `
}


function fillReserveAnimation(duration: number, index: number, indexStack: number) {
    const top = reserveStacksTop - index * 0.1 + indexStack * 23
    const left = reserveStacksLeft - index * 0.1

    const frames = keyframes`
    from{
        transform:translateX(${top}em) translateY(${left}em) rotateY(-180deg)
    }
        `
    return css`
            animation: ${frames} ${duration}s ease-in-out;
        `
}