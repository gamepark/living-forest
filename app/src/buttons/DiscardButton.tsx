/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { discardCardMove } from "@gamepark/living-forest/moves/DiscardCard";
import Phase from "@gamepark/living-forest/Phase";
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature";
import { usePlay, usePlayerId } from '@gamepark/react-client';
import { useTranslation } from "react-i18next";
import { Button } from "./Button";

type Props = {
  fragment: number
  spirit: SpiritOfNature
  phase: Phase
  ready: boolean
  displayed?: SpiritOfNature
  lineNumber: number
}

export default function DiscardButton({ fragment, spirit, phase, ready, displayed, lineNumber }: Props) {
  const { t } = useTranslation()
  const play = usePlay()
  const tell = () => { play(discardCardMove(spirit)) }
  const playerId = usePlayerId<SpiritOfNature>()

  if (lineNumber > 0 && phase === Phase.GuardianAnimals && !ready && fragment > 0 && playerId === displayed) return <Button spirit={spirit} css={[button]} onClick={tell} >{t("Discard")}</Button>
  return null
}

const button = css`
  position: absolute;
  z-index: 100;
  left: 10em;
  top: 14.5em;
  font-size:3.5em;
`