import { Component, OnInit } from '@angular/core';
import { IFilterData } from 'app/model/filter-record';
import { FilterDataService } from 'app/service/filter-data.service';
import { FilterByTime } from 'app/model/filter-by-time.enum';
import { FilterEvent, FilterActionEnum } from 'app/filter/filter.event';
import { Faction } from 'app/const/faction.enum';
import { GameResult } from 'app/const/game-result.enum';
import { GameMode } from 'app/const/game-mode.enum';
import { MatchDataProviderService } from 'app/service/match-data-provider.service';

@Component({
  selector: 'gt-match-filter',
  templateUrl: './match-filter.component.html',
  styleUrls: ['./match-filter.component.css']
})
export class MatchFilterComponent implements OnInit {

  data: IFilterData;
  playerIds: string[];

  // https://www.gurustop.net/blog/2016/05/24/how-to-use-typescript-enum-with-angular2/
  FilterByTime: typeof FilterByTime = FilterByTime;
  Faction: typeof Faction = Faction;
  GameResult: typeof GameResult = GameResult;
  GameMode: typeof GameMode = GameMode;

  constructor(private filterService: FilterDataService, private matchDataProviderService: MatchDataProviderService) { }

  ngOnInit() {
    this.data = this.filterService.filterData;
    this.playerIds = this.matchDataProviderService.getPlayerIds();
  }

  editorClosed(value: string): void {
    const filterVal: FilterByTime = <FilterByTime>Number.parseInt(value);
    this.filterService.setTime(filterVal);
  }

  changeHandler(event: FilterEvent): void {
      if (event.action === FilterActionEnum.SELECTED) {
        const filterVal: FilterByTime = <FilterByTime>Number.parseInt(event.value);
        this.filterService.setTime(filterVal);
      } else {
        this.filterService.setTime(null);
      }
  }

  setGameMode(event: FilterEvent): void {
    if (event.value === 'ANY') {
      this.filterService.clearGameMode();
    } else {
      const mode: GameMode = <GameMode>Number.parseInt(event.value);
      if (event.action === FilterActionEnum.SELECTED) {
        this.filterService.addGameMode(mode);
      } else {
        this.filterService.removeGameMode(mode);
      }
    }
  }

  setFactionHandler(event: FilterEvent): void {
    if (event.value === 'ANY') {
      this.filterService.clearFactions();
    } else {
      const filterVal: Faction = <Faction>Number.parseInt(event.value);
      if (event.action === FilterActionEnum.SELECTED) {
        this.filterService.addFaction(filterVal);
      } else {
        this.filterService.removeFaction(filterVal);
      }
    }
  }

  setPlayerHandler(event: FilterEvent): void {
    if (event.value === 'ANY') {
      this.filterService.clearPlayers();
    } else {
      if (event.action === FilterActionEnum.SELECTED) {
        this.filterService.addPlayer(event.value);
      } else {
        this.filterService.removePlayer(event.value);
      }
    }
  }

  dateFromChangedHandler(): void {
    this.filterService.setTime(FilterByTime.CUSTOM, this.data.time.from);
  }

  dateToChangedHandler(): void {
    this.filterService.setTime(FilterByTime.CUSTOM, null, this.data.time.to);
  }

}
