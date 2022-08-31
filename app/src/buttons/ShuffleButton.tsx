/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Phase from "@gamepark/living-forest/Phase";
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature";
import { usePlay } from '@gamepark/react-client';
import { useTranslation } from "react-i18next";
import { Button } from "./Button";
import { shuffleDiscardMove } from '../../../rules/src/moves/ShuffleDiscard';

type Props = {
  fragment: number
  spirit: SpiritOfNature
  phase: Phase
  ready: boolean
  displayed?: SpiritOfNature
}

export default function ShuffleButton({ spirit, }: Props) {
  const { t } = useTranslation()
  const play = usePlay()
  const shuffle = () => { play(shuffleDiscardMove(spirit)) }

  return <Button spirit={spirit} css={[button]} onClick={shuffle} >{t("Discard")}</Button>
}

const button = css`
  position: absolute;
  z-index: 100;
  left: 10em;
  top: 14.5em;
  font-size:3.5em;
`