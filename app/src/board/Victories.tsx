/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Images from "../images/Images";
import Victory from '@gamepark/living-forest/material/Victory';
import { resourceheight, resourceWidth } from "../styles";
import { getAnimalsType } from "@gamepark/living-forest/material/GuardianAnimalDetails";
import GuardianAnimal from "@gamepark/living-forest/material/GuardianAnimal";

type Props = {
    victory: number[]
    line: GuardianAnimal[]
}

export default function Victories({ victory, line }: Props) {
    const type = getAnimalsType(line)

    return (
        <>
            {victory.map((victory, index) => {

                return <div key={index} css={victoryStyle(index + 1)}>
                    <div css={num}>{victory}</div>
                </div>

            })}
            {type > 0 ? <div css={element}><div css={num}>{type}</div></div> : <div></div>}
        </>
    );
}
const victoryStyle = (victory: number) => css`
position:flex;
width:${resourceWidth}em;
height:${resourceheight}em;
background-image: url(${VictoryImage[victory]});
background-size: cover;
filter: drop-shadow(0 0 0.9em black);
`
const VictoryImage: { [key in Victory]: string } = {
    [Victory.Fire]: Images.fire,
    [Victory.SacredFlower]: Images.sacredFlower,
    [Victory.Tree]: Images.seed,
}

const num = css`
position:absolute;
top:0.2em;
left:1.15em;
color:black;
font-size:3em;
`
const element = css`
position:flex;
width:${resourceWidth}em;
height:${resourceheight}em;
background-image: url(${Images.gregarious});
background-size: cover;
filter: drop-shadow(0 0 0.9em black);
`