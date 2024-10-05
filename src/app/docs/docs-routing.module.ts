import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocComponent } from './pages/doc/doc.component';
import { GuardService } from '../core/services/guard.service';
import { DocListComponent } from './pages/doc-list/doc-list.component';
import { DocCreateComponent } from './pages/doc-create/doc-create.component';
import { DocDetailComponent } from './pages/doc-detail/doc-detail.component';

const routes: Routes = [
  { path: 'doc', component: DocListComponent, canActivate: [GuardService] },
  {
    path: 'doc/new',
    component: DocCreateComponent,
    canActivate: [GuardService],
  },
  {
    path: 'doc/detail/:id',
    component: DocDetailComponent,
    canActivate: [GuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}
