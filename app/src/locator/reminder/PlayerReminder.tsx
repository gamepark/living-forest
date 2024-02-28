/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { Avatar, usePlayerName } from '@gamepark/react-game'
import { FC } from 'react'
import { Location } from "@gamepark/rules-api"
import { getColor } from '../../utils/ColorUtils'

type PlayerReminderProps = {
  location: Location
}
export const PlayerReminder: FC<PlayerReminderProps> = (props) => {
  const { location } = props
  const { player } = location
  const playerName = usePlayerName(player)

  return (
    <div css={reminderStyle}>
      <Avatar css={avatarStyle} playerId={player} />
      <span css={playerNameStyle(player!)}>{playerName}</span>
    </div>
  )
}

const reminderStyle = css`
  height: 4.5em;
  color: white;
  white-space: nowrap;
  display: flex;
  pointer-events: none;
  font-size: 0.8em;
`

const avatarStyle = css`
  position: absolute;
  top: -0.1em;
  left: -0.5em;
  border-radius: 100%;
  height: 5em;
  width: 5em;
  color: black;
`

const playerNameStyle = (spirit: SpiritOfNature) => css`
  font-size: 2.4em;
  padding: 0.2em;
  padding-left: 2.2em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 20em;
  align-self: center;
  flex: 1;
  border-radius: 1em;
  background: ${getColor(spirit)}80;
  background: linear-gradient(90deg, ${getColor(spirit)} 0%, ${getColor(spirit)}00 80%);
`
