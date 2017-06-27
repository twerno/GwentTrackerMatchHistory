import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterEvent, FilterActionEnum } from 'app/filter/filter.event';

@Component({
  selector: 'gt-filter-row',
  templateUrl: './filter-row.component.html',
  styleUrls: ['./filter-row.component.css']
})
export class FilterRowComponent implements OnInit {

  @Input() selected: boolean = false;
  @Input() caption: string;
  @Input() value: string;
  @Input() diselectable: boolean = false;


  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  clickHandler(): void {

    if (this.selected) {
      this.selectHandler();
    } else {
      this.unselectHandler();
    }

  }

  selectHandler(): void {
    this.change.emit(
      new FilterEvent(FilterActionEnum.SELECTED, this.value)
    );
  }

  unselectHandler(): void {
    this.change.emit(
      new FilterEvent(FilterActionEnum.UNSELECTED, this.value)
    );
  }

}
