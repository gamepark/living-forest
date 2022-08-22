/** @jsxImportSource @emotion/react */


import PlayerHelpLine from "./PlayerHelpLine";
import PlayerDiscard from "./PlayerDiscard";
import PlayerDrawStack from "./PlayerDrawStack";
import PlayerForest from "./PlayerForest";
import PlayerView from '@gamepark/living-forest/PlayerView';
import GameLocalView from "src/GameLocalView";
import { usePlay } from '@gamepark/react-client';
import { drawCardMove } from '@gamepark/living-forest/moves/DrawCard';
import PlayerVictories from "./PlayerVictories";

type Props = {
    game: GameLocalView
    player: PlayerView
}

function PlayerBoard({ player, game }: Props) {
    const play = usePlay()
    const draw = () => { play(drawCardMove(player.spirit), { delayed: true }) }

    return (
        <>
            <PlayerVictories player={player} />
            <PlayerDiscard player={player} discard={player.discard.length} />
            <PlayerHelpLine line={player.line} />
            <PlayerDrawStack phase={game.phase} ready={player.ready} fragment={player.fragment} spirit={player.spirit} stack={player.deck} onClick={draw} />
            <PlayerForest player={player} />
        </>
    );
};

export default PlayerBoard;