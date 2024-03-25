/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import Resource from '@gamepark/living-forest/material/Resource'
import { PlayerState } from '@gamepark/living-forest/rules/helper/PlayerState'
import { RuleId } from '@gamepark/living-forest/rules/RuleId'
import { PlayMoveButton, useLegalMoves, usePlayerId, usePlayerName, useRules } from '@gamepark/react-game'
import { isStartRule, MaterialMove } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Images from '../images/Images'
import { alignIcon } from '../material/description/help/GuardianAnimalCardHelp'

export const AttractAnimalsHeader = () => {
  const legalMoves = useLegalMoves<MaterialMove>()
  const pass = legalMoves.find((move) => isStartRule(move) && move.id === RuleId.Action)
  const { t } = useTranslation()
  const rules = useRules<LivingForestRules>()!
  const player = usePlayerId()
  const activePlayer = rules.getActivePlayer()
  const name = usePlayerName(activePlayer)
  if (player === rules.getActivePlayer()) {
    if (pass) {
      return (
        <div css={[alignIcon, centerCss]}>
          <Trans defaults="header.attract-animal-pass">
            <PlayMoveButton css={marginLeft} move={pass}/>
            <SunResource/>
          </Trans>
        </div>
      )
    } else {
      return (
        <div css={[alignIcon, centerCss]}>
          <Trans defaults="header.attract-animal.me">
            <strong/>
            <SunResource/>
          </Trans>
        </div>
      )
    }
  } else {
    return <>{t('header.attract-animal', { player: name })} </>
  }

}

const SunResource: FC = () => {
  const rules = useRules<LivingForestRules>()!
  const player = usePlayerId()
  const state = new PlayerState(rules.game, player)
  return (
    <div css={resourceCss}>
      &nbsp;{state.getResources(Resource.Sun)}
      <div css={sunCss}/>
    </div>
  )
}

const resourceCss = css`
  margin-top: 0.05em;
  display: flex;
`

const sunCss = css`
  margin-top: 0.1em;
  height: 1em;
  width: 1em;
  background: url(${Images.sun});
  background-size: contain;
  background-position: center;
`

const centerCss = css`
  justify-content: center;
`

const marginLeft = css`
  margin-left: 0.3em;
`
