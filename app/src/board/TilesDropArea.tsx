/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ProtectiveTree from "@gamepark/living-forest/material/ProtectiveTree";
import ActionMove from "@gamepark/living-forest/moves/ActionMove";
import { isAvailableMove } from "@gamepark/living-forest/moves/Move";
import { placementIsValid, plantTreeMove } from '@gamepark/living-forest/moves/PlantTree';
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature";
import { usePlay } from "@gamepark/react-client";
import Tree from "../material/Tree";
import { forestTileHeight, forestTileLeft, forestTileTop, forestTileWidth } from "../styles";

type Props = {
    forest: (ProtectiveTree | number | null)[][]
    spirit: SpiritOfNature
    actionMoves: ActionMove[]
    ongoingMove: ActionMove | null
    bonus: ActionMove | null
    ready: boolean
    playerTree: ProtectiveTree | null
}

export default function TilesDropArea({ forest, spirit, actionMoves, ongoingMove, bonus, ready, playerTree }: Props) {
    const play = usePlay()
    const plant = (indexRow: number, index: number) => { placementIsValid(forest, { x: indexRow, y: index }) && playerTree != null && isAvailableMove(ActionMove.PlantTree, ongoingMove, bonus, actionMoves, ready) && play(plantTreeMove(spirit, { x: indexRow, y: index })) }

    return (
        <>
            {
                forest.map((row, indexRow) => {
                    return row.map((protectiveTree, index) => {
                        if (protectiveTree !== null && protectiveTree != 0) return <Tree key={index + indexRow} protectiveTree={protectiveTree} css={treePosition(index, indexRow)} />
                        if (protectiveTree === null) return <div key={index + indexRow} css={tilePosition(index, indexRow)} onClick={() => { plant(indexRow, index) }}></div>
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