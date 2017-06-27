import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Faction2StringPipe } from 'app/converter/faction-2-string.pipe';
import { GameModePipe } from 'app/converter/game-mode.pipe';
import { GameResultPipe } from 'app/converter/game-result.pipe';
import { Faction2IconUrlPipe } from 'app/converter/faction-2-icon-url.pipe';
import { Leader2IconUrlPipe } from 'app/converter/leader-2-icon-url.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Faction2StringPipe,
    GameModePipe,
    GameResultPipe,
    Faction2IconUrlPipe,
    Leader2IconUrlPipe
  ],
  exports: [
    Faction2StringPipe,
    GameModePipe,
    GameResultPipe,
    Faction2IconUrlPipe,
    Leader2IconUrlPipe
  ]
})
export class ConverterModule { }
