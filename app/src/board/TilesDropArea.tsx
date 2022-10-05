/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import ProtectiveTree from "@gamepark/living-forest/material/ProtectiveTree";
import ActionMove from "@gamepark/living-forest/moves/ActionMove";
import { isAvailableMove } from "@gamepark/living-forest/moves/Move";
import MoveType from "@gamepark/living-forest/moves/MoveType";
import PlantTree, { placementIsValid, plantTreeMove } from '@gamepark/living-forest/moves/PlantTree';
import PlayerView from "@gamepark/living-forest/PlayerView";
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature";
import { useAnimation, usePlay } from "@gamepark/react-client";
import Tree from "../material/Tree";
import { forestTileHeight, forestTileLeft, forestTileTop, forestTileWidth, panelWidth } from "../styles";

type Props = {
    forest: (ProtectiveTree | number | null)[][]
    spirit: SpiritOfNature
    actionMoves: ActionMove[]
    ongoingMove: ActionMove | null
    bonus: ActionMove | null
    ready: boolean
    playerTree: ProtectiveTree | null
    players: PlayerView[]
    currentPlayer?: SpiritOfNature
}

export default function TilesDropArea({ forest, spirit, actionMoves, ongoingMove, bonus, ready, playerTree, players, currentPlayer }: Props) {
    const play = usePlay()
    const plant = (indexRow: number, index: number) => { placementIsValid(forest, { x: indexRow, y: index }) && playerTree != null && isAvailableMove(ActionMove.PlantTree, ongoingMove, bonus, actionMoves, ready) && play(plantTreeMove(spirit, { x: indexRow, y: index })) }
    const animation = useAnimation<PlantTree>(animation => animation.move.type === MoveType.PlantTree)
    const playerIndex = players.findIndex(player => player.spirit === currentPlayer)

    return (
        <>
            {
                forest.map((row, indexRow) => {
                    return row.map((protectiveTree, index) => {
                        if (protectiveTree !== null && protectiveTree != 0) return <Tree key={index + indexRow} protectiveTree={protectiveTree} css={[treePosition(index, indexRow), animation && plantProtectiveTreeAnimation(animation.duration, players.length, playerIndex)]} />
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


function plantProtectiveTreeAnimation(duration: number, players: number, spiritPosition: number) {
    const leftPanel = ((5 * panelWidth - ((players + 1) * panelWidth)) / 2) + (panelWidth * (spiritPosition + 1)) + 15

    const frames = keyframes`
    from{
        transform:translateY(${(100)}em) 
        translateX(${leftPanel}em)
    }
    80%{
        transform:translateY(${100 / 2}em) 
        translateX(${leftPanel}em)
        translateZ(10em)
    }
    `
    return css`
        animation: ${frames} ${duration}s ease-in-out;
    `
}