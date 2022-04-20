/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature";
import Images from "../images/Images";
import PlayerView from '@gamepark/living-forest/PlayerView';
import { spiritTokenWidth, spiritTokenHeight } from "../styles";


type Props = {
    player: PlayerView
}

export default function PlayerTokens({ player }: Props) {
    return (
        <>
            <div css={spiritToken1(player.spirit)}></div>
            <div css={spiritToken2(player.spirit)}></div>
            <div css={spiritToken3(player.spirit)}></div>
        </>
    );
}

const spiritTokenBack1: Record<SpiritOfNature, string> = {
    [SpiritOfNature.Autumn]: Images.autumnToken1,
    [SpiritOfNature.Summer]: Images.autumnToken1,
    [SpiritOfNature.Spring]: Images.autumnToken1,
    [SpiritOfNature.Winter]: Images.autumnToken1,

}
const spiritTokenBack2: Record<SpiritOfNature, string> = {
    [SpiritOfNature.Autumn]: Images.autumnToken2,
    [SpiritOfNature.Summer]: Images.autumnToken2,
    [SpiritOfNature.Spring]: Images.autumnToken2,
    [SpiritOfNature.Winter]: Images.autumnToken2,

}
const spiritTokenBack3: Record<SpiritOfNature, string> = {
    [SpiritOfNature.Autumn]: Images.autumnToken3,
    [SpiritOfNature.Summer]: Images.autumnToken3,
    [SpiritOfNature.Spring]: Images.autumnToken3,
    [SpiritOfNature.Winter]: Images.autumnToken3,

}
function spiritToken1(spirit?: SpiritOfNature) {
    return css`
        position:absolute;
        width:${spiritTokenWidth}em;
        height:${spiritTokenHeight}em;
        top:16em;
        left:30em;
        background-image:url(${spirit ? spiritTokenBack1[spirit] : Images.autumnToken1});
        background-size:cover;
        background-position:center;
    `
}
function spiritToken2(spirit?: SpiritOfNature) {
    return css`
        position:absolute;
        width:${spiritTokenWidth}em;
        height:${spiritTokenHeight}em;
        top:24em;
        left:30em;
        background-image:url(${spirit ? spiritTokenBack2[spirit] : Images.autumnToken2});
        background-size:cover;
        background-position:center;
    `
}
function spiritToken3(spirit?: SpiritOfNature) {
    return css`
        position:absolute;
        width:${spiritTokenWidth}em;
        height:${spiritTokenHeight}em;
        top:32em;
        left:30em;
        background-image:url(${spirit ? spiritTokenBack3[spirit] : Images.autumnToken3});
        background-size:cover;
        background-position:center;
    `
}