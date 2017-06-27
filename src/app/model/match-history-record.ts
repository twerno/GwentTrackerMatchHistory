
import { Faction } from 'app/const/faction.enum';
import { GameResult } from 'app/const/game-result.enum';
import { GameMode } from 'app/const/game-mode.enum';

export type LEADER = string;

export interface IMatchHistoryRecord {
    mode: GameMode,
    timestamp: Date,
    result: GameResult

    player: IPlayerRecord,
    playersDeckMeta: IDeckMeta,

    opponent: IPlayerRecord,
    opponentsDeckMeta: IDeckMeta
}

export interface IPlayerRecord {
    name: string,
    mmr: number,

}

export interface IDeckMeta {
    faction: Faction,
    leader: LEADER
}
