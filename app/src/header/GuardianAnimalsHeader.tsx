/** @jsxImportSource @emotion/react */
import { Trans, useTranslation } from 'react-i18next'
import { isCustomMoveType, isEndPlayerTurn, isMoveItemType, MaterialMove } from '@gamepark/rules-api'
import { PlayMoveButton, useLegalMoves } from '@gamepark/react-game'
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'

export const GuardianAnimalsHeader = () => {
  const legalMoves = useLegalMoves<MaterialMove>()
  const shuffleAndDraw = legalMoves.find(isCustomMoveType(CustomMoveType.ShuffleAndDraw))
  const pass = legalMoves.find(isEndPlayerTurn)
  const spendFragment = legalMoves.find(isMoveItemType(MaterialType.FragmentTile))
  const draw = legalMoves.find(isMoveItemType(MaterialType.GuardianAnimalCard))
  const { t } = useTranslation()
  if (shuffleAndDraw && pass) {
    return <Trans defaults="header.shuffle-pass">
      <PlayMoveButton move={shuffleAndDraw} />
      <PlayMoveButton move={pass} />
    </Trans>
  } else if (pass && spendFragment && draw) {
    return <Trans defaults="header.draw-fragment-pass">
      <PlayMoveButton move={draw} />
      <PlayMoveButton move={spendFragment} />
      <PlayMoveButton move={pass} />
    </Trans>
  } else if (pass && spendFragment) {
    return <Trans defaults="header.fragment-pass">
      <PlayMoveButton move={spendFragment} />
      <PlayMoveButton move={pass} />
    </Trans>
  } else if (draw && pass) {
    return <Trans defaults="header.draw-pass">
      <PlayMoveButton move={draw} />
      <PlayMoveButton move={pass} />
    </Trans>
  } else if (draw) {
    return <Trans defaults="header.draw">
      <PlayMoveButton move={draw} />
    </Trans>
  } else if (shuffleAndDraw) {
    return <Trans defaults="header.shuffle">
      <PlayMoveButton move={shuffleAndDraw} />
    </Trans>
  } else if (pass) {
    return <Trans defaults="header.pass">
      <PlayMoveButton move={pass} />
    </Trans>
  } else {
    return <>{t('header.draw-card.opponent')} </>
  }
}
