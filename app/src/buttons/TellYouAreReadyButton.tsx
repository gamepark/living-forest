/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { tellYouAreReadyMove } from "@gamepark/living-forest/moves/TellYouAreReady";
import Phase from "@gamepark/living-forest/Phase";
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature";
import { usePlay, usePlayerId } from "@gamepark/react-client";
import { useTranslation } from "react-i18next";
import { Button } from './Button';

type Props = {
  spirit: SpiritOfNature
  phase: Phase
  ready: boolean
  displayed?: SpiritOfNature
  lineNumber: number
}

export default function TellButton({ spirit, phase, ready, displayed, lineNumber }: Props) {
  const { t } = useTranslation()
  const play = usePlay()
  const tell = () => { play(tellYouAreReadyMove(spirit), { delayed: true }) }
  const playerId = usePlayerId<SpiritOfNature>()

  if (lineNumber > 0 && phase === Phase.GuardianAnimals && !ready && playerId === displayed) return <Button spirit={spirit} css={[button]} onClick={tell}>{t("Stop")}</Button>
  return null
}

const button = css`
  position: absolute;
  z-index: 100;
  left: 6.5em;
  top: 14.5em;
  font-size:3.5em;
`