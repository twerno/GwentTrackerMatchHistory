import { Injectable } from '@angular/core';
import { IMatchHistoryRecord } from 'app/model/match-history-record';
import { Subject } from 'rxjs/Subject';
import { IFilterData, FFilter } from 'app/model/filter-record';

@Injectable()
export class MatchService {

  defaultMatches: IMatchHistoryRecord[] = [];
  matchesSubject: Subject<IMatchHistoryRecord[]> = new Subject<IMatchHistoryRecord[]>();

  constructor() { }

  getAllMatches(): IMatchHistoryRecord[] {
    return window['MATCHES'];
  }

  applyFFilters(filters: FFilter[]): void {
    filters = filters || [];
    const filtered: IMatchHistoryRecord[] = this.getAllMatches()
      .filter((match) => {
        for (const ffilter of filters) {
          if (!ffilter(match)) {
            return false;
          }
        }
        return true;
      })
      .sort((a: IMatchHistoryRecord, b: IMatchHistoryRecord) => {
        return b.timestamp.getTime() - a.timestamp.getTime();
      });
    this.matchesSubject.next(filtered);
    this.defaultMatches = filtered;
  }

}
