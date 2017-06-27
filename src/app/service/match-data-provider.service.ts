import { Injectable } from '@angular/core';
import { IMatchHistoryRecord } from 'app/model/match-history-record';

@Injectable()
export class MatchDataProviderService {

  constructor() { }

  getAllMatches(): IMatchHistoryRecord[] {
    return window['MATCHES'];
  }

  getPlayerIds(): string[] {
    return this.getAllMatches()
      .map(record => record.player.name)
      .filter((name, index, arr) => arr.indexOf(name) === index);
  }

}
