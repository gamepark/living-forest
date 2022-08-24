import { css } from "@emotion/react";
import { ButtonHTMLAttributes } from "react";

export default function VictoryTiles({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {

  return <button css={[button]} {...props} >{children}</button>
}

const button = css`
background: linear-gradient(-30deg, #0b3d3d 50%, #082b2b 50%);
padding: 0.2em 0.4em 0.1em 0.4em;
margin: 0;
display: inline-block;
-webkit-transform: translate(0%, 0%);
transform: translate(0%, 0%);
cursor: pointer;
overflow: hidden;
color: #d4f7f7;
text-align: center;
font-weight: bold;
text-transform: uppercase;
text-decoration: none;
-webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
outline: 0;
border-style: none;

&:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #85adad;
  opacity: 0;
  -webkit-transition: .2s opacity ease-in-out;
  transition: .2s opacity ease-in-out;
}

&:hover:before {
  opacity: 0.2;
}

`