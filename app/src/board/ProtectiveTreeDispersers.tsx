/** @jsxImportSource @emotion/react */
import TreeDispenser from '@gamepark/living-forest/material/TreeDispenser';
import { disperserLeft, disperserTop } from '../styles';
import Tree from '../material/Tree';
import { css } from '@emotion/react';
// import ProtectiveTree from '@gamepark/living-forest/material/ProtectiveTree';
import { protectiveTrees } from '@gamepark/living-forest/material/ProtectiveTree';

type Props = {
    dispenser: TreeDispenser
}


export default function ProtectiveTreeDispersers({ }: Props) {
    const trees = protectiveTrees;

    return (
        <>
            {
                trees.map((protectiveTree, index) => {
                    return < Tree key={index} css={treeLinePosition(index)} protectiveTree={protectiveTree} />
                })
            }
        </>
    );
}

function treeLinePosition(index: number) {
    return css`
    top:${disperserTop}em;
    left:${disperserLeft + index * 15}em;
    `
}