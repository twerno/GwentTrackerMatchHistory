import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IMatchHistoryRecord } from 'app/model/match-history-record';
import { GameResult } from 'app/const/game-result.enum';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[gt-match-history-row-new]',
  templateUrl: './match-history-row-new.component.html',
  styleUrls: ['./match-history-row-new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchHistoryRowNewComponent implements OnInit {

  @Input() match: IMatchHistoryRecord;

  GameResult: typeof GameResult = GameResult;

  constructor() { }

  ngOnInit() {
  }

}
