/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import TreeDispenser from '@gamepark/living-forest/material/TreeDispenser';
import Tree from '../material/Tree';
import { disperserLeft, disperserTop } from '../styles';
import { protectiveTrees } from '@gamepark/living-forest/material/ProtectiveTree';
import { takeProtectiveTreeMove } from '@gamepark/living-forest/moves/TakeProtectiveTree';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { usePlay } from '@gamepark/react-client';

type Props = {
    dispenser: TreeDispenser
    spirit: SpiritOfNature
}

export default function ProtectiveTreeDisperser({ dispenser, spirit }: Props) {
    const trees = protectiveTrees;
    const play = usePlay()

    return (
        <>
            {
                trees.map((protectiveTree, index) => {
                    return [...Array(dispenser[protectiveTree])].map((_, indexTree) => {
                        return < Tree key={protectiveTree + indexTree} css={treeLinePosition(index, indexTree)} protectiveTree={protectiveTree} onClick={() => { play(takeProtectiveTreeMove(spirit, protectiveTree)) }} />
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