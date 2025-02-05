import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: userLogin = new userLogin();
  router = inject(Router);
  onLogin() {
    if (
      this.loginObj.username === 'admin' &&
      this.loginObj.password === '12345'
    ) {
      this.router.navigateByUrl('/directive');
      localStorage.setItem('angularindiUser', this.loginObj.username);
    } else {
      alert('wrong credentials');
    }
  }
}

export class userLogin {
  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';
  }
}
