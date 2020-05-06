import {Injectable} from '@angular/core';
import * as clone from 'clone';

@Injectable({
  providedIn: 'root'
})
export class ClonerService {

  constructor() {
  }

  deepClone<T>(value: any) {
    return clone<T>(value);
  }
}
