import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  countryList: any[] = [
    { code: 'pt', country: 'Portugal' }, { code: 'ang', country: 'Angola' }, { code: 'monc', country: 'Monçabique' }, {
      code: 'it',
      country: 'Italy'
    }
  ];

  constructor() { }

  getCountriesList(){
    return this.countryList;
  }
}
