
import { FilterByTime } from 'app/model/filter-by-time.enum';
import { IMatchHistoryRecord } from 'app/model/match-history-record';
import { Faction } from 'app/const/faction.enum';
import { GameMode } from 'app/const/game-mode.enum';

export type FFilter = (match: IMatchHistoryRecord) => boolean;

export interface IFilterData {

    mode: GameMode[],

    time: ITimeFilterData

    faction: Faction[],

    playerId: string[]

    // deck?: string[]

}

export interface ITimeFilterData {
    mode: FilterByTime | 'ANY',
    from?: Date,
    to?: Date
}
