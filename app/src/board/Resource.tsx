/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ResourceElement from '@gamepark/living-forest/material/Resource';
import { resourceLeft, resourceTop } from '../styles';
import Images from '../images/Images';


type Props = {
    resource: number
    number: number
}

export default function Resource({ resource, number }: Props) {
    return (
        <div css={element(resource)}>
            <div css={num}>
                {(number != 0) ? number : ""}
            </div>
        </div>
    );
}

const element = (resource: number) => css`
position:absolute;
width:2.5em;
height:2.5em;
top:${resourceTop}em;
left:${resourceLeft + resource * 4.2}em;
background-image: url(${ResourceImage[resource]});
background-size: cover;
`
const num = css`
position:absolute;
top:0.2em;
left:1.3em;
color:black;
font-size:2em;
`
const ResourceImage: { [key in ResourceElement]: string } = {
    [ResourceElement.Sun]: Images.sun,
    [ResourceElement.Drop]: Images.drop,
    [ResourceElement.Seed]: Images.seed,
    [ResourceElement.Wind]: Images.wind,
    [ResourceElement.SacredFlower]: Images.sacredFlower,

}