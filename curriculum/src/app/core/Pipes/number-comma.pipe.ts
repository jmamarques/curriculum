import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberComma'
})
export class NumberCommaPipe implements PipeTransform {
  transform(numberToTransform: number): number {
    return +(numberToTransform/ 1000).toFixed(3);
  }

}
