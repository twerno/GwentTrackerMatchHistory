import { Pipe, PipeTransform } from '@angular/core';
import { DateTimeHelper } from 'app/helper/date-time.helper';


@Pipe({
  name: 'date2StringAgo'
})
export class Date2StringAgoPipe implements PipeTransform {

  transform(value: Date, args?: any): any {
    return DateTimeHelper.date2StringAgo(value);
  }

}
