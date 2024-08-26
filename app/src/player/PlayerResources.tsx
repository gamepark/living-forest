/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Resource, resources } from '@gamepark/living-forest/material/Resource'
import { PlayerState } from '@gamepark/living-forest/rules/helper/PlayerState'
import { Player } from '@gamepark/react-client'
import { FC } from 'react'
import { PlayerResource } from './PlayerResource'

export type PlayerResourcesProps = {
  player: Player
  state: PlayerState
}

export const PlayerResources: FC<PlayerResourcesProps> = (props) => {
  const { state } = props;

  return (
    <div css={resourcesStyle}>
      { resources.filter((r) => r !== Resource.SacredFlower).map((r) => (
        <PlayerResource key={r} type={r} value={state.getResources(r, false)} />
      ))}
    </div>
  )

}


const resourcesStyle = css`
  display: flex;
  flex-direction: row;
  width: calc(100% - 2em);
  position: absolute;
  top: 11.2em;
  justify-content: space-between;
  margin: 1em; 
`
