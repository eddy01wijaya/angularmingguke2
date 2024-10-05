import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubRoutingModule } from './github-routing.module';
import { RepoListComponent } from './pages/repo-list/repo-list.component';


@NgModule({
  declarations: [
    RepoListComponent
  ],
  imports: [
    CommonModule,
    GithubRoutingModule
  ]
})
export class GithubModule { }
