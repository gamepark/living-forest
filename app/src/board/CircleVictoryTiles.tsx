/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import VictoryTile from "@gamepark/living-forest/material/VictoryTile";
import { takeVictoryTileMove } from "@gamepark/living-forest/moves/TakeVictoryTile";
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature";
import { usePlay } from "@gamepark/react-client";
import Images from "../images/Images";
import { victoryTokenCircleHeight, victoryTokenCircleLeft, victoryTokenCircleTop, victoryTokenCircleWidth } from "../styles";


type Props = {
    victoryTiles: VictoryTile[]
    spirit: SpiritOfNature,
    spiritJumped: SpiritOfNature,
    victory: VictoryTile
}

export default function CircleVictoryTiles({ victoryTiles, spirit, spiritJumped, victory }: Props) {
    const play = usePlay()

    return (
        <>
            {victoryTiles.map((victoryTile) => {
                return <div key={victoryTile} css={victoryTileStyle(victoryTile)} onClick={() => { play(takeVictoryTileMove(spirit, spiritJumped, victory)) }}></div>
            })}
        </>
    );
}
const spiritVictoryImage: Record<VictoryTile, string> = {
    [VictoryTile.FireSpring]: Images.springVictoryFire,
    [VictoryTile.SacredFlowerSpring]: Images.springVictorySacredFlower,
    [VictoryTile.TreeSpring]: Images.springVictoryTree,
    [VictoryTile.FireSummer]: Images.summerVictoryFire,
    [VictoryTile.SacredFlowerSummer]: Images.summerVictorySacredFlower,
    [VictoryTile.TreeSummer]: Images.summerVictoryTree,
    [VictoryTile.FireAutumn]: Images.autumnVictoryFire,
    [VictoryTile.SacredFlowerAutumn]: Images.autumnVictorySacredFlower,
    [VictoryTile.TreeAutumn]: Images.autumnVictoryTree,
    [VictoryTile.FireWinter]: Images.winterVictoryFire,
    [VictoryTile.SacredFlowerWinter]: Images.winterVictorySacredFlower,
    [VictoryTile.TreeWinter]: Images.winterVictoryTree,
}

function victoryTileStyle(tile: VictoryTile) {
    return css`
        position:absolute;
        width:${victoryTokenCircleWidth}em;
        height:${victoryTokenCircleHeight}em;
        top:${victoryTokenCircleTop}em;
        left:${victoryTokenCircleLeft}em;
        top
        background-image:url(${spiritVictoryImage[tile]});
        background-size:cover;
        background-position:center;
    `
}