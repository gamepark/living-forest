/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { getTotalFires } from '@gamepark/living-forest/material/Fire'
import { usePlay } from '@gamepark/react-client'
import { displayScreenMove } from '../DisplayScreen'
import GameLocalView from '../GameLocalView'
import Images from '../images/Images'
import { firePanelHeight, firePanelLeft, firePanelTop, firePanelWidth, fireTotalLeft, fireTotalTop, panelBottom, panelHeight, panelLeft, panelWidth } from '../styles'

type Props = {
  game: GameLocalView
}

export default function PanelGame({ game }: Props) {
  const play = usePlay()

  return (
    <>
      <div css={forest} onClick={() => play(displayScreenMove(), { local: true })}>
        {
          game.circle.fire.map((fire, index) => {
            return fire != null && <div key={index} css={fireCss(index)}></div>
          })
        }
        <div css={fireTotal}>{getTotalFires(game.circle.fire)}</div>
      </div>
    </>
  );

}
const forest = css`
  position: absolute;
  bottom: ${panelBottom}em;
  left: ${panelLeft}em;
  height:${panelHeight}em;
  width:${panelWidth}em;
  background-image:url(${Images.forestBack});
  background-size:cover;
  background-position:center;
  &:before {
    background-color: rgba(255, 255, 255, 0.5);
    content:"";
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    border-radius: inherit;
    }
  padding: 0.5em;
  box-shadow: 0 0 0.3em black;
  border-radius:0.5em;
`

const fireTotal = css`
  font-size:3em;
  position: absolute;
  top: ${fireTotalTop}em;
  left: ${fireTotalLeft}%;
  filter: drop-shadow(0 0 0.1em black);
`


function fireCss(index: number) {
  return css`
  position: absolute;
  top: ${firePanelTop}em;
  left: ${firePanelLeft + index * 3.5}em;
  height:${firePanelHeight}em;
  width:${firePanelWidth}em;
  background-image:url(${Images.firePanel});
  background-size:cover;
  background-position:center;
  padding: 0.5em;
  filter: drop-shadow(0 0 0.1em black);
`
}