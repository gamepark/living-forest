/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ProtectiveTree from "@gamepark/living-forest/material/ProtectiveTree";
import { plantTreeMove } from '@gamepark/living-forest/moves/PlantTree';
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature";
import { usePlay } from "@gamepark/react-client";
import Tree from "../material/Tree";
import { forestTileHeight, forestTileLeft, forestTileTop, forestTileWidth } from "../styles";

type Props = {
    forest: (ProtectiveTree | number | null)[][]
    spirit: SpiritOfNature
}

export default function TilesDropArea({ forest, spirit }: Props) {
    const play = usePlay()

    return (
        <>
            {
                forest.map((row, indexRow) => {
                    return row.map((protectiveTree, index) => {
                        if (protectiveTree !== null && protectiveTree != 0) return <Tree key={index + indexRow} protectiveTree={protectiveTree} css={treePosition(index, indexRow)} />
                        if (protectiveTree === null) return <div key={index + indexRow} css={tilePosition(index, indexRow)} onClick={() => { play(plantTreeMove(spirit, { x: indexRow, y: index })) }}></div>
                        return
                    })
                })
            }
        </>
    );
}

function tilePosition(index: number, indexStack: number) {
    return css`
    position:absolute;
    height:${forestTileHeight}em;
    width:${forestTileWidth}em;
    top:${forestTileTop - index * 0.1 + indexStack * 17.5}em;
    left:${forestTileLeft + index * 17.6}em;
    `
}

function treePosition(index: number, indexStack: number) {
    return css`
    position:absolute;
    height:${forestTileHeight}em;
    width:${forestTileWidth}em;
    top:${forestTileTop - index * 0.1 + indexStack * 17.5}em;
    left:${forestTileLeft + index * 17.6}em;
    `
}