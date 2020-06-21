import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skillsTypes = [
    "Language",
    "Technical Skills",
    "Soft Skills",
    "Others"
  ];
  constructor() { }

  getSkillTypeList(){
    return this.skillsTypes;
  }
}
