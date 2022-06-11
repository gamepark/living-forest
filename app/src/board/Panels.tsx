/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { usePlay, usePlayerId } from '@gamepark/react-client'
import { displayScreenMove } from '../DisplayScreen'
import SpiritOfNature from '@gamepark/living-forest/SpiritOfNature'
import GameLocalView from '../GameLocalView'
import { panelHeight, panelWidth, panelLeft, panelBottom } from '../styles'
import Images from '../images/Images'
import Resources from './Resources';



type Props = {
  game: GameLocalView
}

export default function Panels({ game }: Props) {
  // const [animal, setAnimal] = useState<GuardianAnimal>()
  const play = usePlay()
  const playerId = usePlayerId<SpiritOfNature>()


  return (
    <>
      <div css={forest} onClick={() => play(displayScreenMove(), { local: true })}>
      </div>
      {
        game.players.map((player, index) =>
          <div key={player.spirit} css={playerPanel(player.spirit, index, game.players.findIndex(player => player.spirit === playerId), game.players.length)} onClick={() => play(displayScreenMove(player.spirit), { local: true })}>

            <Resources line={player.line} />
          </div>
        )
      }
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
  background-size:cover;
  background-position:center;
  &:before {
    background-color: rgba(255, 255, 255, 0.8);
    }
  padding: 0.5em;
  box-shadow: 0 0 0.3em black;
  border-radius:0.5em;
`
const playerPanelBackground: Record<SpiritOfNature, string> = {
  [SpiritOfNature.Autumn]: Images.autumnVerso,
  [SpiritOfNature.Summer]: Images.summerVerso,
  [SpiritOfNature.Spring]: Images.springVerso,
  [SpiritOfNature.Winter]: Images.winterVerso,

}
function playerPanel(spirit: SpiritOfNature, index: number, playerIndex: number, players: number) {
  return css`
  position: absolute;
  bottom: ${panelBottom}em;
  left:  ${panelLeft + (panelWidth + 0.2) * ((players + index - playerIndex) % players + 1)}em;
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