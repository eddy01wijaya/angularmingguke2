import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../../core/services/github.service';
import { IRepository } from '../../../core/interfaces/i-repository';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrl: './repo-list.component.css',
})
export class RepoListComponent implements OnInit {
  repositories: IRepository[] = [];
  username: string = 'solanoize';

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService
      .getRepos(this.username)
      .subscribe((resp: IRepository[]) => {
        this.repositories = resp;
      });
  }
}
