import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { MatchHistoryComponent } from 'app/match-history/match-history.component';
import { MatchHistoryRowNewComponent } from 'app/match-history-row-new/match-history-row-new.component';
import { FilterModule } from 'app/filter/filter.module';
import { MatchDataProviderService } from 'app/service/match-data-provider.service';
import { FilterDataService } from 'app/service/filter-data.service';
import { FilterService } from 'app/service/filter.service';
import { AnaliticsService } from 'app/service/analitics.service';
import { ConverterModule } from 'app/converter/converter.module';

@NgModule({
  declarations: [
    AppComponent,
    MatchHistoryComponent,
    MatchHistoryRowNewComponent,
  ],
  imports: [
    BrowserModule, FilterModule, ConverterModule
  ],
  providers: [
    MatchDataProviderService,
    FilterDataService,
    FilterService,
    AnaliticsService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
