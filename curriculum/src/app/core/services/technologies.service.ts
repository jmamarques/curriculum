import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tecnhologies} from '../../shared/interfaces/tecnhologies';
import {ContributorsGit} from '../../shared/interfaces/contributors-git';
import {IssueData} from '../../shared/interfaces/issues-data';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {
  private tecnhologiesURL = 'https://api.github.com/repos/jmamarques/curriculum/languages';
  private contributors = 'https://api.github.com/repos/jmamarques/curriculum/contributors';
  private issuesOpen = 'https://api.github.com/repos/jmamarques/curriculum/issues';
  private issuesClosed = 'https://api.github.com/repos/jmamarques/curriculum/issues?state=closed';

  technologies: string[] = ['Java', 'Git', 'C#', 'Python'];

  constructor(private http: HttpClient) {
  }

  getTechonlogies(): Observable<Tecnhologies> {
    return this.http.get<Tecnhologies>(this.tecnhologiesURL, {headers: this.createHeader()});
  }

  getContributors(): Observable<ContributorsGit []> {
    return this.http.get<ContributorsGit []>(this.contributors, {headers: this.createHeader()});
  }
  getOpenIssues(): Observable<IssueData []>{
    return this.http.get<IssueData[]>(this.issuesOpen,{headers: this.createHeader()});
  }
  getClosedIssues(): Observable<IssueData []>{
    return this.http.get<IssueData[]>(this.issuesClosed,{headers: this.createHeader()});
  }

  createHeader(): HttpHeaders{
    let header  = new HttpHeaders();
    header.append('Access-Control-Allow-Origin','*');
    return header;
  }

  getTechnologiesList(): string[]{
    return this.technologies;
  }


}
