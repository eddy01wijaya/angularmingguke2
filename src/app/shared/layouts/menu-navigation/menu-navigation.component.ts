import { Component } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-menu-navigation',
  templateUrl: './menu-navigation.component.html',
  styleUrl: './menu-navigation.component.css',
})
export class MenuNavigationComponent {
  constructor(private authService: AuthenticationService) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
