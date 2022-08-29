/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { ButtonHTMLAttributes, FC } from 'react'
import { getSpiritColor } from '../styles'

type Props = {
    spirit: SpiritOfNature
}

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement> & Props> = ({ children, spirit, ...props }) => {

    return <button css={[button(getSpiritColor(spirit))]} {...props}> <span css={spanBorder(spirit)}> {children}</span> </button>

}


const button = (color: string) => css`
cursor:pointer;
--color: #000000;
--background-color: ${color};
--border-color: darken(${color}, 7.5%);
padding: 0.2em 0.5em;
border-radius: 0.5em;
color: var(--color);
font-family: inherit;
background-color: var(--background-color);
border: solid 0.1em var(--border-color);
outline: none;
position: relative;
user-select: none;


box-shadow:
    0 0.2em 0.4em rgba(0, 0, 0, 0.4),
    0 -0.3em 0.6em rgba(0, 0, 0, 0.2) inset;
    transition: box-shadow 65ms ease-out;

&:after {
    content: "";
    background-color: #ffffff;
    width: 75%;
    height: 12.5%;
    position: absolute;
    top: 0.15em;
    left: 12.5%;
    border-radius: 50%;
    filter: blur(0.15em);
    transition: opacity 65ms ease-out;

}
&:active {
    box-shadow:
        0 0 0 rgba(0, 0, 0, 0.4),
        0 0.4em 1em rgba(0, 0, 0, 0.3) inset;
    &:after {
        opacity: 0;
    }
}

`;

const spanBorder = (spirit: SpiritOfNature) => css`
    ${isDarkColor(spirit) ? `color:white;` : `color:#3b3b3a;`};
    margin: 0 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

function isDarkColor(spirit: SpiritOfNature): boolean {
    if (spirit === SpiritOfNature.Autumn || spirit === SpiritOfNature.Winter || spirit === SpiritOfNature.Spring) {
        return true
    } else {
        return false
    }
}
