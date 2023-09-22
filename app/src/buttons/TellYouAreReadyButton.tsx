/** @jsxImportSource @emotion/react */
import Phase from '@gamepark/living-forest/Phase'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'

type Props = {
  spirit: SpiritOfNature
  phase: Phase
  ready: boolean
  displayed?: SpiritOfNature
  lineNumber: number
}

export default function TellButton(_props: Props) {
  //if (lineNumber > 0 && phase === Phase.GuardianAnimals && !ready && playerId === displayed) return <Button spirit={spirit} css={[button]} onClick={tell}>{t("Stop")}</Button>
  return null
}