/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { usePlay, usePlayerId } from '@gamepark/react-client'
import { displayScreenMove } from '../DisplayScreen'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import GameLocalView from '../GameLocalView'
import PlayerView from '@gamepark/living-forest/PlayerView'
import { panelHeight, panelWidth, panelLeft, panelBottom } from '../styles'
import Images from '../images/Images'


type Props = {
  game: GameLocalView
  player: PlayerView
}

export default function Panels({ game, player }: Props) {
  // const [animal, setAnimal] = useState<GuardianAnimal>()
  const play = usePlay()
  const playerId = usePlayerId<SpiritOfNature>()


  if (game.displayedPlayer) { }
  return (
    <>
      <div css={forest} onClick={() => playerId && play(displayScreenMove(), { local: true })}>

      </div>
      <div css={playerPanel(playerId)} onClick={() => playerId && play(displayScreenMove(player.spirit), { local: true })}>

      </div>
    </>
  );

}
const forest = css`
  position: absolute;
  bottom: ${panelBottom}em;
  left: ${panelLeft}em;
  height:${panelHeight}em;
  width:${panelWidth}em;
  background-image:url(${Images.forestBack});
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.5em;
  box-shadow: 0 0 0.3em black;
  border-radius:0.5em;
`
const playerPanelBackground: Record<SpiritOfNature, string> = {
  [SpiritOfNature.Autumn]: Images.autumnVerso,
  [SpiritOfNature.Summer]: Images.autumnVerso,
  [SpiritOfNature.Spring]: Images.autumnVerso,
  [SpiritOfNature.Winter]: Images.autumnVerso,

}
function playerPanel(spirit?: SpiritOfNature) {
  return css`
  position: absolute;
  bottom: ${panelBottom}em;
  left:  ${panelLeft + panelWidth + 0.2}em;
  height:${panelHeight}em;
  width:${panelWidth}em;
  padding: 0.5em;
  box-shadow: 0 0 0.3em black;
  border-radius:0.5em;
  background-image:url(${spirit ? playerPanelBackground[spirit] : Images.forestBack});
  background-size:cover;
  background-position:center;
  &:before {
    background-color: rgba(255, 255, 255, 0.5;
  }
  `
}