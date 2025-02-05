import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  loggedInUser: string = '';
  router = inject(Router);
  constructor() {
    if (localStorage.getItem('angularindiUser')) {
      const loggedInUserName = localStorage.getItem('angularindiUser');
      if (loggedInUserName) {
        this.loggedInUser = loggedInUserName;
      }
    }
  }

  onLogout() {
    localStorage.removeItem('angularindiUser');
    this.router.navigate(['/login']);
  }
}
