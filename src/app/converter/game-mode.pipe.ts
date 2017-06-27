import { Pipe, PipeTransform } from '@angular/core';
import { GameMode } from 'app/const/game-mode.enum';

@Pipe({
  name: 'gameMode'
})
export class GameModePipe implements PipeTransform {

  transform(value: GameMode, args?: any): any {
    switch (value) {
      case GameMode.RANKED: return 'Ranked';
      case GameMode.CASUAL: return 'Casual';
      default: return value;
    }
  }

}
