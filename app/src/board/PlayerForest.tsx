/** @jsxImportSource @emotion/react */

import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature";
import Images from "../images/Images";
import { css } from '@emotion/react';
import { casesTop, casesLeft, casesWidth, casesHeight, spiritImage2Height, spiritImage2Width } from "../styles";
import TilesDropArea from "./TilesDropArea";
import PlayerView from "@gamepark/living-forest/PlayerView";



type Props = {
    player: PlayerView
}
export default function PlayerForest({ player }: Props) {
    return (
        <>
            <div css={spiritBackgroundImage1(player.spirit)}></div>

            <div css={backgroundCases(player.spirit)}>
                <TilesDropArea forest={player.forest} spirit={player.spirit} />
            </div>
            <div css={spiritBackgroundImage2(player.spirit)}></div>
        </>
    );
}


const spiritCases: Record<SpiritOfNature, string> = {
    [SpiritOfNature.Autumn]: Images.autumnCases,
    [SpiritOfNature.Summer]: Images.autumnCases,
    [SpiritOfNature.Spring]: Images.autumnCases,
    [SpiritOfNature.Winter]: Images.autumnCases,

}
const spiritImage1: Record<SpiritOfNature, string> = {
    [SpiritOfNature.Autumn]: Images.autumnSpirit1,
    [SpiritOfNature.Summer]: Images.autumnSpirit1,
    [SpiritOfNature.Spring]: Images.autumnSpirit1,
    [SpiritOfNature.Winter]: Images.autumnSpirit1,

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
function spiritBackgroundImage1(spirit?: SpiritOfNature) {
    return css`
        position:absolute;
        width:${spiritImage2Width}em;
        height:${spiritImage2Height}em;
        top:-10em;
        left:-10em;
        background-image:url(${spirit ? spiritImage1[spirit] : Images.autumnSpirit1});
        background-size:cover;
        background-position:center;
    `
}
function spiritBackgroundImage2(spirit?: SpiritOfNature) {
    return css`
        position:absolute;
        width:${spiritImage2Width}em;
        height:${spiritImage2Height}em;
        top:50em;
        left:170em;
        background-image:url(${spirit ? spiritImage2[spirit] : Images.autumnSpirit2});
        background-size:cover;
        background-position:center;
    `
}