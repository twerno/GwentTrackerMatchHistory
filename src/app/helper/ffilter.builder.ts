import { FFilter, ITimeFilterData } from 'app/model/filter-record';
import { IMatchHistoryRecord } from 'app/model/match-history-record';
import { Faction } from 'app/const/faction.enum';
import { GameMode } from 'app/const/game-mode.enum';

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
            if (filterData.from instanceof Date
                && gameRecord.timestamp.getTime() < filterData.from.getTime()) {
                return false;
            }

            if (filterData.to instanceof Date
                && gameRecord.timestamp.getTime() > filterData.to.getTime()) {
                return false;
            }

            return true;
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
