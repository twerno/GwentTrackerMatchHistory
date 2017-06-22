import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { IMatchHistoryRecord } from 'app/model/match-history-record';
import { MatchService } from 'app/service/match.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'gt-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit, OnDestroy {

  private matchesSubscription: Subscription;
  allMatches: IMatchHistoryRecord[] = [];
  matches: IMatchHistoryRecord[] = [];

  loaded_pages: number = 1;
  records_per_page: number = 100;

  constructor(private matchService: MatchService) {
    this.matchesSubscription = matchService.matchesSubject
      .subscribe((value) => {
        this.allMatches = value;
        this.loaded_pages = 1;
        this.prepareMatchesSubset();
      });
  }

  ngOnInit() {
    this.allMatches = this.matchService.defaultMatches;
    this.prepareMatchesSubset();
  }

  ngOnDestroy(): void {
    this.matchesSubscription.unsubscribe();
  }

  private prepareMatchesSubset(): void {
    this.matches = this.allMatches.slice(0, this.records_per_page * this.loaded_pages);
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent($event) {
    const height: number = document.body.offsetHeight;
    if (window.pageYOffset >= height - 1000) {
      this.loaded_pages++;
      this.prepareMatchesSubset();
    }
  }

}
