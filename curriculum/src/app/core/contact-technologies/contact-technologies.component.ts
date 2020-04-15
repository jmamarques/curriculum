import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Branch as BranchGit, createGitgraph} from '@gitgraph/js';
import {HeaderService} from '../services/header.service';
import {GitHubService} from '../services/git-hub.service';
import {BaseCommit, Branch} from '../interfaces/git-hub';

@Component({
  selector: 'cod-contact-technologies',
  templateUrl: './contact-technologies.component.html',
  styleUrls: ['./contact-technologies.component.scss']
})
export class ContactTechnologiesComponent implements OnInit, AfterViewInit, OnDestroy {
  protected static map: Map<string, BaseCommit> = new Map();

  constructor(private headerService: HeaderService,
              private gitHubService: GitHubService) {
  }

  @ViewChild('graphContainer') graphContainer: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    /*this.populateGraph();*/
    this.headerService.setContent('Contacts');
  }

  ngOnDestroy(): void {
  }

  populateGraph() {
    /*console.log(this.graphContainer.nativeElement);
    const gitgraph = createGitgraph(this.graphContainer.nativeElement);
    // Simulate git commands with Gitgraph API.
    const master = gitgraph.branch('master');
    master.commit('Initial commit');

    const develop = gitgraph.branch('develop');
    develop.commit('Add TypeScript');

    const aFeature = gitgraph.branch('a-feature');
    aFeature
      .commit('Make it work')
      .commit({subject: 'Make it right', hash: 'test'})
      .commit('Make it fast');

    develop.merge(aFeature);
    develop.commit('Prepare v1');

    master.merge(develop).tag('v1.0.0');*/
    this.gitHubService.getTreeGitHub('joaoMAMarques', 'curriculum').subscribe(async (branches: Branch[]) => {
        /*template?: TemplateName | Template;
        orientation?: Orientation;
        reverseArrow?: boolean;
        initCommitOffsetX?: number;
        initCommitOffsetY?: number;
        mode?: Mode;
        author?: string;
        branchLabelOnEveryCommit?: boolean;
        commitMessage?: string;
        generateCommitHash?: () => Commit["hash"];
        compareBranchesOrder?: CompareBranchesOrder;*/
        const options = {
          /*orientation: 'horizontal',
          author: '',
          mode: 'compact'*/
        };
    });}
        /*
        // @ts-ignore
        const gitgraph = createGitgraph(this.graphContainer.nativeElement, options);

        const mapCommits: Map<string, BaseCommit> = new Map();

        const commits: BaseCommit[][] = await Promise.all(
          branches.map(value => this.gitHubService.getCommitsBybranch('joaoMAMarques', 'curriculum', value.name).then(value1 => value1)));

        let i = 0;
        while (i < branches.length) {
          commits[i].forEach(value => {
            value.branch = branches[i].name;
            if (/*branches[i].name === 'master' || !mapCommits.has(value.sha)) {
              mapCommits.set(value.sha, value);
            }

          });
          branches[i].baseCommits = commits[i];
          i++;
        }

        branches.filter(value => value.name === 'master').forEach(value => {
          let firstCommit = mapCommits.get(value.commit.sha);
          if (!firstCommit && value.baseCommits) {
            firstCommit = value.baseCommits.sort((a, b) => {
              if (a.commit.committer.date < b.commit.committer.date) {
                return -1;
              } else if (a.commit.committer.date > b.commit.committer.date) {
                return 1;
              } else {
                return 0;
              }
            })[0];
          }

          if (firstCommit) {
            const masterBranch = gitgraph.branch(value.name);
            this.recursionBaseCommit(firstCommit, masterBranch, gitgraph, mapCommits, masterBranch);
          }
        });
      },
      error => console.error('Error to get all tree git Hub' + error));
  }

  private recursionBaseCommit(currentCommit: BaseCommit,
                              masterBranch: BranchGit,
                              gitgraph: any,
                              commits: Map<string, BaseCommit>,
                              currentBranch: BranchGit) {

    function extracted(this: any, child1: BaseCommit) {
      if (child1.branch === currentCommit.branch) {
        currentBranch.commit(currentCommit.commit.message);
        this.recursionBaseCommit(child1, masterBranch, gitgraph, commits, currentBranch);
      } else {
        const newBranchGit = gitgraph.branch(child1.branch);
        currentBranch.commit(currentCommit.commit.message);
        this.recursionBaseCommit(child1, masterBranch, gitgraph, commits, newBranchGit);
      }
    }

    if (currentCommit.parents) {
      if (currentCommit.parents.length === 1) {
        currentBranch.commit(currentCommit.commit.message);
        const commit = commits.get(currentCommit.parents[0].sha);
        if (commit) {
          this.recursionBaseCommit(commit, masterBranch, gitgraph, commits, currentBranch);
        }
      } else {
        if (currentCommit.parents.length === 2) {
          const child1 = commits.get(currentCommit.parents[0].sha);
          const child2 = commits.get(currentCommit.parents[1].sha);

          if (child1 && child2) {
            if (child1.branch === child2.branch) {
              currentBranch.commit(currentCommit.commit.message);
              this.recursionBaseCommit(child1, masterBranch, gitgraph, commits, currentBranch);
              this.recursionBaseCommit(child2, masterBranch, gitgraph, commits, currentBranch);
            } else {
              extracted.call(this, child1);
              extracted.call(this, child2);
            }
          } else if (child2) {
            extracted.call(this, child2);
          } else if (child1) {
            extracted.call(this, child1);
          }
        }
      }
    }
  }*/

}
