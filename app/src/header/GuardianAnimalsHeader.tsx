/** @jsxImportSource @emotion/react */
import { Trans } from 'react-i18next'
import { isCustomMoveType, isEndPlayerTurn, isMoveItemType, MaterialMove } from '@gamepark/rules-api'
import { PlayMoveButton, useLegalMoves } from '@gamepark/react-game'
import { CustomMoveType } from '@gamepark/living-forest/refacto/rules/CustomMoveType'
import { MaterialType } from '@gamepark/living-forest/refacto/material/MaterialType'

export const GuardianAnimalsHeader = () => {
  const legalMoves = useLegalMoves<MaterialMove>()
  const shuffleAndDraw = legalMoves.find(isCustomMoveType(CustomMoveType.ShuffleAndDraw))
  const pass = legalMoves.find(isEndPlayerTurn)
  const spendFragment = legalMoves.find(isMoveItemType(MaterialType.FragmentTile))
  const draw = legalMoves.find(isMoveItemType(MaterialType.GuardianAnimalCard))
  if (shuffleAndDraw && pass) {
    return <Trans defaults="<0>Shuffle and draw</0> or <1>Pass</1>">
      <PlayMoveButton move={shuffleAndDraw}/>
      <PlayMoveButton move={pass}/>
    </Trans>
  } else if (pass && spendFragment && draw) {
    return <Trans defaults="<0>Draw a card</0>, <1>Use a fragment</1> or <2>Pass</2>">
      <PlayMoveButton move={draw}/>
      <PlayMoveButton move={spendFragment}/>
      <PlayMoveButton move={pass}/>
    </Trans>
  } else if (pass && spendFragment) {
    return <Trans defaults="<0>Use a fragment</0> or <1>Pass</1>">
      <PlayMoveButton move={spendFragment}/>
      <PlayMoveButton move={pass}/>
    </Trans>
  } else if (draw && pass) {
    return <Trans defaults="<0>Draw a card</0> or <1>Pass</1>">
      <PlayMoveButton move={draw}/>
      <PlayMoveButton move={pass}/>
    </Trans>
  } else if (draw) {
    return <Trans defaults="<0>Draw a card</0>">
      <PlayMoveButton move={draw}/>
    </Trans>
  } else {
    return <>Guardian animals</>
  }
}
