/** @jsxImportSource @emotion/react */
import { Trans } from 'react-i18next'
import { isCustomMoveType, isEndPlayerTurn, MaterialMove } from '@gamepark/rules-api'
import { PlayMoveButton, useLegalMoves } from '@gamepark/react-game'
import { CustomMoveType } from '@gamepark/living-forest/refacto/rules/CustomMoveType'

export const GuardianAnimalsHeader = () => {
  const legalMoves = useLegalMoves<MaterialMove>()
  const shuffleAndDraw = legalMoves.find(isCustomMoveType(CustomMoveType.ShuffleAndDraw))
  const pass = legalMoves.find(isEndPlayerTurn)
  if (shuffleAndDraw && pass) {
    return <Trans defaults="<0>Shuffle and draw</0> or <1>Pass</1>">
      <PlayMoveButton move={shuffleAndDraw}/>
      <PlayMoveButton move={pass}/>
    </Trans>
  } else {
    return <>Bloup</>
  }
}
