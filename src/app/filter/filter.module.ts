import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchFilterComponent } from 'app/filter/match-filter/match-filter.component';
import { FilterRowComponent } from 'app/filter/filter-row/filter-row.component';
import { ConverterModule } from 'app/converter/converter.module';

@NgModule({
  imports: [
    CommonModule,
    ConverterModule
  ],
  declarations: [
    MatchFilterComponent,
    FilterRowComponent
  ],
  exports: [
    MatchFilterComponent
  ]
})
export class FilterModule { }
