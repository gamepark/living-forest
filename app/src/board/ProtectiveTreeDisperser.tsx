/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
import ProtectiveTree, { protectiveTrees } from '@gamepark/living-forest/material/ProtectiveTree';
import { getProtectiveTreeDetails } from '@gamepark/living-forest/material/ProtectiveTreeDetails';
import Resource from '@gamepark/living-forest/material/Resource';
import TreeDispenser from '@gamepark/living-forest/material/TreeDispenser';
import { getResourcesCount } from '@gamepark/living-forest/material/Victory';
import VictoryTile from '@gamepark/living-forest/material/VictoryTile';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import { isAvailableMove } from '@gamepark/living-forest/moves/Move';
import MoveType from '@gamepark/living-forest/moves/MoveType';
import TakeProtectiveTree, { takeProtectiveTreeMove } from '@gamepark/living-forest/moves/TakeProtectiveTree';
import Phase from '@gamepark/living-forest/Phase';
import PlayerView from '@gamepark/living-forest/PlayerView';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { useAnimation, usePlay } from '@gamepark/react-client';
import Tree from '../material/Tree';
import { disperserLeft, disperserTop, panelWidth } from '../styles';

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
    victoryTiles: VictoryTile[]
    forest: (ProtectiveTree | number | null)[][]
    phase: Phase
}

export default function ProtectiveTreeDisperser({ dispenser, spirit, actionMoves, ongoingMove, bonus, ready, line, players, currentPlayer, victoryTiles, forest, phase }: Props) {
    const trees = protectiveTrees;
    const play = usePlay()
    const take = (protectiveTree: ProtectiveTree, index: number) => { phase === Phase.Action && getResourcesCount(victoryTiles, line, bonus, forest, Resource.Seed) >= getProtectiveTreeDetails(index + 1).cost! && (isAvailableMove(ActionMove.PlantTree, ongoingMove, bonus, actionMoves, ready) || bonus === ActionMove.PlantTree) && play(takeProtectiveTreeMove(spirit, protectiveTree)) }
    const animation = useAnimation<TakeProtectiveTree>(animation => animation.move.type === MoveType.TakeProtectiveTree)
    const playerIndex = players.findIndex(player => player.spirit === currentPlayer)

    return (
        <>
            {
                trees.map((protectiveTree, index) => {
                    return [...Array(dispenser[protectiveTree])].map((_, indexTree) => {
                        return < Tree key={protectiveTree + indexTree} css={[treeLinePosition(index, indexTree), animation && animation.move.tree === protectiveTree && indexTree === dispenser[protectiveTree] - 1 && takeProtectiveTreeAnimation(index, indexTree, animation.duration, players.length, playerIndex)]} protectiveTree={protectiveTree} onClick={() => { take(protectiveTree, index) }} />
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
        transform:translateY(${down / 2}em) translateX(${left}em) translateZ(10em);
    }
    to{
        transform:translateY(${(down)}em) translateX(${left}em);
    }
    `
    return css`
        animation: ${frames} ${duration}s ease-in-out;
    `
}