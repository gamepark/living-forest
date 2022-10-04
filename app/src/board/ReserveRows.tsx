/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
import { getGuardianAnimalDetails } from '@gamepark/living-forest/material/GuardianAnimalDetails';
import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree';
import Resource from '@gamepark/living-forest/material/Resource';
import { getResourcesCount } from '@gamepark/living-forest/material/Victory';
import VictoryTile from '@gamepark/living-forest/material/VictoryTile';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import AttractGuardianAnimal, { attractGuardianAnimalMove } from '@gamepark/living-forest/moves/AttractGuardianAnimal';
import { isAvailableMove } from '@gamepark/living-forest/moves/Move';
import MoveType from '@gamepark/living-forest/moves/MoveType';
import PlayerView from '@gamepark/living-forest/PlayerView';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { useAnimation, usePlay } from '@gamepark/react-client';
import Card from '../material/Card';
import FireTile from '../material/FireTile';
import { fireHeight, fireWidth, panelWidth, reserveFireLeft, reserveFireTop, reserveRowCardHeight, reserveRowCardWith, reserveRowDrawLeft, reserveRowDrawTop } from '../styles';

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
}

export default function ReserveRows({ reserveRows, spirit, actionMoves, ongoingMove, bonus, ready, players, line, attractedGuardianAnimal, victoryTiles, forest, currentPlayer }: Props) {
    const play = usePlay()
    const attract = (guardianAnimal: GuardianAnimal, index: number, indexRow: number) => { (getResourcesCount(victoryTiles, line, bonus, forest, Resource.Sun) >= attractedGuardianAnimal + getGuardianAnimalDetails(guardianAnimal).cost) && (!isAvailableMove(ActionMove.AttractGuardianAnimal, ongoingMove, bonus, actionMoves, ready) || isAvailableMove(ActionMove.AttractGuardianAnimal3, ongoingMove, bonus, actionMoves, ready)) && play(attractGuardianAnimalMove(spirit, guardianAnimal, { x: index, y: indexRow })) }
    const animation = useAnimation<AttractGuardianAnimal>(animation => animation.move.type === MoveType.AttractGuardianAnimal)
    const playerIndex = players.findIndex(player => player.spirit === currentPlayer)

    return (
        <>
            {
                reserveRows.map((row, indexRow) => {
                    return row.map((guardianAnimal, index) => {
                        if (!guardianAnimal) return <FireTile key={index + indexRow} fire={indexRow + 1} css={fire(index, indexRow)} />

                        return <Card key={guardianAnimal} css={[cardPosition(index, indexRow), animation && animation.move.guardianAnimal === guardianAnimal && attractGuardianAnimalAnimation(index, indexRow, animation.duration, players.length, playerIndex)]} guardianAnimal={guardianAnimal} onClick={() => { attract(guardianAnimal, index, indexRow) }} />
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