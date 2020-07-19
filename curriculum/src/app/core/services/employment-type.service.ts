import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmploymentTypeService {
  employmentTypeList: string[] = ['Full-time', 'Part-time', 'Self-employed', 'Freelance', 'Contract', 'Internship', 'Apprenticeship'];

  constructor() { }

  getEmploymentType(): string []{
    return this.employmentTypeList;
  }
}
