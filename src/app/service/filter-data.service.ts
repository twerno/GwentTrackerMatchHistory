import { Injectable } from '@angular/core';
import { IFilterData, FFilter } from 'app/model/filter-record';
import { DateTimeHelper } from 'app/helper/date-time.helper';
import { FilterByTime } from 'app/model/filter-by-time.enum';
import { Faction } from 'app/const/faction.enum';
import { GameMode } from 'app/const/game-mode.enum';
import { FilterService } from 'app/service/filter.service';

@Injectable()
export class FilterDataService {

  filterData: IFilterData = {
    mode: [],
    time: { mode: FilterByTime.LAST_24_HOURS, from: DateTimeHelper.nowPlusHours(-24) },
    faction: [],
    playerId: []
  };

  constructor(private filterService: FilterService) {
    this.applyFilter();
  }

  // ***************************************
  // Filter by Time
  // ***************************************
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

    this.applyFilter();
  }


  // ***************************************
  // Filter by Game mode
  // ***************************************
  addGameMode(mode: GameMode): void {
    this.filterData.mode.push(mode);
    this.applyFilter();
  }

  removeGameMode(mode: GameMode): void {
    let index: number = this.filterData.mode.indexOf(mode);
    while (index !== -1) {
      this.filterData.mode.splice(index, 1);
      index = this.filterData.mode.indexOf(mode);
    }

    this.applyFilter();
  }

  clearGameMode(): void {
    this.filterData.mode.length = 0;
    this.applyFilter();
  }

  // ***************************************
  // Filter by Faction
  // ***************************************
  addFaction(faction: Faction): void {
    this.filterData.faction.push(faction);
    this.applyFilter();
  }

  removeFaction(faction: Faction): void {
    let index: number = this.filterData.faction.indexOf(faction);
    while (index !== -1) {
      this.filterData.faction.splice(index, 1);
      index = this.filterData.faction.indexOf(faction);
    }
    this.applyFilter();
  }

  clearFactions(): void {
    this.filterData.faction.length = 0;
    this.applyFilter();
  }

  // ***************************************
  // Filter by Player
  // ***************************************
  addPlayer(playerId: string): void {
    this.filterData.playerId.push(playerId);
    this.applyFilter();
  }

  removePlayer(playerId: string): void {
    let index: number = this.filterData.playerId.indexOf(playerId);
    while (index !== -1) {
      this.filterData.playerId.splice(index, 1);
      index = this.filterData.playerId.indexOf(playerId);
    }
    this.applyFilter();
  }

  clearPlayers(): void {
    this.filterData.playerId.length = 0;
    this.applyFilter();
  }


  // ***************************************
  // private
  // ***************************************
  private applyFilter(): void {
    this.filterService.applyFilter(this.filterData);
  }

}
