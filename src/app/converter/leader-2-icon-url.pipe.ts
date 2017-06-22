import { Pipe, PipeTransform } from '@angular/core';
import { LEADER } from 'app/model/match-history-record';

@Pipe({
  name: 'leader2IconUrl'
})
export class Leader2IconUrlPipe implements PipeTransform {

  transform(value: LEADER, args?: any): any {
    const base: string = 'http://www.gwent-tracker.com/img/art/';

    switch (value.toLocaleUpperCase()) {
      case 'BROUVER HOOG': return base + '20016700.png';
      case 'EITHNÉ': return base + '20016600.png';
      case 'FRANCESCA': return base + '20016500.png';

      case 'CRACH AN CRAITE': return base + '20016000.png';
      case 'HARALD THE CRIPPLE': return base + '';
      case 'KING BRAN': return base + '20015900.png';

      case 'DAGON': return base + '20015800.png';
      case 'EREDIN': return base + '13110100.png';
      case 'UNSEEN ELDER': return base + '20005500.png';

      case 'EMHYR VAR EMREIS': return base + '';
      case 'JOHN CALVEIT': return base + '20016400.png';
      case 'MORVRAN VOORHIS': return base + '20016300.png';

      case 'FOLTEST': return base + '20016800.png';
      case 'HENSELT': return base + '20017000.png';
      case 'RADOVID': return base + '20016900.png';
    }
    return '';
  }

}
