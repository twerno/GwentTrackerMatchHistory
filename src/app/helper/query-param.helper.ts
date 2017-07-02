import { IFilterData } from 'app/model/filter-record';
import { FilterByTime } from 'app/model/filter-by-time.enum';
import { ParamMap } from '@angular/router';

export class QueryParamHelper {

    static build(page: string, filterData: IFilterData): Object {
        const result: any = {};
        result['page'] = page;

        if (filterData.mode.length !== 0) {
            result['filter.mode'] = JSON.stringify(filterData.mode);
        }

        if (filterData.time.mode !== 'ANY') {
            result['filter.time'] = filterData.time.mode;
            if (filterData.time.mode === FilterByTime.CUSTOM) {
                result['filter.time.from'] = filterData.time.from.toLocaleDateString();
                result['filter.time.to'] = filterData.time.to.toLocaleDateString();
            }
        }

        if (filterData.faction.length !== 0) {
            result['filter.faction'] = JSON.stringify(filterData.faction);
        }

        if (filterData.playerId.length !== 0) {
            result['filter.playerId'] = filterData.playerId;
        }

        return result;

    }

    static parseFilter(paramMap: ParamMap, filterData: IFilterData): void {
        this.parseMode(paramMap, filterData);
        this.parseTime(paramMap, filterData);
        this.parseFaction(paramMap, filterData);
        this.parsePlayerId(paramMap, filterData);
    }

    private static parseMode(paramMap: ParamMap, filterData: IFilterData): void {
        filterData.mode = filterData.mode || [];
        try {
            if (paramMap.has('filter.mode')) {
                const filter_mode: any = JSON.parse(paramMap.get('filter.mode'));
                if (filter_mode instanceof Array) {
                    filterData.mode = filter_mode.map(el => Number.parseInt(el));
                    return;
                }
            }
            filterData.mode.length = 0;
        } catch (error) { }

        filterData.mode.length = 0;
    }

    private static parseTime(paramMap: ParamMap, filterData: IFilterData): void {
        try {
            filterData.time = filterData.time || { mode: 'ANY' };
            if (paramMap.has('filter.time')) {
                filterData.time.mode = Number.parseInt(paramMap.get('filter.time'));
            }
            if (filterData.time.mode === FilterByTime.CUSTOM) {
                if (paramMap.has('filter.time.from')) {
                    filterData.time.from = new Date(paramMap.get('filter.time.from'));
                }
                if (paramMap.has('filter.time.to')) {
                    filterData.time.to = new Date(paramMap.get('filter.time.to'));
                }
            }
        } catch (error) {
            filterData.time.mode = 'ANY';
            filterData.time.from = undefined;
            filterData.time.to = undefined;
        }
    }

    private static parseFaction(paramMap: ParamMap, filterData: IFilterData): void {
        try {
            filterData.faction = filterData.faction || [];
            if (paramMap.has('filter.faction')) {
                const filter_faction: any = JSON.parse(paramMap.get('filter.faction'));
                if (filter_faction instanceof Array) {
                    filterData.faction = filter_faction.map(el => Number.parseInt(el));
                    return;
                }
            }
        } catch (error) { }

        filterData.faction.length = 0;
    }

    private static parsePlayerId(paramMap: ParamMap, filterData: IFilterData): void {
        try {
            filterData.playerId = filterData.playerId || [];
            if (paramMap.has('filter.playerId')) {
                const filter_playerId: any = JSON.parse(paramMap.get('filter.playerId'));
                if (filter_playerId instanceof Array) {
                    filterData.playerId = filter_playerId;
                    return;
                }
            }
        } catch (error) { }
        filterData.playerId.length = 0;
    }
}
