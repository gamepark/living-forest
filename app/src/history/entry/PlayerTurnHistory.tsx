/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Resource from '@gamepark/living-forest/material/Resource'
import { PlayerState } from '@gamepark/living-forest/rules/helper/PlayerState'
import { Memory } from '@gamepark/living-forest/rules/Memory'
import { MaterialHistoryProps, Picture, usePlayerId, usePlayerName } from '@gamepark/react-game'
import { StartPlayerTurn } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans } from 'react-i18next'
import { ResourceImage } from '../../material/description/GuardianAnimalCardRules'
import { ActionHistory } from './ActionHistory'

type PlayerTurnHistoryProps = { move: StartPlayerTurn } & MaterialHistoryProps

export const PlayerTurnHistory: FC<PlayerTurnHistoryProps> = (props) => {
  const { move, context } = props
  const { game } = context
  const playerId = usePlayerId()
  const player = (move as StartPlayerTurn).player!
  const itsMe = playerId && playerId === player
  const name = usePlayerName(player)
  const playerState = new PlayerState(context.game, player)
  const actionCount = playerState.solidarityGregariousDifference === 3? 1: 2
  const current = !context.game.memory?.[Memory.Actions]? 1: (actionCount - context.game.memory[Memory.Actions] + 1)

  const state = new PlayerState(game, player)
  return (
    <>
    <ActionHistory playerId={player} context={context} border={{top: true}}>
      <div css={pictureCss}>
        <Trans defaults={itsMe ? 'history.player-turn.me' : 'history.player-turn'} values={{ player: name, action: current }}>
          <strong/>
          <>
            <span>{state.sunResources} <Picture src={ResourceImage[Resource.Sun]}/></span>
            <span>{state.waterResources} <Picture src={ResourceImage[Resource.Drop]}/></span>
            <span>{state.seedResources} <Picture src={ResourceImage[Resource.Seed]}/></span>
            <span>{state.windResources} <Picture src={ResourceImage[Resource.Wind]}/></span>
          </>
        </Trans>
      </div>
    </ActionHistory>
    </>
  )
}

const pictureCss = css`
  white-space: break-spaces;
  > picture, img {
    height: 1.5em;
    width: 1.5em;
    vertical-align: sub;
  }

  picture {
    margin-right: 0.3em;
  }
`