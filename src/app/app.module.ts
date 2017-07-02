import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from 'app/app.component';
import { MatchHistoryComponent } from 'app/match-history/match-history.component';
import { FilterModule } from 'app/filter/filter.module';
import { MatchDataProviderService } from 'app/service/match-data-provider.service';
import { FilterDataService } from 'app/service/filter-data.service';
import { FilterService } from 'app/service/filter.service';
import { ConverterModule } from 'app/converter/converter.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteModule } from 'app/route/route.module';

@NgModule({
  declarations: [
    AppComponent,
    MatchHistoryComponent
  ],
  imports: [
    BrowserModule,
    FilterModule,
    ConverterModule,
    BrowserAnimationsModule,
    RouteModule
  ],
  providers: [
    MatchDataProviderService,
    FilterDataService,
    FilterService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
