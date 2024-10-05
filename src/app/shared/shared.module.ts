import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideHttpClient, withXsrfConfiguration } from '@angular/common/http';
import { MenuNavigationComponent } from './layouts/menu-navigation/menu-navigation.component';
import { MenuAppComponent } from './layouts/menu-app/menu-app.component';
import { MessageValidationComponent } from './components/message-validation/message-validation.component';

@NgModule({
  declarations: [
    MenuNavigationComponent,
    MenuAppComponent,
    MessageValidationComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  providers: [
    provideHttpClient(),
    // withXsrfConfiguration({
    //   cookieName: 'csrftoken',
    //   headerName: 'X-CSRFToken',
    // })
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MenuNavigationComponent,
    MenuAppComponent,
    MessageValidationComponent,
  ],
})
export class SharedModule {}
