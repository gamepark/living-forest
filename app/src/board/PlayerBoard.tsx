/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { drawCardMove } from '@gamepark/living-forest/moves/DrawCard';
import PlayerView from '@gamepark/living-forest/PlayerView';
import { usePlay } from '@gamepark/react-client';
import Images from '../images/Images';
import { fragmentPlayerHeight, fragmentPlayerLeft, fragmentPlayerTop, fragmentPlayerWidth } from '../styles';
import GameLocalView from "../GameLocalView";
import PlayerDiscard from "./PlayerDiscard";
import PlayerDrawStack from "./PlayerDrawStack";
import PlayerForest from "./PlayerForest";
import PlayerHelpLine from "./PlayerHelpLine";
import PlayerVictories from "./PlayerVictories";
import DiscardDisplay from './DiscardDisplay';

type Props = {
    game: GameLocalView
    player: PlayerView
}

export function PlayerBoard({ player, game }: Props) {
    const play = usePlay()
    const draw = () => { play(drawCardMove(player.spirit), { delayed: true }) }

    return (
        <>
            {player.fragment > 0 && [...Array(player.fragment)].map((_, index) => {
                return <div key={index} css={fragment(index)}></div>
            })}
            <PlayerVictories victoryTiles={player.victoryTiles} />
            <PlayerDiscard player={player} discard={player.discard.length} />
            <PlayerHelpLine line={player.line} />
            <PlayerDrawStack phase={game.phase} ready={player.ready} fragment={player.fragment} spirit={player.spirit} stack={player.deck} onClick={draw} displayed={game.displayedPlayer!} />
            <PlayerForest player={player} />
            <DiscardDisplay discard={player.discard} size={player.discard.length} />
        </>
    );
};

function fragment(index: number) {
    return css`
    position:absolute;
    width:${fragmentPlayerWidth}em;
    height:${fragmentPlayerHeight}em;
    top:${fragmentPlayerTop + index * 2}em;
    left:${fragmentPlayerLeft}em;
    background-image: url(${Images.fragment});
    background-size:cover;
    background-position:center;
    filter: drop-shadow(0 0 0.3em black);
    `
}