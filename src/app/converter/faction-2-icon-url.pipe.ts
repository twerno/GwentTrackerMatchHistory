import { Pipe, PipeTransform } from '@angular/core';
import { FACTION } from 'app/model/match-history-record';

@Pipe({
  name: 'faction2IconUrl'
})
export class Faction2IconUrlPipe implements PipeTransform {

  transform(value: FACTION, args?: any): any {
    const base: string = 'http://www.gwent-tracker.com/img/art/backs/';
    switch (value) {
      case 'Monster': return base + 'Monster.png';
      case 'Nilfgaard': return base + 'Nilfgaard.png';
      case 'Northern Realms': return base + 'NorthernKingdom.png';
      case 'Scoia\'tael': return base + 'Scoiatael.png';
      case 'Skellige': return base + 'Skellige.png';
      default: return '';
    }
  }

}
