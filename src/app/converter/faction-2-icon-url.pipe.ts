import { Pipe, PipeTransform } from '@angular/core';
import { Faction } from 'app/const/faction.enum';


@Pipe({
  name: 'faction2IconUrl'
})
export class Faction2IconUrlPipe implements PipeTransform {

  transform(value: Faction, args?: any): any {
    const base: string = 'http://www.gwent-tracker.com/img/art/backs/';
    switch (value) {
      case Faction.MONSTER: return base + 'Monster.png';
      case Faction.NILFGAARD: return base + 'Nilfgaard.png';
      case Faction.NORTHERN_REALMS: return base + 'NorthernKingdom.png';
      case Faction.SCOIATAEL: return base + 'Scoiatael.png';
      case Faction.SKELLIGE: return base + 'Skellige.png';
      default: return 'assets/matrix.jpg';
    }
  }

}
