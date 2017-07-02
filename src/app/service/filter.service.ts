import { Injectable } from '@angular/core';
import { FFilterBuilder } from 'app/helper/ffilter.builder';
import { IMatchHistoryRecord } from 'app/model/match-history-record';
import { IFilterData, FFilter } from 'app/model/filter-record';
import { MatchDataProviderService } from 'app/service/match-data-provider.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FilterService {

  matches: IMatchHistoryRecord[] = [];
  matchSubject: Subject<IMatchHistoryRecord[]> = new Subject<IMatchHistoryRecord[]>();
  currentFilterData: IFilterData = null;

  constructor(private matchService: MatchDataProviderService) {
  }

  applyFilter(filter: IFilterData): void {
    this.currentFilterData = filter;
    const fFilters: FFilter[] = this.buildFFilters(filter);
    this.doFilterMatches(fFilters);
  }

  private buildFFilters(filter: IFilterData): FFilter[] {
    const result: FFilter[] = [];
    result.push(FFilterBuilder.byMode(filter.mode));
    result.push(FFilterBuilder.byTime(filter.time));
    result.push(FFilterBuilder.byFaction(filter.faction));
    result.push(FFilterBuilder.byPlayerId(filter.playerId));

    return result;
  }

  private doFilterMatches(fFilters: FFilter[]): void {
    const matches: IMatchHistoryRecord[] = this.matchService.getAllMatches()
      .filter((game) => {
        for (const fFilter of fFilters || []) {
          if (!fFilter(game)) {
            return false;
          }
        }
        return true;
      })
      .sort((a: IMatchHistoryRecord, b: IMatchHistoryRecord) => {
        return b.timestamp.getTime() - a.timestamp.getTime();
      });
    this.matchSubject.next(matches);
    this.matches = matches;
  }


}
