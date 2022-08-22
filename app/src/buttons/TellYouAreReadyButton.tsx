/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { tellYouAreReadyMove } from "@gamepark/living-forest/moves/TellYouAreReady";
import Phase from "@gamepark/living-forest/Phase";
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature";
import { usePlay } from "@gamepark/react-client";
import { useTranslation } from "react-i18next";

type Props = {
  spirit: SpiritOfNature
  phase: Phase
  ready: boolean
}

export default function TellButton({ spirit, phase, ready }: Props) {
  const { t } = useTranslation()
  const play = usePlay()
  const tell = () => { play(tellYouAreReadyMove(spirit), { delayed: true }) }
  if (phase === Phase.GuardianAnimals && ready === false) {
    return <button css={[button]} onClick={tell} >{t("Stop")}</button>
  }
  return null
}


const button = css`
  position: absolute;
  z-index: 100;
  left: 9em;
  top: 16em;
  font-size: 3.2em;
  font-weight: lighter;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 1em;
  padding: 0.3em 0.6em;
  transform:translateX(-50%);

  & svg {
    margin-right: 0.3em;
  }

  &:hover, &:focus {
    transform: translateX(-50%) translateY(1px) scale(1.05);
    cursor: pointer;
  }

  &:active {
    border-style: inset;
    transform: translateX(-50%) translateY(1px);
  }
`