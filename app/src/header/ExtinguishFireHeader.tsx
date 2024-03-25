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

export const ExtinguishFireHeader = () => {
  const { t } = useTranslation()
  const legalMoves = useLegalMoves<MaterialMove>()
  const pass = legalMoves.find((move) => isStartRule(move) && move.id === RuleId.Action)
  const rules = useRules<LivingForestRules>()!
  const player = usePlayerId()
  const activePlayer = rules.getActivePlayer()!
  const name = usePlayerName(activePlayer)
  const spent = new PlayerState(rules.game, activePlayer).getSpent(Resource.Drop)
  if (player === activePlayer) {
    if (pass) {
      return (
        <div css={[alignIcon, centerCss]}>
          <Trans defaults="header.extinguish-fire-pass.me">
            <PlayMoveButton css={marginLeft} move={pass}/>
            <DropResource/>
          </Trans>
        </div>
      )

    } else {
      return (
        <div css={[alignIcon, centerCss]}>
          <Trans defaults="header.extinguish-fire.me">
            <strong/>
            <DropResource/>
          </Trans>
        </div>
      )
    }
  } else {
    if (!spent) {
      return <>{t('header.extinguish-fire.must', { player: name })} </>
    }

    return <>{t('header.extinguish-fire', { player: name })} </>
  }
}

const DropResource: FC = () => {
  const rules = useRules<LivingForestRules>()!
  const player = usePlayerId()
  const state = new PlayerState(rules.game, player)
  return (
    <div css={resourceCss}>
      &nbsp;{state.waterResources}
      <div css={waterCss}/>
    </div>
  )
}

const resourceCss = css`
  margin-top: 0.05em;
  display: flex;
`

const waterCss = css`
  margin-top: 0.1em;
  height: 1em;
  width: 1em;
  background: url(${Images.drop});
  background-size: contain;
  background-position: center;
`

const marginLeft = css`
  margin-left: 0.3em;
`

const centerCss = css`
  justify-content: center;
`
