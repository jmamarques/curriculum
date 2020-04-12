import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseCommit, Branch, Parent} from '../interfaces/git-hub';
import {Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  public static readonly BASE_URL_GIT_HUB = 'https://api.github.com';

  constructor(private httpClient: HttpClient) {
  }

  getTreeGitHub(owner: string, repo: string): Observable<any> {
    return this.httpClient.get(`${GitHubService.BASE_URL_GIT_HUB}/${owner}/${repo}/branches`)
      .pipe(map((branches: Branch[]) => {
        for (const branch of branches) {
          return this.httpClient.get(branch.commit.url).pipe(tap((baseCommit: BaseCommit) => {
            branch.baseCommit = baseCommit;
            if (baseCommit.parents && baseCommit.parents.length) {
              for (const parent of baseCommit.parents) {
                (this.getBaseCommitParent(parent.url, parent));
              }
            }
          }));
        }
        return branches;
      }));
  }

  private getBaseCommitParent(url: string, rootParent: Parent): Observable<BaseCommit> {
    return this.httpClient.get(url).pipe(tap((baseCommit: BaseCommit) => {
      rootParent.parent = baseCommit;
      if (baseCommit.parents && baseCommit.parents.length) {
        for (const parent of baseCommit.parents) {
          this.getBaseCommitParent(parent.url, parent);
        }
      }
      return of(baseCommit);
    }));
  }


}
