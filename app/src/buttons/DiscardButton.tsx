/** @jsxImportSource @emotion/react */
import Phase from '@gamepark/living-forest/Phase'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'

type Props = {
  fragment: number
  spirit: SpiritOfNature
  phase: Phase
  ready: boolean
  displayed?: SpiritOfNature
  lineNumber: number
}

export default function DiscardButton(_props: Props) {

  //if (lineNumber > 0 && phase === Phase.GuardianAnimals && !ready && fragment > 0 && playerId === displayed) return <Button spirit={spirit} css={[button]} onClick={tell} >{t("Discard")}</Button>
  return null
}
