import { Pipe, PipeTransform } from '@angular/core';
import { GameResult } from 'app/const/game-result.enum';

@Pipe({
  name: 'gameResult'
})
export class GameResultPipe implements PipeTransform {

  transform(value: GameResult, args?: any): any {
    switch (value) {
      case GameResult.WIN: return 'Win';
      case GameResult.LOSS: return 'Loss';
      case GameResult.DRAW: return 'Draw';
      default: return value;
    }
  }

}
