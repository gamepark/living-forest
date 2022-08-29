/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { validateMove } from "@gamepark/living-forest/moves/ValidateMove";
import SpiritOfNature from "@gamepark/living-forest/SpiritOfNature";
import { usePlay } from "@gamepark/react-client";
import { ButtonHTMLAttributes } from "react";
import { Button } from "./Button";


type Props = {
  spirit: SpiritOfNature
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function ValidateButton({ children, spirit }: Props) {
  const play = usePlay();

  return <Button spirit={spirit} css={[button]} onClick={() => play(validateMove(spirit))}>{children}</Button>
}

const button = css`
  z-index: 100;
  font-size:1em;
`