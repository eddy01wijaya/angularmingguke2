import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicsRoutingModule } from './pics-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PicCreateComponent } from './pages/pic-create/pic-create.component';
import { PicListComponent } from './pages/pic-list/pic-list.component';
import { PicDetailComponent } from './pages/pic-detail/pic-detail.component';
import { PicComponent } from './pages/pic/pic.component';

@NgModule({
  declarations: [
    PicCreateComponent,
    PicListComponent,
    PicDetailComponent,
    PicComponent
  ],
  imports: [CommonModule, PicsRoutingModule, SharedModule],
})
export class PicsModule {}
