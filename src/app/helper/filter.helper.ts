import { FFilter, ITimeFilterData } from 'app/model/filter-record';
import { IMatchHistoryRecord, MATCH_MODE } from 'app/model/match-history-record';

export class FilterHelper {

    static filterByMode(mode: MATCH_MODE[]): FFilter {
        return (match: IMatchHistoryRecord): boolean => {
            if (mode.length === 0 || mode.indexOf(match.mode) !== -1) {
                return true;
            } else {
                return false;
            }
        };

    }


    static filterByTime(filterData: ITimeFilterData): FFilter {
        return (match: IMatchHistoryRecord): boolean => {
            if (filterData.from instanceof Date
                && match.timestamp.getTime() < filterData.from.getTime()) {
                return false;
            }

            if (filterData.to instanceof Date
                && match.timestamp.getTime() > filterData.to.getTime()) {
                return false;
            }

            return true;
        }
    }


}
