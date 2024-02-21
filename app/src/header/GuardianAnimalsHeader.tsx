/** @jsxImportSource @emotion/react */
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'
import { PlayMoveButton, useLegalMoves, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { isCustomMoveType, isEndPlayerTurn, isMoveItemType, MaterialMove } from '@gamepark/rules-api'
import { Trans, useTranslation } from 'react-i18next'

export const GuardianAnimalsHeader = () => {
  const rules = useRules<LivingForestRules>()!
  const legalMoves = useLegalMoves<MaterialMove>()
  const pass = legalMoves.find(isEndPlayerTurn)
  const spendFragment = legalMoves.find(isMoveItemType(MaterialType.FragmentTile))
  const draw = legalMoves.find((move) => isMoveItemType(MaterialType.GuardianAnimalCard)(move) || isCustomMoveType(CustomMoveType.ShuffleAndDraw)(move))
  const { t } = useTranslation()
  const playerId = usePlayerId()
  const remainingPlayers = rules.game.rule?.players ?? []
  const iHaveFinished = playerId && !remainingPlayers.includes(playerId)
  const remainingWithoutMe = remainingPlayers.filter((p) => p !== playerId)
  const lastPlayer = remainingWithoutMe.length === 1 ? remainingWithoutMe[0] : undefined
  const lastPlayerName = usePlayerName(lastPlayer)

  if (playerId && !iHaveFinished) {
    const hasCardInHelpLine = rules.material(MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(playerId).length > 0
    const hasFragment = rules.material(MaterialType.FragmentTile).location(LocationType.PlayerFragmentTileStack).player(playerId).length > 0
    const hasDrawableCards = rules
      .material(MaterialType.GuardianAnimalCard)
      .location((location) => LocationType.PlayerDiscardStack === location.type || LocationType.PlayerDeckStack === location.type)
      .player(playerId)
      .length > 0


    if (hasDrawableCards && !hasFragment && hasCardInHelpLine) {
      return (
        <Trans defaults="header.draw-pass">
          <PlayMoveButton move={draw}/>
          <PlayMoveButton move={pass}/>
        </Trans>
      )
    }

      if ((!hasCardInHelpLine || !hasFragment) && hasDrawableCards) {
      return (
        <Trans defaults="header.draw">
          <PlayMoveButton move={draw}/>
        </Trans>
      )
    }

    if (!hasDrawableCards && !hasFragment) {
      return (
        <Trans defaults="header.pass">
          <PlayMoveButton move={pass}/>
        </Trans>
      )
    }

    return (
      <Trans defaults="header.draw-fragment-pass">
        <PlayMoveButton move={draw}/>
        <PlayMoveButton move={spendFragment}/>
        <PlayMoveButton move={pass}/>
      </Trans>
    )
  } else {
    if (lastPlayer && lastPlayer !== playerId) {
      if (rules.material(MaterialType.GuardianAnimalCard).location(LocationType.HelpLine).player(lastPlayer).length) {
        return <>{t('header.draw.opponent.one', { player: lastPlayerName })} </>
      } else {
        return <>{t('header.draw.opponent.one.must', { player: lastPlayerName })} </>
      }
    }

    return <>{t('header.draw-card.opponent')} </>
  }
}
