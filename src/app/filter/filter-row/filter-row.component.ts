import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterEvent, FilterActionEnum } from 'app/filter/filter.event';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'gt-filter-row',
  templateUrl: './filter-row.component.html',
  styleUrls: ['./filter-row.component.css'],
  animations: [
    trigger('state', [
      state('inactive', style({
        transform: 'translateX(0px)',
        color: 'gray'
      })),
      state('active', style({
        transform: 'translateX(10px)'
        // color: 'red'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class FilterRowComponent implements OnInit {

  private _selected: boolean = false;
  get selected(): boolean {return this._selected; }
  @Input('selected') set selected(val: boolean) {
    this._selected = val;
    if (val) {
      this.state = 'active';
    } else {
      this.state = 'inactive';
    }
  }
  @Input() caption: string;
  @Input() value: string;
  @Input() diselectable: boolean = false;
  state: 'active' | 'inactive' = 'inactive';


  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  clickHandler(): void {

    if (this.selected) {
      this.unselectHandler();
    } else {
      this.selectHandler();
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
