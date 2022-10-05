/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import TreeDispenser from '@gamepark/living-forest/material/TreeDispenser';
import Tree from '../material/Tree';
import { disperserLeft, disperserTop, panelWidth } from '../styles';
import ProtectiveTree, { protectiveTrees } from '@gamepark/living-forest/material/ProtectiveTree';
import TakeProtectiveTree, { takeProtectiveTreeMove } from '@gamepark/living-forest/moves/TakeProtectiveTree';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { useAnimation, usePlay } from '@gamepark/react-client';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import { isAvailableMove } from '@gamepark/living-forest/moves/Move';
import { getAnimalsResource } from '@gamepark/living-forest/material/GuardianAnimalDetails';
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
import Resource from '@gamepark/living-forest/material/Resource';
import { getProtectiveTreeDetails } from '@gamepark/living-forest/material/ProtectiveTreeDetails';
import MoveType from '@gamepark/living-forest/moves/MoveType';
import PlayerView from '@gamepark/living-forest/PlayerView';

type Props = {
    dispenser: TreeDispenser
    spirit: SpiritOfNature
    actionMoves: ActionMove[]
    ongoingMove: ActionMove | null
    bonus: ActionMove | null
    ready: boolean
    line: GuardianAnimal[]
    players: PlayerView[]
    currentPlayer?: SpiritOfNature
}

export default function ProtectiveTreeDisperser({ dispenser, spirit, actionMoves, ongoingMove, bonus, ready, line, players, currentPlayer }: Props) {
    const trees = protectiveTrees;
    const play = usePlay()
    const take = (protectiveTree: ProtectiveTree, index: number) => { getAnimalsResource(line, Resource.Seed) >= getProtectiveTreeDetails(index + 1).cost! && isAvailableMove(ActionMove.PlantTree, ongoingMove, bonus, actionMoves, ready) && play(takeProtectiveTreeMove(spirit, protectiveTree)) }
    const animation = useAnimation<TakeProtectiveTree>(animation => animation.move.type === MoveType.TakeProtectiveTree)
    const playerIndex = players.findIndex(player => player.spirit === currentPlayer)

    return (
        <>
            {
                trees.map((protectiveTree, index) => {
                    return [...Array(dispenser[protectiveTree])].map((_, indexTree) => {
                        return < Tree key={protectiveTree + indexTree} css={[treeLinePosition(index, indexTree), animation && animation.move.tree === protectiveTree && takeProtectiveTreeAnimation(index, indexTree, animation.duration, players.length, playerIndex)]} protectiveTree={protectiveTree} onClick={() => { take(protectiveTree, index) }} />
                    })
                })
            }
        </>
    );
}

function treeLinePosition(index: number, indexTree: number) {
    return css`
    top:${disperserTop + indexTree * 0.2}em;
    left:${disperserLeft + index * 15 + indexTree * 0.2}em;
    `
}

function takeProtectiveTreeAnimation(index: number, indexTree: number, duration: number, players: number, spiritPosition: number) {
    const leftPanel = ((5 * panelWidth - ((players + 1) * panelWidth)) / 2) + (panelWidth * (spiritPosition + 1)) + 15
    const top = disperserTop + indexTree * 0.2
    const leftTree = disperserLeft + index * 15 + indexTree * 0.2

    const down = 100 - top

    const left = leftPanel - leftTree

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