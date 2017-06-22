import { Component, OnInit } from '@angular/core';
import { IFilterData } from 'app/model/filter-record';
import { FilterService } from 'app/service/filter.service';
import { FilterByTime } from 'app/model/filter-by-time.enum';
import { FilterEvent, FilterActionEnum } from 'app/filter-row/filter-row.component';
import { MATCH_MODE } from 'app/model/match-history-record'

@Component({
  selector: 'gt-match-filter',
  templateUrl: './match-filter.component.html',
  styleUrls: ['./match-filter.component.css']
})
export class MatchFilterComponent implements OnInit {

  data: IFilterData;

  // https://www.gurustop.net/blog/2016/05/24/how-to-use-typescript-enum-with-angular2/
  FilterByTime: typeof FilterByTime = FilterByTime;
  // MATCH_MODE: typeof MATCH_MODE = MATCH_MODE;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.data = this.filterService.filterData;
  }

  editorClosed(value: string): void {
    const filterVal: FilterByTime = <FilterByTime>Number.parseInt(value);
    this.filterService.setTime(filterVal);
  }

  changeHandler(event: FilterEvent): void {
    if (event.filterId === 'FilterByTime') {
      if (event.action === FilterActionEnum.SELECTED) {
        const filterVal: FilterByTime = <FilterByTime>Number.parseInt(event.value);
        this.filterService.setTime(filterVal);
      } else {
        this.filterService.setTime(null);
      }

    } else if (event.filterId === 'MATCH_MODE') {
      if (event.action === FilterActionEnum.SELECTED) {
        this.filterService.addMatchMode(<MATCH_MODE>event.value);
      } else {
        this.filterService.removeMatchMode(<MATCH_MODE>event.value);
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
