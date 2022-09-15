/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TreeDispenser from '@gamepark/living-forest/material/TreeDispenser';
import Tree from '../material/Tree';
import { disperserLeft, disperserTop } from '../styles';
import ProtectiveTree, { protectiveTrees } from '@gamepark/living-forest/material/ProtectiveTree';
import { takeProtectiveTreeMove } from '@gamepark/living-forest/moves/TakeProtectiveTree';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { usePlay } from '@gamepark/react-client';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import { isAvailableMove } from '@gamepark/living-forest/moves/Move';
import { getAnimalsResource } from '@gamepark/living-forest/material/GuardianAnimalDetails';
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal';
import Resource from '@gamepark/living-forest/material/Resource';
import { getProtectiveTreeDetails } from '@gamepark/living-forest/material/ProtectiveTreeDetails';

type Props = {
    dispenser: TreeDispenser
    spirit: SpiritOfNature
    actionMoves: ActionMove[]
    ongoingMove: ActionMove | null
    bonus: ActionMove | null
    ready: boolean
    line: GuardianAnimal[]
}

export default function ProtectiveTreeDisperser({ dispenser, spirit, actionMoves, ongoingMove, bonus, ready, line }: Props) {
    const trees = protectiveTrees;
    const play = usePlay()
    const take = (protectiveTree: ProtectiveTree, index: number) => { getAnimalsResource(line, Resource.Seed) >= getProtectiveTreeDetails(index + 1).cost! && isAvailableMove(ActionMove.PlantTree, ongoingMove, bonus, actionMoves, ready) && play(takeProtectiveTreeMove(spirit, protectiveTree)) }

    return (
        <>
            {
                trees.map((protectiveTree, index) => {
                    return [...Array(dispenser[protectiveTree])].map((_, indexTree) => {
                        return < Tree key={protectiveTree + indexTree} css={treeLinePosition(index, indexTree)} protectiveTree={protectiveTree} onClick={() => { take(protectiveTree, index) }} />
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