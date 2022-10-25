/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PlayerView, { getPlayer } from '@gamepark/living-forest/PlayerView';
import GameLocalView from "../GameLocalView";
import Images from '../images/Images';
import { fragmentPlayerHeight, fragmentPlayerLeft, fragmentPlayerTop, fragmentPlayerWidth } from '../styles';
import DiscardDisplay from './DiscardDisplay';
import PlayerDrawStack from "./PlayerDrawStack";
import PlayerForest from "./PlayerForest";
import PlayerHelpLine from "./PlayerHelpLine";
import PlayerVictories from "./PlayerVictories";

type Props = {
    game: GameLocalView
    player: PlayerView
}

export function PlayerBoard({ player, game }: Props) {
    const playingPlayer = getPlayer(game, game.currentPlayer!)

    return (
        <>
            {player.fragment > 0 && [...Array(player.fragment)].map((_, index) => {
                return <div key={index} css={fragment(index)}></div>
            })}
            <PlayerVictories victoryTiles={player.victoryTiles} bonus={playingPlayer.bonus} playersJumped={playingPlayer.playerJumped} spirit={game.currentPlayer} spiritDisplayed={player.spirit} />
            <DiscardDisplay discard={player.discard} size={player.discard.length} />
            <PlayerHelpLine line={player.line} spirit={player.spirit} />
            <PlayerDrawStack phase={game.phase} ready={player.ready} fragment={player.fragment} spirit={player.spirit} stack={player.deck} displayed={game.displayedPlayer!} lineNumber={player.line.length} />
            <PlayerForest player={player} players={game.players} currentPlayer={game.currentPlayer} />
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