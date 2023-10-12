/** @jsxImportSource @emotion/react */
import { FailuresDialog, FullscreenDialog, LoadingScreen, MaterialHeader, MaterialImageLoader, Menu, useGame } from '@gamepark/react-game'
import { useEffect, useState } from 'react'
import GameDisplay from './GameDisplay'
import { MaterialGame } from '@gamepark/rules-api'
import { RuleId } from '@gamepark/living-forest/rules/RuleId'
import { GuardianAnimalsHeader } from './header/GuardianAnimalsHeader'
import { ActionHeader } from './header/ActionHeader'
import { GameOverHeader } from './header/GameOverHeader'
import { AttractAnimalsHeader } from './header/AttractAnimalsHeader'
import { ExtinguishFireHeader } from './header/ExtinguishFireHeader'
import { TakeFragmentHeader } from './header/TakeFragmentHeader'
import { PlantTreeHeader } from './header/PlantTreeHeader'
import { EndOfTurnHeader } from './header/EndOfTurnHeader'
import { OnibiAttacksPlayerHeader } from './header/OnibiAttacksPlayerHeader'
import { OnibiAttacksSacredTreeHeader } from './header/OnibiAttacksSacredTreeHeader'
import { GuardianAnimalsArrivalHeader } from './header/GuardianAnimalsArrivalHeader'
import { ReturnOfGuardianAnimalsHeader } from './header/ReturnOfGuardianAnimalsHeader'
import { PassingSacredTreeHeader } from './header/PassingSacredTreeHeader'
import { MoveOnCircleOfSpiritHeader } from './header/MoveOnCircleOfSpiritHeader'
import { PickVictoryTileHeader } from './header/PickVictoryTileHeader'

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
      <GameDisplay />
      <LoadingScreen display={loading} author="Aske Christiansen" artist="Apolline Etienne" publisher="Ludonaute" developer="Laetitia Decoudu" />
      <MaterialImageLoader onImagesLoad={() => setImagesLoading(false)} />
      <MaterialHeader rulesStepsHeaders={headers} GameOver={GameOverHeader} />
      <Menu />
      <FailuresDialog />
      <FullscreenDialog />
    </>
  )
}

const headers: Record<RuleId, () => any> = {
  [RuleId.GuardianAnimals]: GuardianAnimalsHeader,
  [RuleId.Action]: ActionHeader,
  [RuleId.AttractAnimals]: AttractAnimalsHeader,
  [RuleId.ExtinguishFire]: ExtinguishFireHeader,
  [RuleId.TakeFragment]: TakeFragmentHeader,
  [RuleId.PlantTree]: PlantTreeHeader,
  [RuleId.EndOfTurn]: EndOfTurnHeader,
  [RuleId.OnibiAttacksPlayer]: OnibiAttacksPlayerHeader,
  [RuleId.OnibiAttacksSacredTree]: OnibiAttacksSacredTreeHeader,
  [RuleId.GuardianAnimalsArrival]: GuardianAnimalsArrivalHeader,
  [RuleId.ReturnOfGuardianAnimals]: ReturnOfGuardianAnimalsHeader,
  [RuleId.PassingSacredTree]: PassingSacredTreeHeader,
  [RuleId.MoveOnCircleOfSpirit]: MoveOnCircleOfSpiritHeader,
  [RuleId.PickVictoryTile]: PickVictoryTileHeader
}