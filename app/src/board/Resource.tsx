/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ResourceElement from '@gamepark/living-forest/material/Resource';
import { resourceheight, resourceWidth } from '../styles';
import Images from '../images/Images';


type Props = {
    resource: number
    number: number
}

export default function Resource({ resource, number }: Props) {
    return (
        number > 0 ? <div css={resourceStyle(resource)}><div css={num}>{number}</div></div> : <div></div>
    );
}

const resourceStyle = (resource: number) => css`
position:flex;
width:${resourceWidth}em;
height:${resourceheight}em;
background-image: url(${ResourceImage[resource]});
background-size: cover;
filter: drop-shadow(0 0 0.9em white);
`
const num = css`
position:absolute;
top:0.2em;
left:1.15em;
color:black;
font-size:3em;
`
const ResourceImage: { [key in ResourceElement]: string } = {
    [ResourceElement.Sun]: Images.sun,
    [ResourceElement.Drop]: Images.drop,
    [ResourceElement.Seed]: Images.seed,
    [ResourceElement.Wind]: Images.wind,
    [ResourceElement.SacredFlower]: Images.sacredFlower,
}