import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tecnhologies } from '../Interfaces/tecnhologies';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {
  private tecnhologiesURL='https://api.github.com/repos/joaoMAMarques/curriculum/languages';

  constructor(private http: HttpClient) { }

  getTechonlogies(): Observable<Tecnhologies>{
    return this.http.get<Tecnhologies>(this.tecnhologiesURL);

  }
}
