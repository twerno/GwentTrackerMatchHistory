import { Injectable } from '@angular/core';
import { IFilterData, FFilter } from 'app/model/filter-record';
import { DateTimeHelper } from 'app/helper/date-time.helper';
import { MatchService } from 'app/service/match.service';
import { FilterByTime } from 'app/model/filter-by-time.enum';
import { FilterHelper } from 'app/helper/filter.helper';
import { MATCH_MODE } from 'app/model/match-history-record';

@Injectable()
export class FilterService {

  filterData: IFilterData = {
    mode: ['CASUAL', 'RANKED'],
    time: { mode: FilterByTime.LAST_24_HOURS, from: DateTimeHelper.nowPlusHours(-24) },
    faction: [],
    leader: []
  };

  constructor(private matchService: MatchService) {
    matchService.applyFFilters(this.getFFilters());
  }

  setTime(mode: FilterByTime, from?: Date, to?: Date): void {
    this.filterData.time.mode = mode;
    this.filterData.time.from = null;
    this.filterData.time.to = null;

    switch (mode) {
      case FilterByTime.LAST_24_HOURS: { this.filterData.time.from = DateTimeHelper.nowPlusHours(-24); break; }
      case FilterByTime.LAST_7_DAYS: { this.filterData.time.from = DateTimeHelper.nowPlusDays(-7); break; }
      case FilterByTime.LAST_30_DAYS: { this.filterData.time.from = DateTimeHelper.nowPlusDays(-30); break; }
      case FilterByTime.CUSTOM: {
        this.filterData.time.to = to || this.filterData.time.to || new Date();
        this.filterData.time.from = from || this.filterData.time.from || DateTimeHelper.nowPlusDays(-7);

        if (this.filterData.time.to.getTime() < this.filterData.time.from.getTime()) {
          this.filterData.time.from = DateTimeHelper.plusDays(this.filterData.time.to, -7);
        }

        DateTimeHelper.normalizeFullDays(this.filterData.time.from);
        DateTimeHelper.normalizeFullDays(this.filterData.time.to);

      }; break;
      default: this.filterData.time.mode = null;
    }

    this.update();
  }

  addMatchMode(mode: MATCH_MODE): void {
    this.filterData.mode.push(mode);
    this.update();
  }

  removeMatchMode(mode: MATCH_MODE): void {
    let index: number = this.filterData.mode.indexOf(mode);
    while (index !== -1) {
      this.filterData.mode.splice(index, 1);
      index = this.filterData.mode.indexOf(mode);
    }

    this.update();
  }

  getFFilters(): FFilter[] {
    const result: FFilter[] = [];
    result.push(FilterHelper.filterByMode(this.filterData.mode));
    result.push(FilterHelper.filterByTime(this.filterData.time));

    return result;
  }

  update(): void {
    this.matchService.applyFFilters(this.getFFilters());
  }


}
