/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { FailuresDialog, FullscreenDialog, Menu, useGame } from '@gamepark/react-client'
import { Header, ImagesLoader, LoadingScreen } from '@gamepark/react-components'
import { useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd-multi-backend'
import HTML5ToTouch from 'react-dnd-multi-backend/dist/cjs/HTML5toTouch'
import GameDisplay from './GameDisplay'
import GameLocalView from './GameLocalView'
import HeaderText from './HeaderText'
import Images from './images/Images'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature';

export default function App() {

  const game = useGame<GameLocalView>()

  const [imagesLoading, setImagesLoading] = useState(true)
  const [isJustDisplayed, setJustDisplayed] = useState(true)
  useEffect(() => {
    setTimeout(() => setJustDisplayed(false), 2000)
  }, [])
  const loading = !game || imagesLoading || isJustDisplayed

  return (
    <DndProvider options={HTML5ToTouch}>
      {!loading && <GameDisplay game={game} />}
      <LoadingScreen display={loading} author="Aske Christiansen" artist="Apolline Etienne" publisher="Ludonaute" developer="Laetitia Decoudu" />
      <Header><HeaderText loading={loading} game={game} /></Header>
      <Menu />
      <FailuresDialog />
      <FullscreenDialog />
      <ImagesLoader images={Object.values(Images)} onImagesLoad={() => setImagesLoading(false)} />
      <Global styles={backgroundImage(game?.displayedPlayer)} />
    </DndProvider>
  )
}
const spiritBackground: Record<SpiritOfNature, string> = {
  [SpiritOfNature.Autumn]: Images.autumnBack,
  [SpiritOfNature.Summer]: Images.autumnBack,
  [SpiritOfNature.Spring]: Images.autumnBack,
  [SpiritOfNature.Winter]: Images.autumnBack,

}
function backgroundImage(spirit?: SpiritOfNature) {
  return css`
  #root{
    background-image:url(${spirit ? spiritBackground[spirit] : Images.forestBack});
    background-size:cover;
    background-position:center;
    &:before {
      background-color: ${spirit ? '' : 'rgba(255, 255, 255, 0.5)'};
    }
  }
  `
}