
export type MATCH_MODE = 'RANKED' | 'CASUAL';

export type MATCH_RESULT = 'WIN' | 'LOSS' | 'DRAW';

export type FACTION = 'Monster' | 'Nilfgaard' | 'Northern Realms' | 'Scoia\'tael' | 'Skellige' | string;

export type LEADER = string;

export interface IMatchHistoryRecord {
    mode: MATCH_MODE,
    timestamp: Date,
    result: MATCH_RESULT

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
    faction: FACTION,
    leader: LEADER
}
