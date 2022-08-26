/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { getPlayerName } from '@gamepark/living-forest/LivingForestOptions'
import PlayerView from '@gamepark/living-forest/PlayerView'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import { Avatar, GamePoints, PlayerTimer, usePlay, usePlayer } from '@gamepark/react-client'
import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { displayScreenMove } from '../DisplayScreen'
import Images from '../images/Images'
import { firstPlayerHeight, firstPlayerLeft, firstPlayerTop, firstPlayerWith, panelHeight, panelWidth } from '../styles'
import Resources from './Resources'
import Victories from './Victories'

type Props = {
    player: PlayerView
    sacredTreeOwner: boolean
} & HTMLAttributes<HTMLDivElement>

export default function PlayerPanel({ player, sacredTreeOwner, ...props }: Props) {
    const play = usePlay()
    const info = usePlayer(player.spirit)
    const { t } = useTranslation()

    return (
        <div key={player.spirit} css={playerPanel(player.spirit,)} onClick={() => play(displayScreenMove(player.spirit), { local: true })} {...props} >
            <Avatar playerId={player.spirit} css={avatarCss} />
            <h3 css={titleStyle}>
                <span css={[nameStyle]}>{info?.name || getPlayerName(player.spirit, t)}</span>
                <PlayerTimer playerId={player.spirit} css={css`flex-shrink: 0`} />
                <GamePoints playerId={player.spirit} css={css`flex-shrink: 0`} />
            </h3>
            {sacredTreeOwner && <div css={firstPlayer}></div>}
            <div css={gridContainer}>
                <Victories victory={player.victory} line={player.line} />
                <Resources line={player.line} forest={player.forest} victoryTile={player.victoryTiles} bonus={player.bonus} />
            </div>
        </div>
    );

}

const avatarCss = css`
    position: absolute;
    top: 0.75em;
    left: 1em;
    width: 5em;
    height: 5em;
`

const titleStyle = css`
    color: #333333;
    position: absolute;
    top: 0.5em;
    left: 2.5em;
    right: 0.5em;
    margin: 0;
    font-size: 2.9em;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
`

const nameStyle = css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`
const firstPlayer = css`
    position: absolute;
    top: ${firstPlayerTop}em;
    left: ${firstPlayerLeft}em;
    height:${firstPlayerHeight}em;
    width:${firstPlayerWith}em;
    background-image:url(${Images.firstPlayer});
    background-size:cover;
    background-position:center;
    filter: drop-shadow(0 0 0.2em black);
`
const playerPanelBackground: Record<SpiritOfNature, string> = {
    [SpiritOfNature.Autumn]: Images.autumnVerso,
    [SpiritOfNature.Summer]: Images.summerVerso,
    [SpiritOfNature.Spring]: Images.springVerso,
    [SpiritOfNature.Winter]: Images.winterVerso,

}
function playerPanel(spirit: SpiritOfNature) {
    return css`
    height:${panelHeight}em;
    width:${panelWidth}em;
    padding: 0.5em;
    border-radius:0.5em;
    background-image:url(${playerPanelBackground[spirit]});
    background-size:cover;
    background-position:center;
    &:before {
        background-color: rgba(255, 255, 255, 0.5);
        content:"";
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        border-radius: inherit;
        }
    box-shadow: 0 0 0.3em black;
    `
}
const gridContainer = css`
    position:absolute;
    top:5.5em;
    left:7em;
    display:grid;
    grid-template-columns:6em 6em 6em 6em;
    grid-row-gap: 1em;
`