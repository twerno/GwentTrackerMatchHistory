
import { FilterByTime } from 'app/model/filter-by-time.enum';
import { IMatchHistoryRecord, MATCH_MODE } from 'app/model/match-history-record';

export type FFilter = (match: IMatchHistoryRecord) => boolean;

export interface IFilterData {

    mode: MATCH_MODE[],

    time: ITimeFilterData

    faction: string[],

    leader: string[],

    deck?: string[]

}

export interface ITimeFilterData {
    mode: FilterByTime,
    from?: Date,
    to?: Date
}
