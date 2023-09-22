/** @jsxImportSource @emotion/react */
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { ButtonHTMLAttributes } from 'react'

type Props = {
  spirit: SpiritOfNature
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function ValidateButton(_props: Props) {

  return null
  //return <Button spirit={spirit} css={[button]} onClick={() => play(validateMove(spirit))}>{children}</Button>
}