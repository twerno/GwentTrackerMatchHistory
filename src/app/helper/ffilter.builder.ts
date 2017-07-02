import { FFilter, ITimeFilterData } from 'app/model/filter-record';
import { IMatchHistoryRecord } from 'app/model/match-history-record';
import { Faction } from 'app/const/faction.enum';
import { GameMode } from 'app/const/game-mode.enum';
import { FilterByTime } from 'app/model/filter-by-time.enum';
import { DateTimeHelper } from 'app/helper/date-time.helper';

export class FFilterBuilder {

    static byMode(mode: GameMode[]): FFilter {
        return (gameRecord: IMatchHistoryRecord): boolean => {
            if (mode.length === 0 || mode.indexOf(gameRecord.mode) !== -1) {
                return true;
            } else {
                return false;
            }
        };

    }


    static byTime(filterData: ITimeFilterData): FFilter {
        return (gameRecord: IMatchHistoryRecord): boolean => {
            if (filterData.mode === 'ANY') {
                return true;
            } else if (filterData.mode === FilterByTime.LAST_24_HOURS
                && gameRecord.timestamp.getTime() >= DateTimeHelper.nowPlusHours(-24).getTime()) {
                return true;
            } else if (filterData.mode === FilterByTime.LAST_7_DAYS
                && gameRecord.timestamp.getTime() >= DateTimeHelper.nowPlusDays(-7).getTime()) {
                return true;
            } else if (filterData.mode === FilterByTime.LAST_30_DAYS
                && gameRecord.timestamp.getTime() >= DateTimeHelper.nowPlusDays(-30).getTime()) {
                return true;
            } else if (filterData.mode === FilterByTime.CUSTOM) {
                return true;
                // TODO
            }
            return false;
        }
    }



    static byFaction(factions: Faction[]): FFilter {
        return (gameRecord: IMatchHistoryRecord): boolean => {
            if (factions.length === 0) {
                return true;
            } else {
                return factions.indexOf(gameRecord.playersDeckMeta.faction) !== -1;
            }
        }
    }


    static byPlayerId(playerId: string[]): FFilter {
        return (gameRecord: IMatchHistoryRecord): boolean => {
            if (playerId.length === 0) {
                return true;
            } else {
                return playerId.indexOf(gameRecord.player.name) !== -1;
            }
        }
    }

}
