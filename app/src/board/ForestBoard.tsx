/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PlayerView from "@gamepark/living-forest/PlayerView";
import GameLocalView from "../GameLocalView";
import CircleOfSpirits from "./CircleOfSpirits";
import { FragmentTilesStack } from "./FragmentTilesStack";
import ProtectiveTreeDisperser from "./ProtectiveTreeDisperser";
import Reserve from "./Reserve";

type Props = {
  game: GameLocalView
  player: PlayerView
}

export default function ForestBoard({ game, player }: Props) {

  return (
    <div css={forest}>
      <Reserve game={game} spirit={player.spirit} actionMoves={player.actionMoves} ongoingMove={player.ongoingMove} bonus={player.bonus} ready={player.ready} line={player.line} attractedGuardianAnimal={player.attractedGuardianAnimal} />
      <CircleOfSpirits circleOfSpirits={game.circle} actionMoves={player.actionMoves} ongoingMove={player.ongoingMove} bonus={player.bonus} ready={player.ready} line={player.line} position={game.circle.position} />
      <ProtectiveTreeDisperser dispenser={game.dispenser} spirit={player.spirit} actionMoves={player.actionMoves} ongoingMove={player.ongoingMove} bonus={player.bonus} ready={player.ready} line={player.line} players={game.players.length} />
      <FragmentTilesStack actionMoves={player.actionMoves} phase={game.phase} players={game.players.length} />
    </div>
  );
};

const forest = css`
position:absolute;
top:0em;;
left:0em;;
`
