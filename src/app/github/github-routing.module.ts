import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoListComponent } from './pages/repo-list/repo-list.component';

const routes: Routes = [{ path: 'github', component: RepoListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubRoutingModule {}
