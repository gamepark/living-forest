/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import VictoryTile from '@gamepark/living-forest/material/VictoryTile';
import Images from "../images/Images";
import { victoryTokenHeight, victoryTokenLeft, victoryTokenTop, victoryTokenWidth } from "../styles";

type Props = {
    victoryTiles: VictoryTile[]
}

export default function PlayerVictories({ victoryTiles }: Props) {
    return (
        <>
            {
                victoryTiles.map((tile, index) => {
                    return <div key={tile} css={spiritVictory(tile, index)}></div>
                })
            }
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

function spiritVictory(tile: VictoryTile, index: number) {
    return css`
        position:absolute;
        width:${victoryTokenWidth}em;
        height:${victoryTokenHeight}em;
        top:${victoryTokenTop + index * 11}em;
        left:${victoryTokenLeft}em;
        background-image:url(${spiritVictoryImage[tile]});
        background-size:cover;
        background-position:center;
    `
}