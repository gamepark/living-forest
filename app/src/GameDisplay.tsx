/** @jsxImportSource @emotion/react */
import {css, keyframes} from '@emotion/react'
import GameView from '@gamepark/living-forest/GameView'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import {Letterbox} from '@gamepark/react-components'
import {useState} from 'react'
import Card from './material/Card'

type Props = {
  game: GameView
}

export default function GameDisplay({game}: Props) {
  const [animal, setAnimal] = useState<GuardianAnimal>()
  return (
    <Letterbox css={letterBoxStyle} width={185} height={100}>
      <div css={sampleCss}>
        {JSON.stringify(game)}
      </div>
      <Card css={sampleImageCss} guardianAnimal={animal} onClick={() => setAnimal(animal ? undefined : GuardianAnimal.Bee)}/>
    </Letterbox>
  )
}

const fadeIn = keyframes`
  from, 50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const letterBoxStyle = css`
  animation: ${fadeIn} 3s ease-in forwards;
`

const sampleCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  background-color: black;
  padding: 0.5em;
  border-radius: 1em;
`

const sampleImageCss = css`
  position: absolute;
  bottom: 5%;
  left: calc(50% - 6.5em);
  width: 13em;
  height: 20em;
`