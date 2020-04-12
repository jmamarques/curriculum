import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Branch as BranchGit, createGitgraph} from '@gitgraph/js';
import {HeaderService} from '../services/header.service';
import * as AOS from 'aos';
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
    this.headerService.setContent('Contacts');
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      once: true
    });
  }

  ngAfterViewInit(): void {
    this.populateGraph();
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
  }

  ngOnDestroy(): void {
  }

  populateGraph() {
    console.log('entrei');
    this.gitHubService.getTreeGitHub('joaoMAMarques', 'curriculum').subscribe((branches: Branch[]) => {
        console.log('entrei2');
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
          orientation: 'horizontal',
          author: '',
          mode: 'compact'
        };
        // @ts-ignore
        const gitgraph = createGitgraph(this.graphContainer.nativeElement, options);
        const branchesGit: Map<string, BranchGit> = new Map();

        // initialize all branches
        for (const branch of branches) {
          branchesGit.set(branch.name, gitgraph.branch(branch.name));
        }

        for (const branch of branches) {
          const branchGit = branchesGit.get(branch.name);
          if (branchGit) {
            this.recursionBaseCommit(branch.commit.sha, branch.commit.url, branchGit, 0, branchesGit);
          }
        }
      },
      error => console.error('Error to get all tree git Hub' + error));
  }

  private recursionBaseCommit(sha: string, url: string, branch: BranchGit, deep: number, allBranches: Map<string, BranchGit>) {
    const childCommits = (commit: BaseCommit) => {
      if (commit.parents) {
        if (commit.parents.length === 1) {
          branch.commit(commit.commit.message);
          for (const parent of commit.parents) {
            this.recursionBaseCommit(parent.sha, parent.url, branch, deep, allBranches);
          }
          // merge commit
        } else if (commit.parents.length > 1) {
          let branchGit = null;
          allBranches.forEach((value, key) => {
            if (commit.commit.message.includes(key) && key !== branch.name) {
              branchGit = value;
            }
          });
          if (branchGit) {
            branch.merge(branchGit, commit.commit.message);
          } else {
            branch.commit(commit.commit.message);
            for (const parent of commit.parents) {
              this.recursionBaseCommit(parent.sha, parent.url, branch, deep, allBranches);
            }
          }
        }

      }
    };

    if (deep < 5) {
      deep++;
      const cachedCommit = ContactTechnologiesComponent.map.get(sha);
      if (cachedCommit) {
        childCommits.call(this, cachedCommit);
      } else {
        this.gitHubService.getBaseCommit(url).subscribe((commit) => {
          ContactTechnologiesComponent.map.set(sha, commit);
          childCommits.call(this, commit);
        });
      }
    }
    /*if (baseCommit.parents) {
      for (const parent of baseCommit.parents) {
        if (parent.parent) {
          this.recursionBaseCommit(parent.parent, branch);
        }
      }
    }*/
  }
}
