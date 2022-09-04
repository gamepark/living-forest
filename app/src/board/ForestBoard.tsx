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
            <Reserve game={game} spirit={player.spirit} />
            <CircleOfSpirits circleOfSpirits={game.circle} />
            <ProtectiveTreeDisperser dispenser={game.dispenser} spirit={player.spirit} />
            <FragmentTilesStack actionMoves={player.actionMoves} phase={game.phase} />
        </div>
    );
};

const forest = css`
position:absolute;
top:0em;;
left:0em;;
`