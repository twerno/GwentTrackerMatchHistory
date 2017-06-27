import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { IMatchHistoryRecord } from 'app/model/match-history-record';
import { Subscription } from 'rxjs/Subscription';
import { FilterService } from 'app/service/filter.service';

@Component({
  selector: 'gt-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit, OnDestroy {

  private matchSubscription: Subscription;
  allMatches: IMatchHistoryRecord[] = [];
  matches: IMatchHistoryRecord[] = [];

  loaded_pages: number = 1;
  records_per_page: number = 15;

  constructor(private filterService: FilterService) {
    this.matchSubscription = filterService.matchSubject
      .subscribe((value) => {
        this.allMatches = value;
        this.loaded_pages = 1;
        this.partialViewUpdate();
      });
  }

  ngOnInit() {
    this.allMatches = this.filterService.matches;
    this.partialViewUpdate();
  }

  ngOnDestroy(): void {
    this.matchSubscription.unsubscribe();
  }

  private partialViewUpdate(): void {
    this.matches = this.allMatches.slice(0, this.records_per_page * this.loaded_pages);
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event) {
    const height: number = document.body.offsetHeight;
    if (window.pageYOffset >= height - screen.availHeight) {
      this.loaded_pages++;
      this.partialViewUpdate();
    }
  }

}
