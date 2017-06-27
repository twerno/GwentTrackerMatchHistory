import { Pipe, PipeTransform } from '@angular/core';
import { Faction } from 'app/const/faction.enum';

@Pipe({
  name: 'faction2String'
})
export class Faction2StringPipe implements PipeTransform {

  transform(value: Faction, args?: any): any {
    switch (value) {
      case Faction.MONSTER: return 'Monster';
      case Faction.NILFGAARD: return 'Nilfgaard';
      case Faction.NORTHERN_REALMS: return 'Northern Realms';
      case Faction.SCOIATAEL: return 'Scoia\'tael';
      case Faction.SKELLIGE: return 'Skellige';
      default: return value;
    }
  }

}
