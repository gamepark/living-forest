/** @jsxImportSource @emotion/react */
import {css, keyframes} from '@emotion/react'
import GuardianAnimal from '@gamepark/living-forest/material/GuardianAnimal'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import {usePlay, usePlayerId} from '@gamepark/react-client'
import {Letterbox} from '@gamepark/react-components'
import {useState} from 'react'
import {displayScreenMove} from './DisplayScreen'
import GameLocalView from './GameLocalView'
import Card from './material/Card'
import ScreenDisplay from './ScreenDisplay'

type Props = {
  game: GameLocalView
}

export default function GameDisplay({game}: Props) {
  const [animal, setAnimal] = useState<GuardianAnimal>()
  const play = usePlay()
  const playerId = usePlayerId<SpiritOfNature>()
  return (
    <Letterbox css={letterBoxStyle} width={185} height={100}>
      <ScreenDisplay game={game}/>
      <div css={sampleCss} onClick={() => playerId && play(displayScreenMove(game.displayedPlayer ? undefined : SpiritOfNature.Autumn), {local: true})}>
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