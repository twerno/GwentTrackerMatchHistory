import { Component, OnInit, Input } from '@angular/core';
import { IMatchHistoryRecord } from 'app/model/match-history-record';

@Component({
  selector: 'gt-match-history-row',
  templateUrl: './match-history-row.component.html',
  styleUrls: ['./match-history-row.component.css']
})
export class MatchHistoryRowComponent implements OnInit {

  @Input() match: IMatchHistoryRecord;

  constructor() { }

  ngOnInit() {
  }

}
