import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatchHistoryRowComponent } from './match-history-row/match-history-row.component';
import { MatchHistoryComponent } from './match-history/match-history.component';
import { Faction2IconUrlPipe } from './converter/faction-2-icon-url.pipe';
import { Leader2IconUrlPipe } from './converter/leader-2-icon-url.pipe';
import { MatchService } from 'app/service/match.service';
import { MatchFilterComponent } from './match-filter/match-filter.component';
import { FilterService } from 'app/service/filter.service';
import { FilterRowComponent } from './filter-row/filter-row.component';
import { MatchHistoryRowNewComponent } from './match-history-row-new/match-history-row-new.component';
import { DatepickerModule } from 'angular2-material-datepicker'

@NgModule({
  declarations: [
    AppComponent,
    MatchHistoryRowComponent,
    MatchHistoryComponent,
    Faction2IconUrlPipe,
    Leader2IconUrlPipe,
    MatchFilterComponent,
    FilterRowComponent,
    MatchHistoryRowNewComponent
  ],
  imports: [
    BrowserModule,
    DatepickerModule
  ],
  providers: [MatchService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
