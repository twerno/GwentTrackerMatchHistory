import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum FilterActionEnum {
  SELECTED,
  UNSELECTED
}

export class FilterEvent {

  constructor(public action: FilterActionEnum, public filterId: string, public value: string) { }
}

@Component({
  selector: 'gt-filter-row',
  templateUrl: './filter-row.component.html',
  styleUrls: ['./filter-row.component.css']
})
export class FilterRowComponent implements OnInit {

  @Input() selected: boolean = false;
  @Input() caption: string;
  @Input() filterId: string;
  @Input() value: string;


  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if ((this.filterId || null) === null) {
      throw new Error('Undefined filterId.');
    }
  }

  clickHandler(): void {

    if (this.selected) {
      this.change.emit(
        new FilterEvent(FilterActionEnum.UNSELECTED, this.filterId, this.value)
      );
    } else {
      this.change.emit(
        new FilterEvent(FilterActionEnum.SELECTED, this.filterId, this.value)
      );
    }

  }

}
