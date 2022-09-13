/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Phase from "@gamepark/living-forest/Phase";
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature";
import { usePlay } from '@gamepark/react-client';
import { useTranslation } from "react-i18next";
import { shuffleDiscardMove } from '../../../rules/src/moves/ShuffleDiscard';
import { Button } from "./Button";

type Props = {
  spirit: SpiritOfNature
  ready: boolean
}

export default function ShuffleButton({ spirit, ready }: Props) {
  const { t } = useTranslation()
  const play = usePlay()
  const shuffle = () => { !ready && play(shuffleDiscardMove(spirit)) }

  return Phase.GuardianAnimals && <Button spirit={spirit} css={[button]} onClick={shuffle} >{t("Shuffle draft")}</Button>
}

const button = css`
  position: absolute;
  z-index: 100;
  left: 4.7em;
  top: 19em;
  font-size:3.5em;
`