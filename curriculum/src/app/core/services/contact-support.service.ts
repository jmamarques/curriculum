import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactSupportService {
  countryList : string []=
  [
    'Portugal',
    'China',
    'Monçabique',
    'Angola',
    'Cuba',
    'India'
  ];
  constructor() { }

  getCountryList(): string []{
    return this.countryList;
  }
}
