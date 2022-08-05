/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { usePlay } from '@gamepark/react-client'
import { displayScreenMove } from '../DisplayScreen'
import GameLocalView from '../GameLocalView'
import { panelHeight, panelWidth, panelLeft, panelBottom, firePanelTop, firePanelLeft, firePanelHeight, firePanelWidth, fireTotalTop, fireTotalLeft } from '../styles'
import Images from '../images/Images'
import { getTotalFires } from '@gamepark/living-forest/material/Fire'




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
            if (fire != null) {
              return <div css={fireCss(index)}></div>
            }
            return
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
    background-color: rgba(255, 255, 255, 0.8);
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
  left: ${firePanelLeft}em;
  height:${firePanelHeight}em;
  width:${firePanelWidth + index * 2}em;
  background-image:url(${Images.firePanel});
  background-size:cover;
  background-position:center;
  padding: 0.5em;
  filter: drop-shadow(0 0 0.1em black);
`
}