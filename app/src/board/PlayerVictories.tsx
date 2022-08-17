/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Images from "../images/Images";
import PlayerView from '@gamepark/living-forest/PlayerView';
import { spiritTokenWidth, spiritTokenHeight, spiritTokenTop, spiritTokenLeft } from "../styles";
import VictoryTile from '@gamepark/living-forest/material/VictoryTile';


type Props = {
    player: PlayerView
}

export default function PlayerVictories({ player }: Props) {
    return (
        <>
            {
                player.victoryTiles.map((tile, index) => {
                    return <div key={index} css={spiritVictory(tile, index)}></div>
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
        width:${spiritTokenWidth}em;
        height:${spiritTokenHeight}em;
        top:${spiritTokenTop + index * 11}em;
        left:${spiritTokenLeft}em;
        background-image:url(${spiritVictoryImage[tile]});
        background-size:cover;
        background-position:center;
    `
}