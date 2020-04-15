import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseCommit, Branch, Parent} from '../../shared/interfaces/git-hub';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  public static readonly BASE_URL_GIT_HUB = 'https://api.github.com';

  constructor(private httpClient: HttpClient) {
  }

  getCommitsBybranch(owner: string, repo: string, branch: string): Promise<BaseCommit[]> {
    return this.httpClient.get<BaseCommit[]>(`${GitHubService.BASE_URL_GIT_HUB}/repos/${owner}/${repo}/commits?sha=${branch}`).toPromise();
  }

  getTreeGitHub(owner: string, repo: string): Observable<Branch[]> {
    return this.httpClient.get<Branch[]>(`${GitHubService.BASE_URL_GIT_HUB}/repos/${owner}/${repo}/branches`);
    /*
      .pipe(map((branches: Branch[]) => {
        for (const branch of branches) {
          this.httpClient.get(branch.commit.url).subscribe((baseCommit: BaseCommit) => {
            if (baseCommit.parents && baseCommit.parents.length) {
              for (const parent of baseCommit.parents) {
                this.getBaseCommitParent(parent.url, parent).subscribe(value => parent.parent = value);
              }
            }
            branch.baseCommit = baseCommit;
          });
        }
        return branches;
      }));*/
  }

  getBaseCommit(url: string): Observable<BaseCommit> {
    return this.httpClient.get<BaseCommit>(url);
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
