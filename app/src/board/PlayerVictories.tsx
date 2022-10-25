/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import VictoryTile from '@gamepark/living-forest/material/VictoryTile';
import Images from "../images/Images";
import { victoryTokenHeight, victoryTokenLeft, victoryTokenTop, victoryTokenWidth } from "../styles";
import { usePlay } from '@gamepark/react-client';
import ActionMove from '@gamepark/living-forest/moves/ActionMove';
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';
import { takeVictoryTileMove } from '@gamepark/living-forest/moves/TakeVictoryTile';

type Props = {
    victoryTiles: VictoryTile[]
    bonus: ActionMove | null
    playersJumped: SpiritOfNature[]
    spirit?: SpiritOfNature
    spiritDisplayed: SpiritOfNature
}

export default function PlayerVictories({ victoryTiles, bonus, playersJumped, spirit, spiritDisplayed }: Props) {

    // Récupérer playersJumped du joueur qui joue et non qui est affiché -> idem pour spirit et spiritDisplayed

    const play = usePlay()
    const takeVictory = (tile: number) => { typeof spirit != "undefined" && bonus === ActionMove.TakeVictoryTile && playersJumped.find(spirit => spirit === spiritDisplayed) != undefined && play(takeVictoryTileMove(spirit, spiritDisplayed, tile)) }
    console.log(playersJumped);

    console.log(bonus === ActionMove.TakeVictoryTile)
    console.log(typeof spirit != "undefined");
    console.log(playersJumped.find(spirit => spirit === spiritDisplayed) != undefined);

    return (
        <>
            {
                victoryTiles.map((tile, index) => {
                    return <div key={tile} css={spiritVictory(tile, index)} onClick={() => takeVictory(tile)}></div>
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