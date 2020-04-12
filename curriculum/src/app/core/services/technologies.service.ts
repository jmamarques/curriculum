import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnhologies } from '../Interfaces/tecnhologies';
import { ContributorsGit } from '../Interfaces/contributors-git';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {
  private tecnhologiesURL='https://api.github.com/repos/joaoMAMarques/curriculum/languages';
  private contributors = 'https://api.github.com/repos/joaoMAMarques/curriculum/contributors';

  constructor(private http: HttpClient) { }

  getTechonlogies(): Observable<Tecnhologies>{
    return this.http.get<Tecnhologies>(this.tecnhologiesURL);
  }
  getContributors(): Observable<ContributorsGit []>{
    return this.http.get<ContributorsGit []>(this.contributors);
  }

}
