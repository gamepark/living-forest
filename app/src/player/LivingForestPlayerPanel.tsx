/** @jsxImportSource @emotion/react */
import { FC, HTMLAttributes, useMemo, useState } from 'react'
import { Player } from '@gamepark/react-client'
import { PlayerPanel, useRules } from '@gamepark/react-game'
import { LivingForestRules } from '@gamepark/living-forest/LivingForestRules'
import { PlayerState } from '@gamepark/living-forest/rules/helper/PlayerState'
import { PlayerResources } from './PlayerResources'
import { PlayerVictories } from './PlayerVictories'
import { PlayerDialog } from './dialog/PlayerDialog'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'

type LivingForestPlayerPanelProps = {
  player: Player
} & HTMLAttributes<HTMLDivElement>

export const LivingForestPlayerPanel: FC<LivingForestPlayerPanelProps> = (props) => {
  const [playerDialog, setPlayerDialog] = useState<SpiritOfNature | undefined>()
  const { player, ...rest } = props
  const rules = useRules<LivingForestRules>()!
  const state = useMemo(() => new PlayerState(rules.game, player.id), [rules.game, player.id])
  return (<>
    <PlayerPanel key={player.id} playerId={player.id} {...rest}>
      <PlayerResources state={state} player={player} />
      <PlayerVictories state={state} player={player} />
    </PlayerPanel>
    {<PlayerDialog open={!!playerDialog} player={playerDialog!} close={() => setPlayerDialog(undefined)} />}
  </>
  )

}