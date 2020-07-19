import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectTypeList = ['Academic', 'Professional', 'Personal'];
  constructor() { }

  getProjetType() : string []{
    return this.projectTypeList;
  }
}
