/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { LocationType } from '@gamepark/living-forest/material/LocationType'
import { MaterialType } from '@gamepark/living-forest/material/MaterialType'
import { CustomMoveType } from '@gamepark/living-forest/rules/CustomMoveType'
import { PlayMoveButton, useLegalMoves, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { isCustomMoveType, isEndPlayerTurn, isMoveItemType, MaterialMove } from '@gamepark/rules-api'
import { Fragment } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Images from '../images/Images'
import { alignIcon } from '../material/description/help/GuardianAnimalCardHelp'

export const GuardianAnimalsHeader = () => {
  const rules = useRules<LivingForestRules>()!
  const legalMoves = useLegalMoves<MaterialMove>()
  const pass = legalMoves.find(isEndPlayerTurn)
  const spendFragment = legalMoves.find(isMoveItemType(MaterialType.FragmentTile))
  const draw = legalMoves.find((move) => isMoveItemType(MaterialType.GuardianAnimalCard)(move) || isCustomMoveType(CustomMoveType.ShuffleAndDraw)(move))
  const drawUntilSolitary = legalMoves.find((move) => isCustomMoveType(CustomMoveType.DrawUntilSolitary)(move))
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


    //header.guadian-animal
    // header.fragment
    // header.draw-until-solitary
    // header.draw
    // header.pass
    const actions = []
    if (hasDrawableCards) actions.push(<PlayMoveButton key="d" move={draw}>{t('header.guardian-animal.draw')}</PlayMoveButton>)

    if (hasDrawableCards && drawUntilSolitary) {
      actions.push(
        <PlayMoveButton key="ds" move={drawUntilSolitary} css={flexButton}>
          <div  css={alignIcon}>
          <Trans defaults="header.guardian-animal.draw-until-solitary">
            <div css={solitaryCss} />
          </Trans>

          </div>
        </PlayMoveButton>
      )
    }

    if (hasCardInHelpLine && hasFragment) actions.push(<PlayMoveButton key="f" move={spendFragment}>{t('header.guardian-animal.fragment')}</PlayMoveButton>)
    if (hasCardInHelpLine) actions.push(<PlayMoveButton key="p" move={pass}>{t('header.guardian-animal.pass')}</PlayMoveButton>)
    let content = undefined
    if (actions.length === 1) {
      content = actions
    } else {
      content = <>
        {actions.slice(0, -1).map((a, index) => (
          <Fragment key={index}>{a}{index !== (actions.length - 2)? ', ': ''}</Fragment>
        ))} {t('header.or')} {actions.slice(-1)}
      </>
    }

    return (
      <>
        {t('header.guardian-animal')} {content}
      </>
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

const solitaryCss = css`
  background: url(${Images.solitary});
  background-size: cover;
  height: 1em;
  width: 1em;
  margin-left: 0.3em;
  margin-top: 0.07em;
`

const flexButton = css`
`
