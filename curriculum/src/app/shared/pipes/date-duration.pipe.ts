import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'dateDuration'
})
export class DateDurationPipe implements PipeTransform {


  constructor(private datePipe: DatePipe) {
  }

  transform(beginDate: Date, endDate?: Date, format?: string, timezone?: string, locale?: string): string {
    let res = null;
    if (beginDate) {
      res = this.datePipe.transform(beginDate, format, timezone, locale);
      if (res && endDate) {
        res += ' - ' + this.datePipe.transform(endDate, format, timezone, locale);
      }
    }
    return res || '';
  }

}
