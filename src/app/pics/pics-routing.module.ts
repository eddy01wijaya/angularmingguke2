import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicDetailComponent } from './pages/pic-detail/pic-detail.component';
import { GuardService } from '../core/services/guard.service';
import { PicCreateComponent } from './pages/pic-create/pic-create.component';
import { PicListComponent } from './pages/pic-list/pic-list.component';

const routes: Routes = [
  { path: 'pic', component: PicListComponent, canActivate: [GuardService] },
  {
    path: 'pic/new',
    component: PicCreateComponent,
    canActivate: [GuardService],
  },
  {
    path: 'pic/detail/:id',
    component: PicDetailComponent,
    canActivate: [GuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicsRoutingModule {}
