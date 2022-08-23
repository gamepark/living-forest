/** @jsxImportSource @emotion/react */

import GameLocalView from "../GameLocalView";
import CircleOfSpirits from "./CircleOfSpirits";
import FragmentTilesStack from "./FragmentTilesStack";
import ProtectiveTreeDisperser from "./ProtectiveTreeDisperser";
import Reserve from "./Reserve";
import { css } from '@emotion/react';
import PlayerView from "@gamepark/living-forest/PlayerView";
import { takeFragmentTileMove } from "@gamepark/living-forest/moves/TakeFragmentTile";
import { usePlay } from "@gamepark/react-client";

type Props = {
    game: GameLocalView
    player: PlayerView
}

export default function ForestBoard({ game, player }: Props) {
    const play = usePlay()
    const takeFragment = () => { play(takeFragmentTileMove(player.spirit)) }
    return (
        <div css={forest}>
            <Reserve game={game} spirit={player.spirit} />
            <CircleOfSpirits circleOfSpirits={game.circle} spirit={player.spirit} />
            <ProtectiveTreeDisperser dispenser={game.dispenser} spirit={player.spirit} />
            <FragmentTilesStack onClick={takeFragment} />
        </div>
    );
};

const forest = css`
position:absolute;
top:0em;;
left:0em;;
`