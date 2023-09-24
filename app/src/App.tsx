/** @jsxImportSource @emotion/react */
import { FailuresDialog, FullscreenDialog, LoadingScreen, MaterialHeader, MaterialImageLoader, Menu, useGame } from '@gamepark/react-game'
import { useEffect, useState } from 'react'
import GameDisplay from './GameDisplay'
import { MaterialGame } from '@gamepark/rules-api'
import { RuleId } from '@gamepark/living-forest/refacto/rules/RuleId'
import { GuardianAnimalsHeader } from './header/GuardianAnimalsHeader'

export default function App() {
  const game = useGame<MaterialGame>()
  const [isJustDisplayed, setJustDisplayed] = useState(true)
  const [isImagesLoading, setImagesLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setJustDisplayed(false), 2000)
  }, [])
  const loading = !game || isJustDisplayed || isImagesLoading
  return (
    <>
      <GameDisplay/>
      <LoadingScreen  display={loading} author="Aske Christiansen" artist="Apolline Etienne" publisher="Ludonaute" developer="Laetitia Decoudu" />
      <MaterialImageLoader onImagesLoad={() => setImagesLoading(false)}/>
      <MaterialHeader rulesStepsHeaders={headers} GameOver={() => <p>GameOver</p>} />
      <Menu/>
      <FailuresDialog/>
      <FullscreenDialog/>
    </>
  )
}

const headers: Record<RuleId, () => any> = {
  [RuleId.GuardianAnimals]: GuardianAnimalsHeader,
  [RuleId.Action]: () => <>Header</>,
  [RuleId.AttractAnimals]: () => <>Header</>,
  [RuleId.ExtinguishFire]: () => <>Header</>,
  [RuleId.TakeFragment]: () => <>Header</>,
  [RuleId.PlantTree]: () => <>Header</>,
  [RuleId.EndOfTurn]: () => <>Header</>,
  [RuleId.OnibiAttacksPlayer]: () => <>Header</>,
  [RuleId.OnibiAttacksSacredTree]: () => <>Header</>,
  [RuleId.GuardianAnimalsArrival]: () => <>Header</>,
  [RuleId.ReturnOfGuardianAnimals]: () => <>Header</>,
  [RuleId.PassingSacredTree]: () => <>Header</>,
  [RuleId.MoveOnCircleOfSpirit]: () => <>Header</>,
}