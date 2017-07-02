import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Faction2StringPipe } from 'app/converter/faction-2-string.pipe';
import { GameModePipe } from 'app/converter/game-mode.pipe';
import { GameResultPipe } from 'app/converter/game-result.pipe';
import { Faction2IconUrlPipe } from 'app/converter/faction-2-icon-url.pipe';
import { Leader2IconUrlPipe } from 'app/converter/leader-2-icon-url.pipe';
import { Date2StringAgoPipe } from 'app/converter/date-2-string-ago.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Faction2StringPipe,
    GameModePipe,
    GameResultPipe,
    Faction2IconUrlPipe,
    Leader2IconUrlPipe,
    Date2StringAgoPipe
  ],
  exports: [
    Faction2StringPipe,
    GameModePipe,
    GameResultPipe,
    Faction2IconUrlPipe,
    Leader2IconUrlPipe,
    Date2StringAgoPipe
  ]
})
export class ConverterModule { }
