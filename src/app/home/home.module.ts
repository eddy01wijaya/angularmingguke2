import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AboutUsComponent, ContactUsComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [],
})
export class HomeModule {}
