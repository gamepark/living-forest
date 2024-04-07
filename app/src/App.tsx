/** @jsxImportSource @emotion/react */
import { RuleId } from '@gamepark/living-forest/rules/RuleId'
import { FailuresDialog, FullscreenDialog, LoadingScreen, MaterialHeader, MaterialImageLoader, Menu, useGame } from '@gamepark/react-game'
import { MaterialGame } from '@gamepark/rules-api'
import { useEffect, useState } from 'react'
import GameDisplay from './GameDisplay'
import { ActionHeader } from './header/ActionHeader'
import { AttractAnimalsHeader } from './header/AttractAnimalsHeader'
import { EndOfTurnHeader } from './header/EndOfTurnHeader'
import { ExtinguishFireHeader } from './header/ExtinguishFireHeader'
import { GameOverHeader } from './header/GameOverHeader'
import { GuardianAnimalsArrivalHeader } from './header/GuardianAnimalsArrivalHeader'
import { GuardianAnimalsHeader } from './header/GuardianAnimalsHeader'
import { MoveOnCircleOfSpiritHeader } from './header/MoveOnCircleOfSpiritHeader'
import { OnibiAttacksPlayerHeader } from './header/OnibiAttacksPlayerHeader'
import { OnibiAttacksSacredTreeHeader } from './header/OnibiAttacksSacredTreeHeader'
import { PassingSacredTreeHeader } from './header/PassingSacredTreeHeader'
import { PickVictoryTileHeader } from './header/PickVictoryTileHeader'
import { PlantTreeHeader } from './header/PlantTreeHeader'
import { ReturnOfGuardianAnimalsHeader } from './header/ReturnOfGuardianAnimalsHeader'
import { TakeFragmentHeader } from './header/TakeFragmentHeader'
import { CallKodamaHeader } from './header/CallKodamaHeader'

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
      <MaterialHeader rulesStepsHeaders={headers} GameOver={GameOverHeader} loading={loading} />
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
  [RuleId.PickVictoryTile]: PickVictoryTileHeader,
  [RuleId.CallKodama]: CallKodamaHeader
}
