/** @jsxImportSource @emotion/react */

import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature";
import Images from "../images/Images";
import GameLocalView from "../GameLocalView";
import { css } from '@emotion/react';
import { casesTop, casesLeft, casesWidth, casesHeight, spiritImage2Height, spiritImage2Width } from "../styles";
import TilesDropArea from "./TilesDropArea";



type Props = {
    game: GameLocalView
}
export default function PlayerForest({ game }: Props) {
    return (
        <>
            <div css={backgroundCases(game?.displayedPlayer)}>
                <TilesDropArea />
            </div>
            <div css={spiritBackgroundImage2(game?.displayedPlayer)}></div>
        </>
    );
}


const spiritCases: Record<SpiritOfNature, string> = {
    [SpiritOfNature.Autumn]: Images.autumnCases,
    [SpiritOfNature.Summer]: Images.autumnCases,
    [SpiritOfNature.Spring]: Images.autumnCases,
    [SpiritOfNature.Winter]: Images.autumnCases,

}

const spiritImage2: Record<SpiritOfNature, string> = {
    [SpiritOfNature.Autumn]: Images.autumnSpirit2,
    [SpiritOfNature.Summer]: Images.autumnSpirit2,
    [SpiritOfNature.Spring]: Images.autumnSpirit2,
    [SpiritOfNature.Winter]: Images.autumnSpirit2,

}
function backgroundCases(spirit?: SpiritOfNature) {
    return css`
        position:absolute;
        width:${casesWidth}em;
        height:${casesHeight}em;
        top:${casesTop}em;
        left:${casesLeft}em;
        background-image:url(${spirit ? spiritCases[spirit] : Images.autumnCases});
        background-size:cover;
        background-position:center;
    `
}
function spiritBackgroundImage2(spirit?: SpiritOfNature) {
    return css`
        position:absolute;
        width:${spiritImage2Width}em;
        height:${spiritImage2Height}em;
        top:18em;
        left:140em;
        background-image:url(${spirit ? spiritImage2[spirit] : Images.autumnSpirit2});
        background-size:cover;
        background-position:center;
    `
}