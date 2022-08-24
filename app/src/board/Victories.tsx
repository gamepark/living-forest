/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Images from "../images/Images";
import { victoryLeft, victoryTop } from "../styles";
import Victory from '@gamepark/living-forest/material/Victory';

type Props = {
    victory: number[]
}

export default function Victories({ victory }: Props) {

    return (
        <>
            {victory.map((resource, index) => {

                return <div key={index} css={victoryCss(index + 1)}>
                    {resource}
                </div>

            })}

        </>
    );
}
const victoryCss = (victory: number) => css`
position:absolute;
width:2.5em;
height:2.5em;
top:${victoryTop}em;
left:${victoryLeft + victory * 4.2}em;
background-image: url(${VictoryImage[victory]});
background-size: cover;
filter: drop-shadow(0 0 0.9em black);
`
const VictoryImage: { [key in Victory]: string } = {
    [Victory.Fire]: Images.fire,
    [Victory.SacredFlower]: Images.sacredFlower,
    [Victory.Tree]: Images.seed,
}