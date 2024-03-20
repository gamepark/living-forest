/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Resource from '@gamepark/living-forest/material/Resource'
import { PlayerState } from '@gamepark/living-forest/rules/helper/PlayerState'
import { Memory } from '@gamepark/living-forest/rules/Memory'
import { HistoryEntry, MaterialHistoryProps, Picture, usePlayerName } from '@gamepark/react-game'
import { StartPlayerTurn } from '@gamepark/rules-api'
import { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { ResourceImage } from '../../material/description/help/GuardianAnimalCardHelp'
import { getColor } from '../../utils/ColorUtils'
import { bold } from '../LivingForestHistory'

type PlayerTurnHistoryProps = { move: StartPlayerTurn } & MaterialHistoryProps

export const PlayerTurnHistory: FC<PlayerTurnHistoryProps> = (props) => {
  const { move, context } = props
  const { game } = context
  const { t } = useTranslation()
  const player = (move as StartPlayerTurn).player!
  const name = usePlayerName(player)
  const playerState = new PlayerState(context.game, player)
  const actionCount = playerState.solidarityGregariousDifference === 3 ? 1 : 2
  const current = !context.game.memory?.[Memory.Actions] ? 1 : (actionCount - context.game.memory[Memory.Actions] + 1)
  const justStarts = !game.rule?.player

  const state = new PlayerState(game, player)
  return (
    <>
      {justStarts && <HistoryEntry borderTop borderBottom css={bold}>{t('history.players')}</HistoryEntry>}
      <HistoryEntry player={player} backgroundColor={`${getColor(player)}40`} borderTop={!justStarts}>
        <div css={pictureCss}>
          <Trans defaults="history.player-turn" values={{ player: name, action: current }}>
            <strong/>
            <>
              <span>{state.sunResources} <Picture src={ResourceImage[Resource.Sun]}/></span>
              <span>{state.waterResources} <Picture src={ResourceImage[Resource.Drop]}/></span>
              <span>{state.seedResources} <Picture src={ResourceImage[Resource.Seed]}/></span>
              <span>{state.windResources} <Picture src={ResourceImage[Resource.Wind]}/></span>
            </>
          </Trans>
        </div>
      </HistoryEntry>
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